import { styled } from 'styled-components/native';

import { THEME } from '../constants';

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${THEME.Colors.lightWhite};
    padding: 0 ${THEME.Sizes.medium};
`;

const HeaderContainer = styled.View`
    padding: 0 ${THEME.Sizes.medium};
`;

const WelcomeBlock = styled.View`
    width: 100%;
`;

const WelcomeTitle = styled.Text`
    font-size: ${THEME.Sizes.xLarge};
    color: ${THEME.Colors.primary};
`;

const WelcomeDesc = styled.Text`
    font-size: ${THEME.Sizes.xxLarge};
    color: ${THEME.Colors.secondary};
    margin-top: ${THEME.Sizes.small};
`;

const SearchContainer = styled.View`
    flex-direction: row;
    height: 50px;
    margin-top: ${THEME.Sizes.medium};
`;

const SearchWrapper = styled.View`
    flex: 1;
    background-color: ${THEME.Colors.lightGray};
    margin-right: ${THEME.Sizes.small};
    border-radius: ${THEME.Sizes.large};
    height: 100%;
`;

const SearchInput = styled.TextInput`
    height: 100%;
    width: 100%;
    padding: ${THEME.Sizes.small};
`;

const SearchButton = styled.TouchableOpacity`
    width: 50px;
    height: 100%;
    border-radius: ${THEME.Sizes.large};
    background-color: ${THEME.Colors.lightBlue};
    justify-content: center;
    align-items: center;
`;

const ErrorText = styled.Text`
    margin: 0 auto;
`;

export {
    Container,
    HeaderContainer,
    WelcomeBlock,
    WelcomeTitle,
    WelcomeDesc,
    SearchContainer,
    SearchWrapper,
    SearchInput,
    SearchButton,
    ErrorText
};
