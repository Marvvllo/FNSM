import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity} from 'react-native';
import COLORS from '../colors/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import globalStyles from '../styles/globalStyles';

const ListItem = ({item, storageKey, setData, setDetails, navigation}) => {
  const deleteMission = async key => {
    const result = await AsyncStorage.getItem(storageKey);
    let missions = [];
    if (result) missions = JSON.parse(result);

    const newMissions = missions.filter(missions => missions.key !== key);
    setData(newMissions);
    await AsyncStorage.setItem(storageKey, JSON.stringify(newMissions));
  };

  const deleteEditAlert = () => {
    Alert.alert(
      'Delete or edit your mission.',
      'Please keep in mind deleting will be permanent.',
      [
        {
          text: 'Edit',
          onPress: () =>
            navigation.navigate('edit', {itemKey: item.key, storageKey}),
        },
        {
          text: 'Delete',
          onPress: () => deleteMission(item.key),
        },
      ],
    );
  };

  return (
    <TouchableOpacity
      style={styles.missionContainer}
      onPress={() => setDetails(item.body)}
      onLongPress={deleteEditAlert}>
      <Text style={[globalStyles.bold, styles.missionTitle]}>{item.title}</Text>
      <Text style={[globalStyles.semiBold, styles.missionTime]}>
        {item.time}
      </Text>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  missionContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.missionBackground,
    marginTop: 16,
    marginHorizontal: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 8,
    borderColor: COLORS.missionColor,
    borderWidth: 4,
  },
  missionTitle: {
    color: COLORS.missionColor,
    textTransform: 'uppercase',
    maxWidth: '75%',
  },
  missionTime: {
    marginLeft: 'auto',
    alignSelf: 'center',
    color: COLORS.missionColor,
  },
});
