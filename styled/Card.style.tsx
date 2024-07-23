import styled from 'styled-components/native';

import { THEME } from '../constants';

const HorizontalList = styled.ScrollView`
    flex: 1;
    margin-top: ${THEME.Sizes.large};
    padding: 0 ${THEME.Sizes.medium};
`;

const CardItem = styled.TouchableOpacity`
    height: 100%;
    width: 200px;
    align-items: center;
    background-color: ${THEME.Colors.lightBlue};
    border-radius: ${THEME.Sizes.large};
    padding: ${THEME.Sizes.large};
`;

const CardImage = styled.Image`
    height: 100px;
    width: 100%;
`;

const CardText = styled.Text`
    margin-top: ${THEME.Sizes.medium};
`;

export { HorizontalList, CardItem, CardImage, CardText };
