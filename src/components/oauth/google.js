import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { styles } from './style'

const Google = () => {

  const onPress = () => {
    console.log('Google')
  }

  return (
    <View style={styles.root}>
      <TouchableOpacity 
        style={styles.button}
        onPress={onPress}
      >
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://img.icons8.com/plasticine/344/google-logo.png',
          }}
        />
      </TouchableOpacity>
    </View>
  )
}

export default Google