import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Stack } from 'expo-router';

import {
    Container,
    HeaderContainer,
    WelcomeBlock,
    WelcomeDesc,
    WelcomeTitle,
} from '../styled/index.style';
import { Card, OccupList, Search } from '../components';
import { HorizontalList } from '../styled/Card.style';
import useFetch from '../hooks/useFetch';

export default function Index() {
    const { data, isLoading } = useFetch();

    return (
        <Container>
            <Stack.Screen
                options={{
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => true}>
                            <MaterialCommunityIcons
                                name="menu"
                                size={32}
                                color="black"
                            />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity onPress={() => true}>
                            <MaterialCommunityIcons
                                name="account"
                                size={32}
                                color="black"
                            />
                        </TouchableOpacity>
                    ),
                    headerTitle: '',
                }}
            />
            <HeaderContainer>
                <WelcomeBlock>
                    <WelcomeTitle>Welcome my friend</WelcomeTitle>
                    <WelcomeDesc>Here you can find something</WelcomeDesc>
                </WelcomeBlock>
                <Search />
                <OccupList />
            </HeaderContainer>
            <HorizontalList>
                {isLoading ? <ActivityIndicator /> : <Card data={data} />}
            </HorizontalList>
        </Container>
    );
}
