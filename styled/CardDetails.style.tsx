import { styled } from 'styled-components/native';

import { THEME } from '../constants';

const CardDetailsWrapper = styled.View`
    align-items: center;
`;

const CardDetailsImage = styled.Image`
    height: 100px;
    width: 100px;
    border-radius: 50px;
    margin-bottom: ${THEME.Sizes.medium};
`;

const CardDetailsName = styled.Text`
    font-size: ${THEME.Sizes.large};
    line-height: ${THEME.Sizes.xxLarge};
    font-weight: 600;
    margin-bottom: ${THEME.Sizes.small};
`;

const CardDetailsAboutTitle = styled.Text`
    font-size: ${THEME.Sizes.xLarge};
    line-height: ${THEME.Sizes.xxLarge};
    font-weight: 600;
    margin-bottom: ${THEME.Sizes.small};
`;

const CardDetailsAboutDesc = styled.Text`
    font-size: ${THEME.Sizes.large};
    line-height: ${THEME.Sizes.xxLarge};
`;

const CardApplyBlock = styled.View`
    position: absolute;
    bottom: 8px;
    right: 0;
    left: 0;
    height: 75px;
    padding: ${THEME.Sizes.medium};
    background-color: ${THEME.Colors.lightWhite};
`;

const CardApplyButton = styled.TouchableOpacity`
    flex: 1;
    background-color: ${THEME.Colors.lightBlue};
    height: 100%;
    align-items: center;
    justify-content: center;
    border-radius: ${THEME.Sizes.xLarge};
`;

const CardApplyButtonText = styled.Text`
    color: ${THEME.Colors.primary};
    font-size: ${THEME.Sizes.xLarge};
    font-weight: 600;
`;

export {
    CardDetailsWrapper,
    CardDetailsImage,
    CardDetailsName,
    CardDetailsAboutTitle,
    CardDetailsAboutDesc,
    CardApplyBlock,
    CardApplyButton,
    CardApplyButtonText
};
