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
import Icon from "react-native-vector-icons/FontAwesome5";
const medicineList = Array.from({length: 50}, (_v, k) => {
  return {
    id: k + 1,
    name: 'İlaç' + ' ' + (k + 1),
    desc:
      'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
    type: 'medicine',
  };
});
const diagnosisList = Array.from({length: 50}, (_v, k) => {
  return {
    id: k + 1,
    name: 'Tanı' + ' ' + (k + 1),
    desc:
      'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
    type: 'diagnosis',
  };
});
export default (Search = () => {
  const [searchkey, setSearchkey] = useState('');
  const [tab, setTab] = useState('medicine');
  const [loading, setLoading] = useState(false);
  deneme = () => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  };
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
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tab} onPress={() => setTab('medicine')}>
          <Text style={styles.tabText}>İlaçlar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => setTab('diagnosis')}>
          <Text style={styles.tabText}>Tanılar</Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView style={styles.container}>
        {tab === 'medicine' && (
          <FlatList
            data={medicineList.filter(p => {
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
            })}
            renderItem={p => <Item p={p} />}
            keyExtractor={item => item.id.toString()}
          />
        )}
        {tab === 'diagnosis' && (
          <FlatList
            data={diagnosisList.filter(p => {
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
            })}
            renderItem={p => <Item p={p} />}
            keyExtractor={item => item.id.toString()}
          />
        )}
      </SafeAreaView>
    </AppContainer>
  );
});
const Item = ({p}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.item} onPress={deneme}>
      <View>
        {p.item.type === 'medicine' && (
          <Image style={styles.img} source={require('./images/med.png')} />
        )}
        {p.item.type === 'diagnosis' && (
          <Image style={styles.img} source={require('./images/bag.png')} />
        )}
      </View>
      <View>
        <Text style={styles.title}>{p.item.name}</Text>
        <Text style={styles.text}>{p.item.desc}</Text>
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
  tabContainer: {
    height: 50,
    width: '100%',
    backgroundColor: '#EBF5D4',
    borderBottomColor: '#94cd13',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tab: {
    minWidth: '50%',
    top: 10,
  },
  tabText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#5F830D',
  },
});
