import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { APIBASEURL } from '../constant';
import { IAppStore, ICrumbs, IErrorFields, IStatistics } from '../model';
import create from 'zustand';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

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

export const useStore = create<IAppStore>((set) => ({
  cityFounded: '',
  latitudine: null,
  longitudine: null,
  error: null,
  dataAPI: [],
  errorDataAPI: '',
  infoDataAPI: {
    tab: '',
    date: '',
    filters: { interval: '', dateFrom: '', dateTo: '' },
  },
  populateCityFounded: (newCityFounded) => set({ cityFounded: newCityFounded }),
  populateLat: (newLat) => set({ latitudine: newLat }),
  populateLong: (newLong) => set({ longitudine: newLong }),
  populateError: (newError) => set({ error: newError }),
  populateDataAPI: (newDataAPI) => set({ dataAPI: newDataAPI }),
  populateErrorDataAPI: (newError) => set({ errorDataAPI: newError }),
  populateInfoDataAPI: (newInfoDataAPI) => set({ infoDataAPI: newInfoDataAPI }),
}));
