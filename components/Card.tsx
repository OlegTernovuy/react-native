import { FlatList, Text } from 'react-native';

import { CardItem, VerticalList } from '../styled/Card.style';
import { DATA } from '../data/index';

const Card = () => {
    return (
        <VerticalList showsVerticalScrollIndicator={false}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => (
                    <CardItem key={item.id}>
                        <Text>{item.name}</Text>
                    </CardItem>
                )}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ columnGap: 16 }}
                horizontal
            />
        </VerticalList>
    );
};

export default Card;
