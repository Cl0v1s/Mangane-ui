import { createContext, ComponentChildren } from "preact";
import { useMemo, useReducer, useContext, useEffect, useCallback } from "preact/hooks";
import { customEmojis, serverInfo } from './../services/instance';
import {
    IInstance
} from "../types/IInstance";

export enum ACTIONS {
    RETRIEVED_INSTANCE,
}

interface IAction {
    type: ACTIONS,
    value: unknown,
}

interface IContext {
    state: IInstance | null,
    // eslint-disable-next-line no-unused-vars
    dispatch: ((a: IAction) => void) | undefined,
}

const defaultState: IContext = {
    state: null,
    dispatch: undefined
};

const instanceContext = createContext(defaultState);

function reducer(state: IInstance | null, action: IAction) {
    const {
        type,
        value
    } = action;
    switch (type) {
        case ACTIONS.RETRIEVED_INSTANCE: {
            return {
                ...state,
                ...(value as object)
            } as IInstance
        }
        default: {
            return state;
        }
    }
}

export const useInstance = () => {
    const {
        state,
        dispatch
    } = useContext(instanceContext);
    return {
        state,
        dispatch,
    };
};

export function InstanceProvider({
    children
}: {
    children: ComponentChildren
}) {
    const [state, dispatch] = useReducer(reducer, null);

    const retrieveServerInfo = useCallback(async () => {
        const raw = await Promise.all([serverInfo(), customEmojis()]);
        const instance: IInstance = {
            ...raw[0],
            emojis: raw[1],
        }
        dispatch({ type: ACTIONS.RETRIEVED_INSTANCE, value: instance })
    }, []);

    useEffect(() => {
        retrieveServerInfo();
    }, []);

    const value = useMemo(() => ({
        state,
        dispatch
    }), [state, dispatch]);

    return (
        <instanceContext.Provider value={value}>
            { children }
        </instanceContext.Provider>
    );
}