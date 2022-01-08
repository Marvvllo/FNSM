import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  Image,
  ImageBackground,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';
import COLORS from '../colors/colors';
import globalStyles from '../styles/globalStyles';

const Add = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [time, setTime] = useState('');
  const [type, setType] = useState('');
  const [activities, setActivities] = useState([]);
  const [crimes, setCrimes] = useState([]);
  const [missions, setMissions] = useState([]);

  const titleChange = value => {
    setTitle(value);
  };

  const timeChange = value => {
    setTime(value);
  };

  const descChange = value => {
    setDesc(value);
  };

  const typeChange = value => {
    setType(value);
  };

  const getActivities = async () => {
    const result = await AsyncStorage.getItem('activities');
    if (result !== null) setActivities(JSON.parse(result));
  };

  const getCrimes = async () => {
    const result = await AsyncStorage.getItem('activities');
    if (result !== null) setCrimes(JSON.parse(result));
  };

  useEffect(() => {
    getActivities();
    getCrimes();
  }, []);

  const submitHandler = async () => {
    const mission = {
      key: Date.now(),
      title: title,
      body: desc,
      time: time,
    };
    if (!title || !desc || !time || !type) {
      Alert.alert(
        'Request incomplete',
        'Please fill out your request before adding it',
        [
          {
            text: 'Okay',
          },
        ],
      );
    } else if (type === 'Activity') {
      const result = JSON.stringify([mission, ...activities]);
      console.log(result);
      await AsyncStorage.setItem('activities', result);
      navigation.replace('mainApp');
    } else if (type === 'Crime') {
      const result = JSON.stringify([mission, ...crimes]);
      console.log(result);
      await AsyncStorage.setItem('crimes', result);
      navigation.replace('mainApp');
    }
  };

  return (
    <View style={{height: '100%', flex: 1, position: 'relative'}}>
      <View style={styles.missionDetailsContainer}>
        <Image
          style={styles.missionImage}
          source={require('../../assets/images/detailImage.png')}
        />
        <Text style={[globalStyles.semiBold, styles.missionBody]}>
          Add a mission for Spidey!
        </Text>
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
          style={[globalStyles.bold, styles.input]}
          placeholderTextColor="#f7f7f7"
          placeholder="Mission title..."
          onChangeText={titleChange}
        />

        <TextInput
          style={[globalStyles.bold, styles.input]}
          placeholderTextColor="#f7f7f7"
          placeholder="Mission description..."
          onChangeText={descChange}
        />

        <TextInput
          style={[globalStyles.bold, styles.input]}
          placeholderTextColor="#f7f7f7"
          placeholder="Mission time..."
          onChangeText={timeChange}
        />

        <SelectDropdown
          data={['Activity', 'Crime']}
          onSelect={(selectedItem, index) => {
            typeChange(selectedItem);
          }}
          defaultButtonText="Mission type..."
          dropdownIconPosition="right"
          buttonStyle={styles.dropdownButton}
          dropdownStyle={styles.dropdownSelect}
          buttonTextStyle={[globalStyles.bold, styles.dropdownText]}
          rowTextStyle={[globalStyles.bold, styles.dropdownText]}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => submitHandler()}>
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
    alignItems: 'center',
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
    padding: 8,
  },
  reqButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 8,
  },
  input: {
    backgroundColor: COLORS.missionBackground,
    width: '90%',
    marginVertical: 16,
    marginHorizontal: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderColor: COLORS.missionColor,
    borderWidth: 4,
    color: COLORS.text,
    fontSize: 16,
  },
  dropdownButton: {
    backgroundColor: COLORS.missionBackground,
    width: '90%',
    marginVertical: 16,
    marginHorizontal: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderColor: COLORS.missionColor,
    borderWidth: 4,
    color: COLORS.text,
  },
  dropdownSelect: {
    backgroundColor: COLORS.missionBackground,
    width: '90%',
    height: '18%',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderColor: COLORS.missionColor,
    borderWidth: 4,
    color: COLORS.text,
    fontSize: 16,
  },
  dropdownText: {
    color: COLORS.text,
    fontSize: 16,
    justifyContent: 'flex-start',
  },
  addButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderRadius: 8,
    borderColor: COLORS.primaryVar,
    borderWidth: 4,
    alignSelf: 'center',
  },
  addButtonText: {
    fontSize: 16,
    color: COLORS.text,
  },
});
