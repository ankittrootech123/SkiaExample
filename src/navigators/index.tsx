import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {LogBox, SafeAreaView, StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import ApplicationStyles from '../common/styles/applicationStyle';
import {persistor, store} from '../store/configureStore';
import AppNavigator from './AppNavigator';

const App = () => {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView style={ApplicationStyles.container}>
          <NavigationContainer>
            <StatusBar barStyle="dark-content" />
            <AppNavigator />
          </NavigationContainer>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
