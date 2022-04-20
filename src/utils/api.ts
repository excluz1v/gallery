import axios, { AxiosRequestConfig } from 'axios';
import { BASIC_URL } from '../common/constants';

export const getPhotos = async (config: AxiosRequestConfig) => {
  const res = await axios.get(BASIC_URL, config);
  return res.data;
};
