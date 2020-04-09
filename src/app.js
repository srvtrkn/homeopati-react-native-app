import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View, Text, Animated} from 'react-native';
import Home from './home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from './signIn';
import SignUp from './signUp';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{headerShown: false, animationEnabled: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Animation = ({scale = 1}) => (
  <Animated.View
    style={{
      transform: [{scale}],
    }}>
    <Text style={styles.text}>HOMEOPATI</Text>
  </Animated.View>
);
const usePulse = (startDelay = 1000) => {
  const scale = useRef(new Animated.Value(1)).current;
  const pulse = () => {
    Animated.sequence([
      Animated.timing(scale, {toValue: 1.1}),
      Animated.timing(scale, {toValue: 0.9}),
    ]).start(() => pulse());
  };
  useEffect(() => {
    const timeout = setTimeout(() => pulse(), startDelay);
    return () => clearTimeout(timeout);
  }, []);
  return scale;
};
App = () => {
  const scale = usePulse();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);
  return loading ? (
    <View style={styles.splashScreen}>
      <Animation scale={scale}></Animation>
    </View>
  ) : (
    <MyStack />
  );
};
export default App;
const styles = StyleSheet.create({
  splashScreen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#99CA93',
  },
  text: {
    textAlign: 'center',
    fontSize: 70,
    color: '#fff',
    marginBottom: 20,
  },
});
