import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
SignUp = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>HOMEOPATI</Text>
      <View style={styles.inputContainer}>
        <Icon name="person" style={styles.icon} color="#000" />
        <TextInput placeholder="Ad Soyad" style={styles.input}></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <Icon name="mail" style={styles.icon} color="#000" />
        <TextInput placeholder="E-posta" style={styles.input}></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" style={styles.icon} color="#000" />
        <TextInput
          placeholder="Şifre"
          style={styles.input}
          secureTextEntry></TextInput>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Hesap Oluştur</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <Text style={styles.span}>Zaten üye misin ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.text1}>Giriş Yap</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SignUp;
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
    justifyContent: 'center',
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
    top: -30,
    textAlign: 'center',
    fontSize: 70,
    color: '#94cd13',
  },
  span: {
    textAlign: 'left',
    fontSize: 20,
    color: '#aaa',
  },
  text1: {
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#94cd13',
    fontSize: 20,
  },
});
