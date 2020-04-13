import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
const data = Array.from({length: 50}, (_v, k) => {
  return {
    id: k + 1,
    name: 'Hilmi',
    surname: 'Oğuz' + ' ' + (k + 1),
    diagnosis:
      'tanı tanı tanı tanı tanı tanı tanı tanı tanı tanı tanı tanı tanı tanı',
  };
});
export default (Patients = () => {
  const [searchkey, setSearchkey] = useState('');
  const [loading, setLoading] = useState(false);
  deneme = () => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  };
  const list = data.filter(p => {
    for (let i = 0; i < Object.keys(p).length; i++) {
      let key = Object.keys(p)[i];
      if (
        p[key]
          .toString()
          .toLowerCase()
          .indexOf(searchkey.toLowerCase()) !== -1
      ) {
        return p;
      }
    }
  });
  return (
    <AppContainer loading={loading}>
      <View style={styles.header}>
        <View style={styles.inputContainer}>
          <Icon name="search" style={styles.icon} color="#000" />
          <TextInput
            placeholder="ARAMA"
            style={styles.input}
            value={searchkey}
            onChangeText={searchkey => {
              setSearchkey(searchkey);
            }}
          />
        </View>
      </View>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={list}
          renderItem={p => <Patient p={p} />}
          keyExtractor={item => item.id.toString()}
        />
      </SafeAreaView>
    </AppContainer>
  );
});
const Patient = ({p}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.item} onPress={deneme}>
      <View>
        <Image style={styles.img} source={require('./images/person.png')} />
      </View>
      <View>
        <Text style={styles.title}>{p.item.name + ' ' + p.item.surname}</Text>
        <Text style={styles.text}>
          <Text style={{fontWeight: 'bold'}}>Tanılar : </Text>
          {p.item.diagnosis}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 70,
    height: 70,
  },
  title: {
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 25,
    color: '#94cd13',
  },
  text: {
    paddingLeft: 20,
    paddingRight: 50,
  },
  inputContainer: {
    height: 30,
    marginHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(256,256,256,0.7)',
    borderRadius: 10,
  },
  input: {
    flex: 1,
    padding: 0,
    marginHorizontal: 5,
  },
  header: {
    backgroundColor: '#94cd13',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
