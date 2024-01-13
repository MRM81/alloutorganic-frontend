import React, {createContext, useContext} from 'react'
import { Client } from './Client';

export const ApiContext = createContext(new Client(process.env.API_URL));
export const useApiClient = () => useContext(ApiContext);
// export const ApiClient = new Client(process.env.API_URL);