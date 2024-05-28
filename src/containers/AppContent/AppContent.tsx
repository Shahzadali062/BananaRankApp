import React, { useEffect, useRef } from 'react';
import { SafeAreaView, FlatList, Animated , StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState, User } from '../../Redux/types';
import styles from './style';
import SearchBar from '../../components/SearchBar/SearchBar';
import ButtonContainer from '../../components/ButtonContainer/ButtonContainer';
import UserItem from '../../components/UserItem/UserItem';
import { useUserHandlers } from '../../hooks/useUserHandlers';

const AppContent: React.FC = () => {
  const { handleSearch, handleToggleSort, handleToggleRankView } = useUserHandlers();
  const searchTerm = useSelector((state: RootState) => state.searchTerm);
  const searchedUser = useSelector((state: RootState) => state.searchedUser);
  const userList = useSelector((state: RootState) => state.userList);
  const sortByName = useSelector((state: RootState) => state.sortByName);
  const showLowestRanked = useSelector((state: RootState) => state.showLowestRanked);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [userList]);

  const renderItem = ({ item, index }: { item: User, index: number }) => {
    return (
      <Animated.View style={[styles.userItem, searchedUser && searchedUser.uid === item.uid && styles.highlight, { opacity: fadeAnim }]}>
        <UserItem item={item} index={index} searchedUser={searchedUser} />
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      <ButtonContainer
        searchTerm={searchTerm}
        sortByName={sortByName}
        showLowestRanked={showLowestRanked}
        onToggleSort={handleToggleSort}
        onToggleRankView={handleToggleRankView}
      />
      <FlatList
        data={userList}
        keyExtractor={item => item.uid}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default AppContent;
