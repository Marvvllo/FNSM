import {StyleSheet} from 'react-native';
import COLORS from '../colors/colors';

const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary,
  },
  bold: {
    fontFamily: 'Montserrat-Bold',
  },
  semiBold: {
    fontFamily: 'Montserrat-SemiBold',
  },
  regular: {
    fontFamily: 'Montserrat-Regular',
  },
});

export default globalStyles;
