import { fireEvent, render } from '@testing-library/react-native';
import { waitFor } from '@testing-library/react-native';
import MockAdapter from 'axios-mock-adapter';
import { router } from 'expo-router';
import axios from 'axios';

import { mockData } from '../constants/temp';
import SearchPage from '../app/search/[id]';

const mock = new MockAdapter(axios);

jest.mock('expo-router', () => ({
    useGlobalSearchParams: jest.fn().mockReturnValue({ id: 'Raq' }),
    router: {
        push: jest.fn(),
    },
}));

describe('CardDetaild component', () => {
    afterEach(() => {
        mock.reset();
    });

    it('should matches snapshot when data is loaded', async () => {
        mock.onGet('', { params: { name: 'Raq' } }).reply(200, mockData);
        const { toJSON } = render(<SearchPage />);
        await waitFor(() => {
            expect(toJSON()).toMatchSnapshot();
        });
    });

    it('should show loader indicator when data is fetching', async () => {
        mock.onGet('', { params: { name: 'Raq' } }).reply(200, mockData);
        const { getByTestId } = render(<SearchPage />);
        expect(getByTestId('activity-indicator')).toBeTruthy();
    });

    it('should contains cards from search', async () => {
        mock.onGet('', { params: { name: 'Raq' } }).reply(200, mockData);
        const { getByText } = render(<SearchPage />);
        await waitFor(() => {
            mockData.forEach((item) => {
                expect(getByText(item.name)).toBeTruthy();
            });
        });
    });

    it('should navigate to card details page', async () => {
        mock.onGet('', { params: { name: 'Raq' } }).reply(200, mockData);
        const { getByTestId } = render(<SearchPage />);
        const card = await waitFor(() => getByTestId('card-details'));

        fireEvent.press(card);

        expect(router.push).toHaveBeenCalledWith(`/details/1`);
    });

    it('should call router.back on button click', async () => {
        mock.onGet('', { params: { name: 'Raq' } }).reply(200, mockData);
        const { getByTestId } = render(<SearchPage />);
        fireEvent.press(getByTestId('back-button'));
        expect(router.back).toHaveBeenCalled();
    });
});
