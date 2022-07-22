import { useEffect, useState } from 'react';
import { APIBASEURL } from '../constant';
import { useQuery } from '@tanstack/react-query';
import { axiosCall } from '../utility/costant';
import { ICountries, IGetLatLong, IStatistics } from '../model';
import axios from 'axios';

export const useGetCountries = () => {
  const { isLoading, data, error } = useQuery(
    ['useGetCountries'],
    async (): Promise<ICountries> => {
      return await (
        await axiosCall.get(`countries.json`)
      ).data;
    }
  );
  return { isLoading, data, error };
};

export const useGetLastSixMonths_country = (country: string) => {
  const dateNow: Date = new Date(Date.now());
  const endMonth = dateNow.getMonth() + 2;
  const startMonth =
    endMonth - 6 <= -1 ? 12 - (endMonth - 6) * -1 : endMonth - 6;
  const endYear = dateNow.getFullYear();
  const startYear =
    endMonth - 6 <= -1 ? dateNow.getFullYear() - 1 : dateNow.getFullYear();
  const { isLoading, error, data } = useQuery(
    ['useGetLastSixMonths_country', country],
    async (): Promise<IStatistics[]> => {
      return await (
        await axiosCall.get(
          `carbonmonoxide/statistics.json?country=${country}&interval=month&begin=${startYear}-${startMonth}-01&end=${endYear}-${endMonth}-25&limit=6&offset=0`
        )
      ).data;
    },
    {
      enabled: Boolean(country),
    }
  );

  return { isLoading, data, error };
};

export const useGetLatLong_city = (city: string) => {
  const bodyFormData = new FormData();
  bodyFormData.append('name', city);
  const { isLoading, error, data, isFetching } = useQuery(
    ['useGetLatLong_city', city],
    async (): Promise<IGetLatLong | string> => {
      return await (
        await axios.postForm(
          `https://www.gps-longitudine-latitudine.it/main/checkgeocode`,
          bodyFormData
        )
      ).data;
    },
    {
      enabled: Boolean(city),
    }
  );

  return { isLoading, data, error, isFetching };
};
