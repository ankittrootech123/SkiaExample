import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ApplicationStyles from '../../../common/styles/applicationStyle';
import colors from '../../../common/styles/colors';
import style from './style';
import {moderateScale} from 'react-native-size-matters';
import CommonInput from '../../../components/CommonInput';
import NAVIGATION_SCREEN_NAME from '../../../navigators/NavigationActionType';

type props = {
  navigation: any;
};

const LoginScreen = (props: props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () =>
    props.navigation.navigate(NAVIGATION_SCREEN_NAME.HOME_SCREEN);

  return (
    <View
      style={[
        ApplicationStyles.container,
        {justifyContent: 'center', paddingHorizontal: moderateScale(16)},
      ]}>
      <Text style={style.loginTextStyle}>Login</Text>
      <Text style={style.descTextStyle}>Login to continue using the app</Text>
      <CommonInput
        value={email}
        onChangeText={(text: string) => setEmail(text)}
        placeHolder="Email"
        inputPlaceHolder="Enter your email"
      />
      <CommonInput
        value={password}
        onChangeText={(text: string) => setPassword(text)}
        placeHolder="Password"
        inputPlaceHolder="Enter your password"
      />
      <Text style={[style.descTextStyle, style.forgotPasswordTextStyle]}>
        Forgot password?
      </Text>
      <TouchableOpacity
        onPress={handleLogin}
        activeOpacity={0.5}
        style={style.loginBtnStyle}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
