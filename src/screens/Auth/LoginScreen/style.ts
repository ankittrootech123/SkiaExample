import {moderateScale, ScaledSheet} from 'react-native-size-matters';
import colors from '../../../common/styles/colors';

export default ScaledSheet.create({
  loginTextStyle: {
    fontWeight: '600',
    fontSize: 16,
    color: colors.black,
  },
  descTextStyle: {
    fontWeight: '400',
    color: colors.gray,
    fontSize: 12,
    marginTop: moderateScale(8),
  },
  forgotPasswordTextStyle: {
    color: colors.gray1,
    alignSelf: 'flex-end',
    marginTop: moderateScale(0),
  },
  loginBtnStyle: {
    backgroundColor: colors.primaryGreen,
    justifyContent: 'center',
    alignItems: 'center',
    height: moderateScale(50),
    marginVertical: moderateScale(20),
    borderRadius: moderateScale(25),
  },
});
