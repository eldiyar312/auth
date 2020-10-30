export const checkAuthData = ({email, password}) => {
  if( email.length < 5 || !email || !~email.indexOf('@') ){
    Alert.alert(
      "Не корректный email!",
      "Пример: eldiyar@gmail.com",
      [{ text: "OK" }]
    )
    return false
  }

  if( !email ){
    Alert.alert(
      "Email!",
      "Заполните поле email!",
      [{ text: "OK" }]
    )
    return false
  }

  if( !password ){
    Alert.alert(
      "Пароль!",
      "Заполните поле password",
      [{ text: "OK" }]
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