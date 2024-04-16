import {Dimensions, Platform} from 'react-native';
import {scale, verticalScale} from '../helpers';

const {width, height} = Dimensions.get('window');

const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;
const checkIosDeviceSize = screenHeight === 812 ? 44 : 20;
const Matrics = {
  width,
  height,
  screenHeight,
  screenWidth,
  ScaleValue: (val: number) => scale(val),
  VerticalScalValue: (val: number) => verticalScale(val),

  navBarHeight: Platform.OS === 'ios' ? checkIosDeviceSize : 20,
};

export default Matrics;
