import React from 'react';
import { View, Text } from 'react-native';
import { User } from '../../Redux/types';
import styles from '../../containers/AppContent/style';

interface UserItemProps {
    item: User;
    index: number;
    searchedUser: User | null;
}

const UserItem: React.FC<UserItemProps> = ({ item, index, searchedUser }) => {
    return (
        <>
            <Text style={styles.rank}>{item.rank ? item.rank : index + 1}. </Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.bananas}>{item.bananas} bananas</Text>
        </>
    );
};

export default UserItem;
