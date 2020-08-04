import 'react-native-gesture-handler';
import React from 'react';
import { YellowBox } from 'react-native';
import Navigation from "./Nagivation/Navigation";
import { Provider} from 'react-redux'
import Store from './Store/configureStore'

YellowBox.ignoreWarnings([
    'Animated: `useNativeDriver` was not specified.',
]);

export default function App() {
  return (
      <Provider store={Store}>
        <Navigation/>
      </Provider>
  );
}

