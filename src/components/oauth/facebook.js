import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { styles } from './style'

const Facebook = () => {

  const onPress = () => {
    console.log('Facebook')
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
            uri: 'https://img.icons8.com/clouds/344/facebook-new.png',
          }}
        />
      </TouchableOpacity>
    </View>
  )
}

export default Facebook