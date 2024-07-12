// src/context/useGlobalState.ts
import { useContext } from 'react';
import { GlobalStateContext, GlobalStateContextType } from './GlobalStateContext';

const useGlobalState = (): GlobalStateContextType => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};

export default useGlobalState;