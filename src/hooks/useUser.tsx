import { createContext, ComponentChildren } from "preact";
import { useContext, useReducer, useMemo, useCallback, useEffect } from "preact/hooks";
import { IAccount } from "../types/IAccount";
import { auth, verifyToken } from "../services/accounts";
import { IMessage } from "../types/IMessage";
import { timeline as retrieveTimeline } from "../services/message";
import { get } from './../helpers/storage';

interface IAction {
    type: ACTIONS,
    value: unknown,
}

export enum ACTIONS {
    RETRIEVED_USER,
    SET_TIMELINE,
}

interface IUser {
    account: IAccount | undefined,
    timelines: {
        [name: string]: Array<IMessage>
    }
}

interface IContext {
    state: IUser,
    // eslint-disable-next-line no-unused-vars
    dispatch: ((a: IAction) => void),
}

const defaultState: IContext = {
    state: { account: undefined, timelines: {} },
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
        case ACTIONS.SET_TIMELINE: {
            const tl = value as { name: string, messages: Array<IMessage> }
            return { 
                ...state,
                timelines: {
                    [tl.name]: tl.messages,
                }
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
        dispatch({ type: ACTIONS.RETRIEVED_USER, value: user});
    }, []);

    const timeline = useCallback(async (timeline: string) => {
        const tl = await retrieveTimeline(timeline);
        dispatch({ type: ACTIONS.SET_TIMELINE, value: { name: timeline, messages: tl }});
    }, []);

    const actions = useMemo(() => ({ login, timeline }), []);
    return { state, dispatch, actions };
}

export function UserProvider({
    children
}: {
    children: ComponentChildren
}) {
    const [state, dispatch] = useReducer(reducer, defaultState.state);

    const retrieveUserIfLogged = useCallback(async () => {
        const { accessToken } = get();
        if(!accessToken) return;
        const user = await verifyToken(accessToken);
        dispatch({ type: ACTIONS.RETRIEVED_USER, value: user});
    }, []);

    useEffect(() => {
        retrieveUserIfLogged();
    }, [retrieveUserIfLogged]);

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