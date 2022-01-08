import React, {useEffect, useState} from 'react';
import {FlatList, ImageBackground, StyleSheet} from 'react-native';
import COLORS from '../colors/colors';
import ListItem from '../components/listItem';
import ActivitiesData from '../data/activitiesData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import globalStyles from '../styles/globalStyles';

const Activities = ({setDetails}) => {
  const [activities, setActivities] = useState([]);

  const getActivities = async () => {
    const result = await AsyncStorage.getItem('activities');
    if (result !== null) setActivities(JSON.parse(result));
  };

  useEffect(() => {
    getActivities();
  }, []);

  return (
    <ImageBackground
      source={require('../../assets/images/backgroundImage.png')}
      style={styles.container}>
      <FlatList
        data={activities}
        keyExtractor={item => item.key}
        renderItem={({item}) => (
          <ListItem
            item={item}
            storageKey="activities"
            setData={setActivities}
            setDetails={setDetails}
          />
        )}
      />
    </ImageBackground>
  );
};

export default Activities;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: COLORS.background,
  },
});
