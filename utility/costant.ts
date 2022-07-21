import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { APIBASEURL } from '../constant';
import { ICrumbs } from '../model';

export const queryClient = new QueryClient();

export const axiosCall = axios.create({
  baseURL: APIBASEURL,
  headers: {
    'Content-type': 'application/json',
  },
});

export const array: ICrumbs[] = [
  { name: 'Home', href: '/' },
  { name: 'Grafico generico', href: '/grafico-generico' },
  { name: 'Grafico ricerca avanzata', href: '/grafico-ricerca-avanzata' },
];
