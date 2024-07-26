import { fireEvent, render } from '@testing-library/react-native';
import { router } from 'expo-router';

import { OccupList } from '../components';

import { OCCUPATION_TYPE } from '../constants';

jest.mock('expo-router', () => ({
    router: {
        push: jest.fn(),
    },
}));

describe('Occcupation List component', () => {
    it('should matches snapshot', () => {
        const { toJSON } = render(<OccupList />);
        expect(toJSON()).toMatchSnapshot();
    });

    it('should contains items from OCCUPATION_TYPE', () => {
        const { getByText } = render(<OccupList />);
        OCCUPATION_TYPE.forEach((occupation) => {
            expect(getByText(occupation)).toBeTruthy();
        });
    });

    it('should navigate to search page', () => {
        const { getByText } = render(<OccupList />);
        const occupation = OCCUPATION_TYPE[0];

        fireEvent.press(getByText(occupation));

        expect(router.push).toHaveBeenCalledWith(`/search/${occupation}`);
    });

    it('should sets active occupation on pressed', () => {
        const { getByText, getByTestId } = render(<OccupList />);
        const occupation = OCCUPATION_TYPE[0];
        const button = getByText(occupation).parent;
        if (button !== null) fireEvent.press(button);
        const activeOccupation = getByTestId('occup-flat-list').props.data.find(
            (item: string) => item === occupation
        );

        expect(activeOccupation).toBeDefined();
    });
});
