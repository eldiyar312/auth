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

  return true
}