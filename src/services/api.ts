import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api-dev.plataformablox.com.br/api',
});
