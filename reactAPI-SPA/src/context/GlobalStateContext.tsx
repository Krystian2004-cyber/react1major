// src/context/GlobalStateContext.tsx
import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { Car } from '../interfaces/interfaces';
// Define the shape of the global state
export interface GlobalState {
  user: User | null;
  favourites: Item[];
  car: Car | null;
}

export interface Item {
    id: number;
    name: string;
    description: string;
  }

export interface User {
  name: string;
  email: string;
  token:string;
}



// Define the context value type
export interface GlobalStateContextType {
  state: GlobalState;
  setState: Dispatch<SetStateAction<GlobalState>>;
}

const GlobalStateContext = createContext<GlobalStateContextType | undefined>(undefined);

const GlobalStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<GlobalState>({
    user: null,
    favourites:[],
    car:null
  });

  return (
    <GlobalStateContext.Provider value={{ state, setState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export { GlobalStateContext, GlobalStateProvider };
