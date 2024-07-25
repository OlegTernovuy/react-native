import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

axios.defaults.baseURL =
    'https://64f6f6249d7754084952ddc5.mockapi.io/employees';

export interface IProducts {
    id: string;
    name: string;
    avatar: string;
    occupation: string;
    responsibilitiesAtWork: string;
}

const useFetch = (query?: {}) => {
    const [data, setData] = useState<IProducts[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const options = {
        method: 'GET',
        params: { ...query },
    };

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const res = await axios.request(options);

            setData(res.data);
        } catch (err) {
            if (err instanceof AxiosError && err.response) {
                setError(err.response.data);
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data, isLoading, error };
};

export default useFetch;
