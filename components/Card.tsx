import { FlatList } from 'react-native';
import { router } from 'expo-router';

import { CardImage, CardItem, CardText } from '../styled/Card.style';
import { IProducts } from '../hooks/useFetch';

interface IPropsData {
    data: IProducts[];
}

const Card = ({ data }: IPropsData) => {
    const handleCardDetails = (id: string) => {
        router.push(`/details/${id}`);
    };

    // const renderItem = (item: IProducts) => {
    //     <CardItem key={item.id} onPress={() => handleCardDetails(item.id)}>
    //         <CardImage source={{ uri: item.avatar }} />
    //         <CardText>{item.name}</CardText>
    //     </CardItem>;
    // };

    // const memoizedValue = useMemo(() => renderItem, [data]);

    return (
        <FlatList
            data={data}
            // renderItem={memoizedValue}
            renderItem={({ item }) => (
                <CardItem
                    key={item.id}
                    onPress={() => handleCardDetails(item.id)}
                >
                    <CardImage source={{ uri: item.avatar }} />
                    <CardText>{item.name}</CardText>
                </CardItem>
            )}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ columnGap: 16 }}
            horizontal
        />
    );
};

export default Card;
