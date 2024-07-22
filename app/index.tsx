import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';
import { Stack } from 'expo-router';

import {
    Container,
    IconButton,
    SearchButton,
    SearchContainer,
    SearchInput,
    SearchWrapper,
    WelcomeBlock,
    WelcomeDesc,
    WelcomeTitle,
} from '../styled/index.style';
import Card from '../components/Card';

export default function Index() {
    return (
        <Container>
            <Stack.Screen
                options={{
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <IconButton onPress={() => true}>
                            <MaterialCommunityIcons
                                name="menu"
                                size={32}
                                color="black"
                            />
                        </IconButton>
                    ),
                    headerRight: () => (
                        <IconButton onPress={() => true}>
                            <MaterialCommunityIcons
                                name="account"
                                size={32}
                                color="black"
                            />
                        </IconButton>
                    ),
                    headerTitle: '',
                }}
            />
            <View>
                <WelcomeBlock>
                    <WelcomeTitle>Welcome my friend</WelcomeTitle>
                    <WelcomeDesc>Here you can find something</WelcomeDesc>
                </WelcomeBlock>
            </View>
            <SearchContainer>
                <SearchWrapper>
                    <SearchInput />
                </SearchWrapper>
                <TouchableOpacity></TouchableOpacity>
                <SearchButton>
                    <Feather name="search" size={24} color="black" />
                </SearchButton>
            </SearchContainer>
            <Card />
        </Container>
    );
}
