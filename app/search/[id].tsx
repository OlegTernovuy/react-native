import { router, Stack, useGlobalSearchParams } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import {
    FlatList,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { OCCUPATION_TYPE } from '../../constants';
import useFetch from '../../hooks/useFetch';
import { Container } from '../../styled/index.style';

const Search = () => {
    const params = useGlobalSearchParams();
    let query = {};
    if (typeof params.id === 'string' && OCCUPATION_TYPE.includes(params.id)) {
        query = { occupation: params.id };
    } else {
        query = { name: params.id };
    }

    const { data, isLoading } = useFetch(query);
    console.log(data);

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
            <ScrollView>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <View key={item.id}>
                            <Image source={{ uri: item.avatar }} />
                            <Text>{item.name}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ columnGap: 16 }}
                />
            </ScrollView>
        </Container>
    );
};

export default Search;
