import { fireEvent, render } from '@testing-library/react-native';
import { waitFor } from '@testing-library/react-native';
import MockAdapter from 'axios-mock-adapter';
import { router } from 'expo-router';
import axios from 'axios';

import { mockData } from '../constants/temp';
import { Card } from '../components';

const mock = new MockAdapter(axios);

jest.mock('expo-router', () => ({
    router: {
        push: jest.fn(),
    },
}));

describe('Card component', () => {
    afterEach(() => {
        mock.reset();
    });

    it('should matches snapshot when data is loaded', async () => {
        mock.onGet().reply(200, mockData);
        const { toJSON } = render(<Card />);
        await waitFor(() => {
            expect(toJSON()).toMatchSnapshot();
        });
    });

    it('should matches snapshot when data is loading', async () => {
        mock.onGet().reply(() => new Promise(() => {}));
        const { toJSON } = render(<Card />);
        expect(toJSON()).toMatchSnapshot();
    });

    it('should show loader indicator when data is fetching', async () => {
        mock.onGet().reply(200, mockData);
        const { getByTestId } = render(<Card />);
        expect(getByTestId('activity-indicator')).toBeTruthy();
    });

    it('should render list of cards when data is fetched', async () => {
        mock.onGet().reply(200, mockData);
        const { getByText } = render(<Card />);
        await waitFor(() => {
            expect(getByText('Raquel Powlowski')).toBeTruthy();
        });
    });

    it('should contains cards from data', async () => {
        mock.onGet().reply(200, mockData);
        const { getByText } = render(<Card />);
        await waitFor(() => {
            mockData.forEach((item) => {
                expect(getByText(item.name)).toBeTruthy();
            });
        });
    });

    it('should navigate to card details page', async () => {
        mock.onGet().reply(200, mockData);
        const { getByText } = render(<Card />);
        const card = await waitFor(() => getByText('Raquel Powlowski'));

        fireEvent.press(card);

        expect(router.push).toHaveBeenCalledWith(`/details/1`);
    });
});
