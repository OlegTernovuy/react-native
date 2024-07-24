import { ActivityIndicator, FlatList } from 'react-native';
import React, { memo, useCallback } from 'react';
import { router } from 'expo-router';

import { CardImage, CardItem, CardText } from '../styled/Card.style';
import useFetch, { IProducts } from '../hooks/useFetch';

const Card = () => {
    const { data, isLoading } = useFetch();

    const handleCardDetails = useCallback((id: string) => {
        router.push(`/details/${id}`);
    }, []);

    const keyExtractor = useCallback((item: IProducts) => item.id, []);

    const renderItem = useCallback(({ item }: { item: IProducts }) => (
        <MemoizedCardItem item={item} handleCardDetails={handleCardDetails} />
    ), [handleCardDetails]);

    return (
        <>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    removeClippedSubviews={true}
                    data={data}
                    renderItem={renderItem}
                    maxToRenderPerBatch={10}
                    initialNumToRender={5}
                    keyExtractor={keyExtractor}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ columnGap: 16 }}
                    horizontal
                />
            )}
        </>
    );
};

interface CardItemProps {
    item: IProducts;
    handleCardDetails: (id: string) => void;
}

const CardItemComponent = ({ item, handleCardDetails }: CardItemProps) => {
    return (
        <CardItem onPress={() => handleCardDetails(item.id)}>
            <CardImage source={{ uri: item.avatar }} />
            <CardText>{item.name}</CardText>
        </CardItem>
    );
};

const MemoizedCardItem = memo(CardItemComponent);

export default memo(Card);
