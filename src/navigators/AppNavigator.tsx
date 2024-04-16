import {createStackNavigator} from '@react-navigation/stack';
import NAVIGATION_SCREEN_NAME from './NavigationActionType';
import {HomeScreen, IntroScreen} from '../screens/App';
import Dashboard from '../screens/App/Dashboard';
import Instagram from '../screens/App/Instagram';
import {Glassmorphism} from '../screens/App/Glassmorphism';
import GyroscopeExample from '../screens/App/GyroscopeExample/Gyroscope';

const commonNavOption = {
  // headerShown: true,
  gestureEnabled: true,
};

export const StackNavList = [
  {
    name: NAVIGATION_SCREEN_NAME.DASHBOARD,
    component: Dashboard,
    options: commonNavOption,
  },
  {
    name: NAVIGATION_SCREEN_NAME.HOME_SCREEN,
    component: HomeScreen,
    options: commonNavOption,
  },
  {
    name: NAVIGATION_SCREEN_NAME.INTROSCREEN,
    component: IntroScreen,
    options: commonNavOption,
  },
  {
    name: NAVIGATION_SCREEN_NAME.INSTAGRAM,
    component: Instagram,
    options: commonNavOption,
  },
  {
    name: NAVIGATION_SCREEN_NAME.GLASSMORPHISM,
    component: Glassmorphism,
    options: commonNavOption,
  },
  {
    name: NAVIGATION_SCREEN_NAME.GYROSCOPE_SCREEN,
    component: GyroscopeExample,
    options: commonNavOption,
  },
];

const AppNavigator = () => {
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

export default AppNavigator;
