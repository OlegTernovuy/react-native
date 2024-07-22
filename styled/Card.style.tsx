import styled from 'styled-components/native';

import { Colors } from '../constants/theme';

export const VerticalList = styled.ScrollView`
    flex: 1;
    margin-top: 1rem;
`;

export const CardItem = styled.View`
    height: 100;
    background-color: ${Colors.lightBlue};
    border-radius: 1rem;
    padding: 1rem;
`;
