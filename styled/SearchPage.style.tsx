import styled from 'styled-components/native';

import { THEME } from '../constants';

const DetailsContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 75px;
    background-color: ${THEME.Colors.lightGray};
    border-radius: ${THEME.Sizes.large};
    padding: ${THEME.Sizes.medium};
`;

const UserDetailsBlock = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const UserDetailsImage = styled.Image`
    height: 50px;
    width: 50px;
    border-radius: 50px;
`;

const UserDetailsTitle = styled.Text`
    margin-left: ${THEME.Sizes.medium};
    font-size: ${THEME.Sizes.large};
    line-height: ${THEME.Sizes.xxLarge};
    font-weight: 600;
`;

const DetailsButton = styled.TouchableOpacity`
    padding: ${THEME.Sizes.medium};
    border-radius: ${THEME.Sizes.medium};
    justify-content: center;
    align-items: center;
    background-color: ${THEME.Colors.lightBlue};
`;

export {
    DetailsContainer,
    UserDetailsBlock,
    UserDetailsImage,
    UserDetailsTitle,
    DetailsButton
};
