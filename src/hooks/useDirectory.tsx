import { createContext, ComponentChildren } from "preact";
import { useMemo, useReducer, useContext, useEffect, useCallback } from "preact/hooks";
import { IAccount, IPartialAccount } from "../types/IAccount";
import { account } from "../services/accounts";

export enum ACTIONS {
    REGISTER_USER,
}

interface IAction {
    type: ACTIONS,
    value: unknown,
}

interface IDirectory {
    users: {
        [id: string]: IAccount
    }
}

interface IContext {
    state: IDirectory,
    // eslint-disable-next-line no-unused-vars
    dispatch: ((a: IAction) => void),
}

const defaultState: IContext = {
    state: { users: {}},
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
            console.log(value);
            return state;
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

    console.log(state);

    const retrieve = useCallback(async (id: string) => {
        const user = await account(id);
        dispatch({ type: ACTIONS.REGISTER_USER, value: user })
    }, []);

    return useCallback((id: string): IPartialAccount | IAccount => {
        if(state.users[id] != null) return state.users[id];
        retrieve(id);
        return { id };
    }, [state.users]);
};

export function DirectoryProvider({
    children
}: {
    children: ComponentChildren
}) {
    const [state, dispatch] = useReducer(reducer, { users: {}});

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