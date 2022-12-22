import axios, { AxiosInstance } from "axios";

import { AppError } from './../utils/AppError';

type SignOut = () => void;

type APIInstanceProps = AxiosInstance & {
  registerInterceptTokenManager: (signOut: SignOut) => () => void;
};

// Para IOS => 'http://localhost:3333'
// Para Android => 'http://192.168.1.152:3333'

const api = axios.create({
  baseURL: 'http://localhost:3333'
}) as APIInstanceProps;


api.registerInterceptTokenManager = signOut => {
  const interceptTokenManager = api.interceptors.request.use(response => response, requestError => {
    if(requestError?.response?.status === 401){
      if(requestError.reponse.data?.message === 'token.expired' || requestError.response.data?.message === 'token.invalid'){
        
      }
    }



    if(requestError.response && requestError.response.data){
      return Promise.reject(new AppError(requestError.response.data.message));
    } else {
      return Promise.reject(requestError)
    }
  });

  return () => {
    api.interceptors.response.eject(interceptTokenManager);
  };
};


export { api };