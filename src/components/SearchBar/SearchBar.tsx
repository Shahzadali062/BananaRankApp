import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { setSearchTerm, setUserList } from '../../Redux/actions';
import store from '../../Redux/store';
import styles from '../../containers/AppContent/style';

interface SearchBarProps {
  searchTerm: string;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearch }) => {
  const dispatch = useDispatch<typeof store.dispatch>();
  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholderTextColor={'black'}
        style={styles.input}
        placeholder="Enter user name"
        value={searchTerm}
        onChangeText={(text) => {
          dispatch(setUserList([]));
          dispatch(setSearchTerm(text));
        }}
      />
      <View style={
        styles.buttonView
      }>
        <Button
          color={'black'}
          title="Search"
          disabled={searchTerm?.length === 0}
          onPress={onSearch} />
      </View>
    </View>
  );
};

export default SearchBar;

