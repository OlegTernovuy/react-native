import { renderHook, waitFor } from '@testing-library/react-native';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

import { mockData } from '../constants/temp';
import useFetch from '../hooks/useFetch';

const mock = new MockAdapter(axios);

describe('useFetch', () => {
    afterEach(() => {
        mock.reset();
    });

    it('should set isLoading to true', () => {
        mock.onGet().reply(200, mockData);
        const { result } = renderHook(() => useFetch());
        expect(result.current.isLoading).toBe(true);
    });

    it('should fetch data', async () => {
        mock.onGet().reply(200, mockData);
        const { result } = renderHook(() => useFetch());
        await waitFor(() => {
            expect(result.current.data).toEqual(mockData);
        });
    });

    it('should set isLoading to false after fetching data', async () => {
        mock.onGet().reply(200, mockData);
        const { result } = renderHook(() => useFetch());
        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
        });
    });

    it('should not set err when fetching data successfully', async () => {
        mock.onGet().reply(200, mockData);
        const { result } = renderHook(() => useFetch());
        await waitFor(() => {
            expect(result.current.error).toBe('');
        });
    });

    it('should set err when fetching data failed', async () => {
        const errMessage = 'Fetching data failed';
        mock.onGet().reply(500, errMessage);
        const { result } = renderHook(() => useFetch());
        await waitFor(() => {
            expect(result.current.error).toBe(errMessage);
        });
    });

    it('should set isLoading to false when fetching data failed', async () => {
        mock.onGet().reply(500);
        const { result } = renderHook(() => useFetch());
        await waitFor(() => {
            expect(result.current.isLoading).toBe(false);
        });
    });

    it('should set data when fetching data failed', async () => {
        mock.onGet().reply(500);
        const { result } = renderHook(() => useFetch());
        await waitFor(() => {
            expect(result.current.data).toEqual([]);
        });
    });
});
