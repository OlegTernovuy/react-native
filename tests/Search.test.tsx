import { fireEvent, render } from '@testing-library/react-native';
import { router } from 'expo-router';

import { Search } from '../components';

jest.mock('expo-router', () => ({
    router: {
        push: jest.fn(),
    },
}));

describe('Search component', () => {
    it('should render successfully', () => {
        const { getByPlaceholderText } = render(<Search />);
        const input = getByPlaceholderText('What are you looking for');
        expect(input).toBeTruthy();
    });

    it('should matches snapshot', () => {
        const { toJSON } = render(<Search />);
        expect(toJSON()).toMatchSnapshot();
    });

    it('should navigate to search page', () => {
        const { getByPlaceholderText, getByTestId } = render(<Search />);
        const searchTerm = 'Von';
        const searchInput = getByPlaceholderText('What are you looking for');

        fireEvent.changeText(searchInput, searchTerm);
        fireEvent.press(getByTestId('search-btn'));

        expect(router.push).toHaveBeenCalledWith(`/search/${searchTerm}`);
    });
});
