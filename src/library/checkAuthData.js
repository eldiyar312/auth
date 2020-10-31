import { Alert } from 'react-native'

export const checkAuthData = ({email, password}) => {
  if( email.length <= 5 || !~email.indexOf('@') ){
    Alert.alert(
      "Не корректный email!",
      "Пример: eldiyar@gmail.com"
    )
    return false
  }

  if( password.length <= 5 ){
    Alert.alert(
      "Не корректный password!",
      "Длина пароля должен быть больше 5 символов",
      [{ text: "OK" }]
    )
    return false
  }

  if(
    password.search(' ') != -1 || 
    email.search(' ') != -1
  ){
    Alert.alert(
      "Не корректные данные",
      "password, email не должены содержать пробелы!",
      [{ text: "OK" }]
    )
    return false
  }

  return true
}