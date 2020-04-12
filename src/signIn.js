import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
SignIn = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>HOMEOPATI</Text>
      <View style={styles.inputContainer}>
        <Icon name="mail" style={styles.icon} color="#000" />
        <TextInput
          placeholder="E-posta veya Kullanıcı Adı"
          style={styles.input}></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" style={styles.icon} color="#000" />
        <TextInput
          placeholder="Şifre"
          style={styles.input}
          secureTextEntry></TextInput>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Oturum Aç</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.textButton}>
          <Text style={styles.text1}>Şifremi Unuttum</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.textButton}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.text2}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SignIn;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  inputContainer: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 5,
    borderRadius: 10,
  },
  buttonContainer: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    width: '90%',
    padding: 10,
    height: 48,
  },
  icon: {
    padding: 20,
  },
  button: {
    height: 48,
    paddingVertical: 15,
    borderRadius: 10,
    margin: 10,
    backgroundColor: '#94cd13',
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: -10,
    color: '#fff',
  },
  header: {
    top: -50,
    textAlign: 'center',
    fontSize: 70,
    color: '#94cd13',
  },
  text1: {
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#aaa',
    fontSize: 20,
  },
  text2: {
    textAlign: 'right',
    color: '#94cd13',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textButton: {
    flex: 2,
  },
});
