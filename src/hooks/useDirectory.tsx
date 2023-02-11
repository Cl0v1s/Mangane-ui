import { createContext, ComponentChildren } from "preact";
import { useMemo, useReducer, useContext, useEffect, useCallback } from "preact/hooks";
import { IAccount, IPartialAccount, isPartial } from "../types/IAccount";
import { account } from "../services/accounts";
import { webfinger } from "../services/instance";
import { useInstance } from "./useInstance";

export enum ACTIONS {
    REGISTER_USER,
    ADD_REQUEST,
}

interface IAction {
    type: ACTIONS,
    value: unknown,
}

interface IDirectory {
    users: {
        [id: string]: IAccount
    },
    requests: Array<string>,
}

interface IContext {
    state: IDirectory,
    // eslint-disable-next-line no-unused-vars
    dispatch: ((a: IAction) => void),
}

const defaultState: IContext = {
    state: { users: {}, requests: []},
    dispatch: () => null,
};

const directoryContext = createContext(defaultState);

function reducer(state: IDirectory, action: IAction) {
    const {
        type,
        value
    } = action;
    switch (type) {
        case ACTIONS.REGISTER_USER: {
            const user = value as IAccount;
            return {
                ...state,
                users: {
                    ...state.users,
                    [user.id]: user,
                },
                requests: state.requests.filter((r) => r !== user.url && r !== user.id)
            }
        }
        case ACTIONS.ADD_REQUEST: {
            return {
                ...state,
                requests: [...state.requests, value as string]
            }
        }
        default: {
            return state;
        }
    }
}

export const useDirectory = () => {
    const {
        state,
        dispatch
    } = useContext(directoryContext);

    const { state: instance} = useInstance();

    const retrieveById = useCallback(async (id: string) => {
        if(state.requests.find((r) => id === r)) return;
        dispatch({ type: ACTIONS.ADD_REQUEST, value: id });
        const user = await account(id);
        dispatch({ type: ACTIONS.REGISTER_USER, value: user })
    }, [dispatch, state.requests]);

    const retrieveByUri = useCallback(async (uri: string) => {
        if(state.requests.find((r) => uri === r)) return;
        dispatch({ type: ACTIONS.ADD_REQUEST, value: uri });
        const res = await webfinger(uri);
        if(res == null) return null;
        const reg = new RegExp(`acct:(.+?)@${instance?.domain}`);
        const localAcct = res.subject.match(reg);
        if(!localAcct) return null;
        retrieveById(localAcct[1]);
    }, [retrieveById, dispatch, state.requests]);

    return useCallback((account: IPartialAccount): IPartialAccount | IAccount => {
        if(!isPartial(account)) return account;
        if(account.url) {
            const match = Object.values(state.users).find((u) => u.url === account.url);
            if(match) return match;
            retrieveByUri(account.url);
        } else if(account.id) {
            if(state.users[account.id as string] != null) return state.users[account.id as string];
            retrieveById(account.id);
        }
        return account;
    }, [state.users]);
};

export function DirectoryProvider({
    children
}: {
    children: ComponentChildren
}) {
    const [state, dispatch] = useReducer(reducer, defaultState.state);

    const value = useMemo(() => ({
        state,
        dispatch
    }), [state, dispatch]);

    return (
        <directoryContext.Provider value={value}>
            { children }
        </directoryContext.Provider>
    );
}