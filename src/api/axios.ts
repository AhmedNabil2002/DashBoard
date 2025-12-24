// src/api/axios.ts
import axios,  {type AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export default instance;