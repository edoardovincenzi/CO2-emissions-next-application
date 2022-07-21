import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { APIBASEURL } from '../constant';
import { ICrumbs, IErrorFields } from '../model';

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

export const errorFieldsInitial: IErrorFields = {
  dates: { IsError: false, textMessage: '' },
  latitudine: { IsError: false, textMessage: '' },
  longitudine: { IsError: false, textMessage: '' },
};
