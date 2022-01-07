import React, {useState} from 'react';
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import COLORS from '../colors/colors';
import globalStyles from '../styles/globalStyles';

const Add = ({navigation}) => {
  const [text, setText] = useState('');
  const [time, setTime] = useState('');

  const textChange = value => {
    setText(value);
  };

  const timeChange = value => {
    setTime(value);
  };

  return (
    <View style={{height: '100%', flex: 1, position: 'relative'}}>
      <View style={styles.missionDetailsContainer}>
        <Image
          style={styles.missionImage}
          source={require('../../assets/images/detailImage.png')}
        />
        <Text style={[globalStyles.semiBold, styles.missionBody]}></Text>
      </View>
      <TouchableOpacity
        style={styles.reqButton}
        onPress={() => navigation.replace('mainApp')}>
        <Image
          source={require('../../assets/icons/request.png')}
          style={{width: 50, height: 50}}
        />
      </TouchableOpacity>
      <ImageBackground
        source={require('../../assets/images/backgroundImage.png')}
        style={styles.formContainer}>
        <TextInput
          style={[globalStyles.regular, styles.input]}
          placeholderTextColor="#f7f7f7"
          placeholder="New Todo..."
          onChangeText={textChange}
        />
        <TouchableOpacity
          style={styles.addButton}
          // onPress={() => submitHandler(text)}
        >
          <Text style={[globalStyles.bold, styles.addButtonText]}>Add</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: COLORS.background,
  },
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
  input: {
    fontSize: 16,
  },
  addButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 8,
    paddingHorizontal: 32,
    alignSelf: 'center',
  },
  addButtonText: {
    fontSize: 16,
    color: COLORS.text,
  },
});
