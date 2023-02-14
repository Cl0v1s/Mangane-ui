import { createContext, ComponentChildren } from "preact";
import { useContext, useReducer, useMemo, useCallback } from "preact/hooks";
import { IAccount } from "../types/IAccount";
import { auth } from "../services/accounts";

interface IAction {
    type: ACTIONS,
    value: unknown,
}

export enum ACTIONS {
    RETRIEVED_USER
}

interface IUser {
    account: IAccount | undefined
}

interface IContext {
    state: IUser,
    // eslint-disable-next-line no-unused-vars
    dispatch: ((a: IAction) => void),
}

const defaultState: IContext = {
    state: { account: undefined },
    dispatch: () => null,
};

const userContext = createContext(defaultState);

function reducer(state: IUser, action: IAction) {
    const {
        type,
        value
    } = action;
    switch (type) {
        case ACTIONS.RETRIEVED_USER: {
            return {
                ...state,
                account: value as IAccount,
            }
        }
        default: {
            return state;
        }
    }
}

export const useUser = () => {
    const { state, dispatch } = useContext(userContext);

    const login = useCallback(async (username: string, password: string) => {
        const user = await auth(username, password);
        console.log(user);
        dispatch({ type: ACTIONS.RETRIEVED_USER, value: user});
    }, []);

    const actions = useMemo(() => ({ login }), []);
    return { state, dispatch, actions };
}

export function UserProvider({
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
        <userContext.Provider value={value}>
            { children }
        </userContext.Provider>
    );
}