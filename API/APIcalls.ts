import { useEffect, useState } from 'react';
import { APIBASEURL } from '../constant';
import { useQuery } from '@tanstack/react-query';
import { axiosCall } from '../utility/costant';
import { ICountries, IStatistics } from '../model';

export const useGetCountries = () => {
  const { isLoading, data, error } = useQuery(
    ['useGraficoGenericoScelta'],
    async (): Promise<ICountries> => {
      return await (
        await axiosCall.get(`countries.json`)
      ).data;
    }
  );
  return { isLoading, data, error };
};

export const useGetLastSixMonths = (country: string) => {
  const dateNow: Date = new Date(Date.now());
  const endMonth = dateNow.getMonth() + 2;
  const startMonth =
    endMonth - 6 <= -1 ? 12 - (endMonth - 6) * -1 : endMonth - 6;
  const endYear = dateNow.getFullYear();
  const startYear =
    endMonth - 6 <= -1 ? dateNow.getFullYear() - 1 : dateNow.getFullYear();
  const { isLoading, error, data } = useQuery(
    ['useGetLastSixMonths'],
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
