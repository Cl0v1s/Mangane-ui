import { ComponentChildren, createContext } from 'preact';
import {
  MutableRef, useContext, useEffect, useMemo, useReducer, useRef,
} from 'preact/hooks';

import { IConfig } from '../types/IConfig';

import configFile from '../assets/mangane.json';

interface IAction {
  type: string,
  value: unknown,
}

interface IContext {
  state: IConfig,
  // eslint-disable-next-line no-unused-vars
  dispatch: ((a: IAction) => void) | undefined,
}

const defaultState: IContext = { state: configFile, dispatch: undefined };

const config = createContext(defaultState);

function reducer(state: IConfig, action: IAction) {
  const { value } = action;
  switch (value) {
    default: {
      return state;
    }
  }
}

const useConfig = () => {
  const { state, dispatch } = useContext(config);
  return {
    state,
    dispatch,
  };
};

function ColorWrapper({ children }: { children: ComponentChildren}) {
  const root: MutableRef<HTMLDivElement | null> = useRef(null);
  const { state } = useConfig();

  useEffect(() => {
    Object.keys(state.colors).forEach((colorName) => {
      const { h, s } = (state.colors as never)[colorName];
      for (let i = 100; i <= 900; i += 100) {
        root.current?.style.setProperty(`--color-${colorName}-${i}`, `${h} ${s}% ${i / 10}%`);
      }
    });
  }, []);

  return (
    <div ref={root}>
      { children }
    </div>
  );
}

function ConfigProvider({ children } : { children: ComponentChildren}) {
  const [state, dispatch] = useReducer(reducer, configFile);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <config.Provider value={value}>
      <ColorWrapper>
        { children}
      </ColorWrapper>
    </config.Provider>
  );
}

export { ConfigProvider, useConfig };
