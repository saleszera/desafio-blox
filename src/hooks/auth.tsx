import React, { createContext, useCallback, useContext, useState } from 'react';
import { api } from '../services/api';

interface AuthContextData {
  signIn: () => Promise<void>;
}

interface AuthState {
  token: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [, setToken] = useState<AuthState>(() => {
    const userTokenStored = localStorage.getItem('@desafioBlox:token');

    if (userTokenStored) {
      api.defaults.headers.authorization = userTokenStored;
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async () => {
    const response = await api.post('/token', {
      username: process.env.REACT_APP_API_USERNAME,
      password: process.env.REACT_APP_API_EMAIL,
      institution_id: process.env.REACT_APP_API_INSTITUTION_ID,
    });

    localStorage.setItem('@desafioBlox:token', response.data.token);

    api.defaults.headers.authorization = response.data.token;

    setToken(response.data.token);
  }, []);

  return (
    <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
}
