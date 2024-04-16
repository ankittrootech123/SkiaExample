import {createStackNavigator} from '@react-navigation/stack';
import NAVIGATION_SCREEN_NAME from './NavigationActionType';
import {HomeScreen, IntroScreen} from '../screens/App';
import Dashboard from '../screens/App/Dashboard';

const commonNavOption = {
  headerShown: false,
  gestureEnabled: false,
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
