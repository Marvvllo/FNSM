import * as React from 'react';
import {Dimensions, Image, StyleSheet, Text} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import COLORS from '../colors/colors';
import Activities from '../screens/activities';
import Crimes from '../screens/crimes';
import globalStyles from '../styles/globalStyles';

const initialLayout = {width: Dimensions.get('window').width};

const MainTab = ({setDetails}) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'ACTIVITIES'},
    {key: 'second', title: 'CRIMES'},
  ]);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'first':
        return <Activities setDetails={setDetails} />;
      case 'second':
        return <Crimes setDetails={setDetails} />;
      default:
        return null;
    }
  };

  const getTabBarIcon = props => {
    const {route, focused} = props;

    switch (route.key) {
      case 'first':
        return (
          <Image
            source={require('../../assets/icons/ACTIVITIES.png')}
            style={[
              styles.icon,
              {
                tintColor: focused ? COLORS.white : COLORS.primary,
              },
            ]}
          />
        );
      case 'second':
        return (
          <Image
            source={require('../../assets/icons/CRIMES.png')}
            style={[
              styles.icon,
              {
                tintColor: focused ? COLORS.white : COLORS.primary,
              },
            ]}
          />
        );
      default:
        return null;
    }
  };

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{height: '100%', backgroundColor: COLORS.primary}}
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
      }}
      style={{backgroundColor: COLORS.secondary}}
      renderLabel={({route, focused}) => (
        <Text style={[{color: COLORS.text, fontSize: 14}, globalStyles.bold]}>
          {route.title}
        </Text>
      )}
      renderIcon={getTabBarIcon}
    />
  );

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
  );
};

export default MainTab;

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});
