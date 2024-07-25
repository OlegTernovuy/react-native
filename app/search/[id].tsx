import { router, Stack, useGlobalSearchParams } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {
    ActivityIndicator,
    FlatList,
    TouchableOpacity,
    View,
} from 'react-native';

import { Container, ErrorText } from '../../styled/index.style';
import { OCCUPATION_TYPE } from '../../constants';
import useFetch from '../../hooks/useFetch';
import {
    DetailsButton,
    DetailsContainer,
    UserDetailsBlock,
    UserDetailsImage,
    UserDetailsTitle,
} from '../../styled/SearchPage.style';

const Search = () => {
    const params = useGlobalSearchParams();
    let query = {};
    if (typeof params.id === 'string' && OCCUPATION_TYPE.includes(params.id)) {
        query = { occupation: params.id };
    } else {
        query = { name: params.id };
    }

    const { data, isLoading, error } = useFetch(query);

    const handleUserDetails = (id: string) => {
        router.push(`/details/${id}`);
    };

    return (
        <Container>
            <Stack.Screen
                options={{
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => router.back()}>
                            <AntDesign name="back" size={32} color="black" />
                        </TouchableOpacity>
                    ),
                    headerTitle: '',
                }}
            />
            {isLoading ? (
                <ActivityIndicator />
            ) : error ? (
                <ErrorText>{error}</ErrorText>
            ) : (
                <View style={{ padding: 8 }}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <DetailsContainer key={item.id}>
                                <UserDetailsBlock>
                                    <UserDetailsImage
                                        source={{ uri: item.avatar }}
                                    />
                                    <UserDetailsTitle>
                                        {item.name}
                                    </UserDetailsTitle>
                                </UserDetailsBlock>
                                <DetailsButton
                                    onPress={() => handleUserDetails(item.id)}
                                >
                                    <MaterialCommunityIcons
                                        name="account-details-outline"
                                        size={24}
                                        color="black"
                                    />
                                </DetailsButton>
                            </DetailsContainer>
                        )}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ rowGap: 8 }}
                    />
                </View>
            )}
        </Container>
    );
};

export default Search;
