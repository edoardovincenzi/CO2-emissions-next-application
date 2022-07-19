import { useEffect, useState } from 'react';
import axios from 'axios';
import { APIBASEURL } from '../constant';

export const useGraficoGenericoScelta = () => {
  const [data, setData] = useState<Object>([]);
  const [error, setError] = useState<Error | unknown>();

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`${APIBASEURL}/countries.json`);
      setData(data);
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { data, error };
};

export const useGetLastSixMonths = (country: string) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState<Error | unknown>();
  const dateNow: Date = new Date(Date.now());
  const endMonth = 3;
  // const endMonth = dateNow.getMonth() + 2;
  const startMonth =
    endMonth - 6 <= -1 ? 12 - (endMonth - 6) * -1 : endMonth - 6;
  const endYear = dateNow.getFullYear();
  const startYear =
    endMonth - 6 <= -1 ? dateNow.getFullYear() - 1 : dateNow.getFullYear();

  console.log(country);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `${APIBASEURL}/carbonmonoxide/statistics.json?country=${country}&interval=month&begin=${startYear}-${startMonth}-01&end=${endYear}-${endMonth}-25&limit=6&offset=0`
      );
      setData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { data, error };
};
