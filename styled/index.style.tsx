import { styled } from 'styled-components/native';

import { Colors } from '../constants/theme';

export const IconButton = styled.TouchableOpacity`
    padding: 0 0.5rem;
`;

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${Colors.lightWhite};
    padding: 0 0.5rem;
`;

export const WelcomeBlock = styled.View`
    width: 100%;
`;

export const WelcomeTitle = styled.Text`
    font-size: 20px;
    color: ${Colors.primary};
`;

export const WelcomeDesc = styled.Text`
    font-size: 24px;
    color: ${Colors.secondary};
    margin-top: 0.25rem;
`;

export const SearchContainer = styled.View`
    flex-direction: row;
    height: 50px;
    margin-top: 0.5rem;
`;

export const SearchWrapper = styled.View`
    flex: 1;
    background-color: ${Colors.lightGray};
    margin-right: 0.25rem;
    border-radius: 0.5rem;
    height: 100%;
`;

export const SearchInput = styled.TextInput`
    height: 100%;
    width: 100%;
    padding: 0.25rem;
`;

export const SearchButton = styled.TouchableOpacity`
    width: 50px;
    height: 100%;
    border-radius: 16px;
    background-color: ${Colors.lightBlue};
    justify-content: center;
    align-items: center;
`;
