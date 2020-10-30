import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { styles } from './style'

const Github = () => {

  const onPress = () => {
    console.log('Github')
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
            uri: 'https://img.icons8.com/fluent/344/github.png',
          }}
        />
      </TouchableOpacity>
    </View>
  )
}

export default Github