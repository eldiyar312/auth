import React, { memo } from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import Form from "./components/form";
import Google from './components/oauth/google'
import Facebook from './components/oauth/facebook'
import Github from './components/oauth/github'


const Auth = memo(() => {
  return (
    <View style={styles.root}>
      <Form/>
      <View style={styles.oauth}>
        <Google/>
        <Facebook/>
        <Github/>
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  oauth: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
})

export default Auth