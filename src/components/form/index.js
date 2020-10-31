import React, { memo, useState } from 'react'
import {
  Button,
  StyleSheet,
  Switch,
  TextInput,
  View
} from 'react-native'
import { checkAuthData } from '../../library/checkAuthData'

const Form = memo(() => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [isEnabled, setIsEnabled] = useState(true)


  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState)
  }

  const handlerButton = () => {
    checkAuthData({email, password: pass}) && 
      alert('Вы успешно авторизовались :)')
  }

  const handlerEmail = text => {
    setEmail(text)
  }
  
  const handlerPass = text => {
    setPass( text )
  }

  return (
    <View>
      <View style={style.input}>
        <TextInput
          style={style.textInput}
          placeholder='email'
          textContentType='emailAddress'
          onChangeText={handlerEmail}
          value={email}
          maxLength={100}
        />
      </View>
      <View style={style.input}>
        <TextInput
          style={style.textInput}
          textContentType='password'
          secureTextEntry={isEnabled}
          placeholder='password'
          onChangeText={handlerPass}
          value={pass}
          maxLength={255}
        />
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "green" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <Button
        onPress={handlerButton}
        title="Отправить"
      />
    </View>
  )
})

export default Form


const style = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  input: { 
    borderColor: 'gray', 
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    width: 300,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    height: '100%',
    width: '85%',
  }
})