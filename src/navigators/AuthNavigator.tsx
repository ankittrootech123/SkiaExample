import {createStackNavigator} from '@react-navigation/stack';
import NAVIGATION_SCREEN_NAME from './NavigationActionType';
import {HomeScreen} from '../screens/App';
import LoginScreen from '../screens/Auth/LoginScreen';

const commonNavOption = {
  headerShown: false,
  gestureEnabled: false,
};

export const StackNavList = [
  // {
  //   name: NAVIGATION_SCREEN_NAME.LOGIN_SCREEN,
  //   component: LoginScreen,
  //   options: commonNavOption,
  // },
  {
    name: NAVIGATION_SCREEN_NAME.HOME_SCREEN,
    component: HomeScreen,
    options: commonNavOption,
  },
];

const AuthNavigator = () => {
  const AppStack = createStackNavigator();

  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      {StackNavList.map(item => (
        <AppStack.Screen
          key={item.name}
          options={item.options}
          name={item.name}
          component={item.component}
        />
      ))}
    </AppStack.Navigator>
  );
};

export default AuthNavigator;
