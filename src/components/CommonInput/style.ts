import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import colors from '../../common/styles/colors';

export default ScaledSheet.create({
  placeHolderTextStyle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.black,
    paddingHorizontal: moderateScale(4),
  },
  textInputContainerStyle: {
    marginVertical: moderateScale(14),
  },
  inputStyle: {
    borderRadius: moderateScale(15),
    fontWeight: '400',
    fontSize: 14,
    color: colors.black,
    backgroundColor: colors.appBg,
    height: moderateScale(50),
    paddingHorizontal: moderateScale(10),
    marginTop: moderateScale(10),
  },
});
