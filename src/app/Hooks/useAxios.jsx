import axios from 'axios';
import React from 'react';

export const AxiosSource = axios.create({
    baseURL: 'https://watch-server-07.vercel.app',

  });

const useAxios = () => {
    return AxiosSource
};

export default useAxios;