import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import COLORS from '../colors/colors';
import MainTab from '../components/mainTab';
import globalStyles from '../styles/globalStyles';

const MainApp = ({navigation}) => {
  const [details, setDetails] = useState('Click on a mission to find out more');

  return (
    <View style={{height: '100%', position: 'relative'}}>
      <View style={styles.missionDetailsContainer}>
        <Image
          style={styles.missionImage}
          source={require('../../assets/images/detailImage.png')}
        />
        <Text style={[globalStyles.semiBold, styles.missionBody]}>
          {details}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.reqButton}
        onPress={() => navigation.navigate('add')}>
        <Image
          source={require('../../assets/icons/request.png')}
          style={{width: 50, height: 50}}
        />
      </TouchableOpacity>
      <MainTab setDetails={setDetails} navigation={navigation} />
    </View>
  );
};

export default MainApp;

const styles = StyleSheet.create({
  missionDetailsContainer: {
    width: '100%',
    height: 240,
  },
  missionImage: {
    width: '100%',
    height: '75%',
    resizeMode: 'cover',
  },
  missionBody: {
    flex: 1,
    backgroundColor: COLORS.background,
    color: COLORS.text,
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  reqButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 8,
  },
});
