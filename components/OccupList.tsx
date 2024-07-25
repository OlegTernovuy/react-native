import { FlatList, Text } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';

import { OccupButton, OccupWrapper } from '../styled/Occup.style';
import { OCCUPATION_TYPE } from '../constants';

const OccupList = () => {
    const [activeOccup, setActiveOccup] = useState('');

    const keyExtractor = (item: string) => item;

    return (
        <OccupWrapper>
            <FlatList
                data={OCCUPATION_TYPE}
                keyExtractor={keyExtractor}
                renderItem={({ item }) => (
                    <OccupButton
                        onPress={() => {
                            setActiveOccup(item);
                            router.push(`/search/${item}`);
                        }}
                        item={item}
                        activeOccup={activeOccup}
                    >
                        <Text>{item}</Text>
                    </OccupButton>
                )}
                removeClippedSubviews={true}
                maxToRenderPerBatch={1}
                initialNumToRender={1}
                contentContainerStyle={{ columnGap: 8 }}
                horizontal
            />
        </OccupWrapper>
    );
};

export default OccupList;
