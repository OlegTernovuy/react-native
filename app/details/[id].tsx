import { Stack, useGlobalSearchParams, router } from 'expo-router';
import {
    ActivityIndicator,
    Linking,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

import useFetch from '../../hooks/useFetch';
import { Container } from '../../styled/index.style';
import {
    CardApplyBlock,
    CardApplyButton,
    CardApplyButtonText,
    CardDetailsAboutDesc,
    CardDetailsAboutTitle,
    CardDetailsImage,
    CardDetailsName,
    CardDetailsWrapper,
} from '@/styled/CardDetails.style';

const CardDetails = () => {
    const params = useGlobalSearchParams();

    const { data, isLoading } = useFetch(params);

    const cardDetails = data[0];

    return (
        <Container>
            <Stack.Screen
                options={{
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <TouchableOpacity
                            testID="back-button"
                            onPress={() => router.back()}
                        >
                            <AntDesign name="back" size={32} color="black" />
                        </TouchableOpacity>
                    ),
                    headerTitle: '',
                }}
            />
            <View>
                {isLoading ? (
                    <ActivityIndicator testID="activity-indicator" />
                ) : (
                    <>
                        {cardDetails !== undefined && (
                            <CardDetailsWrapper>
                                <CardDetailsImage
                                    source={{ uri: cardDetails.avatar }}
                                />
                                <CardDetailsName>
                                    {cardDetails.name}
                                </CardDetailsName>
                                <Text>{cardDetails.occupation}</Text>
                                <View>
                                    <CardDetailsAboutTitle>
                                        About person:
                                    </CardDetailsAboutTitle>
                                    <CardDetailsAboutDesc>
                                        {cardDetails.responsibilitiesAtWork}
                                    </CardDetailsAboutDesc>
                                </View>
                            </CardDetailsWrapper>
                        )}
                    </>
                )}
            </View>
            <CardApplyBlock>
                <CardApplyButton
                    testID="save-emp-button"
                    onPress={() =>
                        Linking.openURL('https://www.linkedin.com/feed/')
                    }
                >
                    <CardApplyButtonText>Save Employees</CardApplyButtonText>
                </CardApplyButton>
            </CardApplyBlock>
        </Container>
    );
};

export default CardDetails;
