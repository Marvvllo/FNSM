import React, {useState} from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../colors/colors';
import ListItem from '../components/listItem';
import CrimesData from '../data/crimesData';
import globalStyles from '../styles/globalStyles';

const Activities = ({setDetails}) => {
  const [crimes, setCrimes] = useState(CrimesData);

  return (
    <ImageBackground
      source={require('../../assets/images/backgroundImage.png')}
      style={styles.container}>
      <FlatList
        data={crimes}
        renderItem={({item}) => (
          <ListItem item={item} setData={setCrimes} setDetails={setDetails} />
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
