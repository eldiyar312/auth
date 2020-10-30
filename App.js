import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import Auth from './src/Auth'

const App = () => {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Auth/>
      </SafeAreaView>
    </>
  );
};


export default App