/* eslint-disable */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';

import ReviewPage from './Pages/ReviewPage';
import { globalStyles } from './Styles/globalStyles';

const App = () => {
  return (
    <SafeAreaView style={globalStyles.screenContainer}>
      <ReviewPage />
    </SafeAreaView>
  );
};



export default App;
