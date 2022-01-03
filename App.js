import React from 'react';
import { Provider } from 'react-redux';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  // eslint-disable-next-line camelcase
  Poppins_400Regular,
  // eslint-disable-next-line camelcase
  Poppins_500Medium,
  // eslint-disable-next-line camelcase
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import store from './store';
import Navigation from './navigation/Navigation';

function App() {
  const [fontsLoaded] = useFonts({
    // eslint-disable-next-line camelcase
    Poppins_400Regular,
    // eslint-disable-next-line camelcase
    Poppins_700Bold,
    // eslint-disable-next-line camelcase
    Poppins_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
