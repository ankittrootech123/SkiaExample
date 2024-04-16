import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

// Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 390;
const guidelineBaseHeight = 680;

export const scale = size => (shortDimension / guidelineBaseWidth) * size;
export const verticalScale = size =>
  (longDimension / guidelineBaseHeight) * size;
export const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;
// VS = VerticalScale
export const moderateVS = (size, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor;

export const w = width;
export const h = height;
export const s = scale;
export const vs = verticalScale;
export const ms = moderateScale;
export const mvs = moderateVS;
