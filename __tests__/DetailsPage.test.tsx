import { fireEvent, render } from '@testing-library/react-native';
import { waitFor } from '@testing-library/react-native';
import MockAdapter from 'axios-mock-adapter';
import { Linking } from 'react-native';
import { router } from 'expo-router';
import axios from 'axios';

import CardDetails from '../app/details/[id]';

import { mockData } from '../constants/temp';

const mock = new MockAdapter(axios);

jest.mock('expo-router', () => ({
    useGlobalSearchParams: jest.fn().mockReturnValue({ id: '1' }),
    router: {
        back: jest.fn(),
    },
    Stack: {
        Screen: ({ children, options }: any) => (
            <>
                {options?.headerLeft && options.headerLeft()}
                {children}
            </>
        ),
    },
}));

describe('CardDetaild component', () => {
    afterEach(() => {
        mock.reset();
    });

    it('should matches snapshot when data is loaded', async () => {
        mock.onGet().reply(200, mockData);
        const { toJSON } = render(<CardDetails />);
        await waitFor(() => {
            expect(toJSON()).toMatchSnapshot();
        });
    });

    it('should show loader indicator when data is fetching', () => {
        mock.onGet('', { params: { id: '1' } }).reply(200, mockData);
        const { getByTestId } = render(<CardDetails />);
        expect(getByTestId('activity-indicator')).toBeTruthy();
    });

    it('should render card details when data is fetched', async () => {
        mock.onGet('', { params: { id: '1' } }).reply(200, mockData);
        const { getByText } = render(<CardDetails />);
        await waitFor(() => {
            expect(getByText(mockData[0].name)).toBeTruthy();
        });
    });

    it('should call router.back on button click', () => {
        mock.onGet('', { params: { id: '1' } }).reply(200, mockData);
        const { getByTestId } = render(<CardDetails />);
        fireEvent.press(getByTestId('back-button'));
        expect(router.back).toHaveBeenCalledTimes(1);
    });

    it('should call open LinkedIn url on button click save employees', () => {
        mock.onGet('', { params: { id: '1' } }).reply(200, mockData);
        const openURL = jest.spyOn(Linking, 'openURL');
        const { getByTestId } = render(<CardDetails />);
        fireEvent.press(getByTestId('save-emp-button'));
        expect(openURL).toHaveBeenCalledWith('https://www.linkedin.com/feed/');
    });
});
