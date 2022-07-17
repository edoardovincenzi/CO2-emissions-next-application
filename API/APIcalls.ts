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
