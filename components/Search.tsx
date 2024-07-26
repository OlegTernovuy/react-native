import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';

import {
    SearchButton,
    SearchContainer,
    SearchInput,
    SearchWrapper,
} from '../styled/index.style';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <SearchContainer>
            <SearchWrapper>
                <SearchInput
                    value={searchTerm}
                    onChangeText={(text) => setSearchTerm(text)}
                    placeholder="What are you looking for"
                />
            </SearchWrapper>
            <SearchButton
                onPress={() => {
                    router.push(`/search/${searchTerm}`);
                    setSearchTerm('');
                }}
                testID="search-btn"
            >
                <Feather name="search" size={24} color="black" />
            </SearchButton>
        </SearchContainer>
    );
};

export default Search;
