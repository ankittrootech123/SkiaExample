import {StyleSheet} from 'react-native';
import colors from './colors';

const ApplicationStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  flexGrow: {
    flexGrow: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  centerRowAlign: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  centerAlign: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default ApplicationStyles;
