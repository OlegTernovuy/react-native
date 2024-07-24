import styled from 'styled-components/native';

import { THEME } from '../constants';

interface IActiveBtn {
    activeOccup: string;
    item: string;
}

const OccupWrapper = styled.View`
    width: 100%;
    margin-top: ${THEME.Sizes.large};
`;

const OccupButton = styled.TouchableOpacity<IActiveBtn>`
    border: ${(props) => (props.activeOccup === props.item ? 0 : '1px solid')};
    border-radius: ${THEME.Sizes.large};
    padding: ${THEME.Sizes.small} ${THEME.Sizes.medium};
    background-color: ${(props) =>
        props.activeOccup === props.item
            ? THEME.Colors.lightBlue
            : THEME.Colors.lightGray};
`;

export { OccupWrapper, OccupButton };
