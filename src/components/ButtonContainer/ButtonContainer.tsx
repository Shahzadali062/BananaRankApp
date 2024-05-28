import React from 'react';
import { View, Button, TouchableOpacity, Text } from 'react-native';
import styles from '../../containers/AppContent/style';

interface ButtonContainerProps {
  searchTerm: string;
  sortByName: boolean;
  showLowestRanked: boolean;
  onToggleSort: () => void;
  onToggleRankView: () => void;
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({ searchTerm, sortByName, showLowestRanked, onToggleSort, onToggleRankView }) => {
  return (
    <View style={styles.buttonContainer}>
      <View style={
        styles.buttonView
      }>
        <Button
          color={'black'}
          title={sortByName ? "Sort by Rank" : "Sort by Name"}
          disabled={searchTerm?.length === 0}
          onPress={onToggleSort}
        />
      </View>

      <View style={
        styles.buttonView
      }>
        <Button
          color={'black'}
          title={showLowestRanked ? "Show Highest Ranked" : "Show Lowest Ranked"}
          disabled={searchTerm?.length !== 0}
          onPress={onToggleRankView}
        />
      </View>
    </View>
  );
};

export default ButtonContainer;
