import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '../common/constants';
import { TPhoto } from '../types';

export const getPhotos = async (config?: AxiosRequestConfig) => {
  const res = await axios.get<TPhoto[]>('/photos', {
    ...config,
    baseURL: BASE_URL,
    params: {
      _page: 1,
      _limit: 24
    }
  });
  return res.data;
};
