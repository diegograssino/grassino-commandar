import React from 'react';
import { Provider } from 'react-redux';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  // eslint-disable-next-line camelcase
  FiraSans_400Regular,
  // eslint-disable-next-line camelcase
  FiraSans_500Medium,
  // eslint-disable-next-line camelcase
  FiraSans_700Bold,
} from '@expo-google-fonts/fira-sans';
import store from './store';
import Navigation from './navigation/Navigation';

function App() {
  const [fontsLoaded] = useFonts({
    // eslint-disable-next-line camelcase
    FiraSans_400Regular,
    // eslint-disable-next-line camelcase
    FiraSans_700Bold,
    // eslint-disable-next-line camelcase
    FiraSans_500Medium,
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
