import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import globalStyles from '../styles/globalStyles';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('mainApp');
    }, 2000);
  }, []);

  return (
    <View style={[globalStyles.container, styles.splashContainer]}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={{width: '75%', height: '75%', resizeMode: 'contain'}}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
