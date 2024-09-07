import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Button } from 'react-native-web';


export default function App() {
  
  /*funciones suma resta
  //DECLARO
  const [count, setCount] = useState(0);
  //funcion
  const sumarContador =()=>{
    setCount(count+1);
  };
  const restaContador = () => {
    setCount(count - 1);
  };
  */

  //API, declaro el book
  const [DATA, setData] = useState([]);
  const urlBase= 'https://jsonplaceholder.typicode.com'
  //funcion llamar API
  const obtenerDatos = () => {
    fetch(`${urlBase}/todos`)
      .then((response) => response.json())
      .then((DATA) => {
        setData(DATA);
      })
      .catch((error) => console.log(error));
    
  }


/*Suma y Resta
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>

      <Text>{count}</Text>
      <Button onPress={sumarContador} style={styles.button} title='Suma'></Button>
      <Button onPress={restaContador} style={styles.button} title='Resta'></Button>

      <StatusBar style='auto' />
    </View>
  );
}
  */

  return (
    <View style={styles.container}>
      <View style={styles.containerbutton}>
        <Button onPress={obtenerDatos} style={styles.button} title='API'></Button>
      </View>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item,index}) => (
          <View style={styles.dataContainer}>
            <Text>ID: {item.id}</Text>
            <Text>Title: {item.title}</Text>
            <Text>Completed: {item.completed.toString()}</Text>
          </View>
        )}
      ></FlatList>

      <StatusBar style='auto' />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerbutton: {
    width: 500,
    height: 200,
    backgroundColor: 'blue',
    alignSelf: 'center',
    justifyContent:'center',
  },
  button: {
    width: 50,
    height: 50,
  },
  dataContainer: {
    flex: 1,
    backgroundColor: 'coral',
    flexWrap: 'wrap',
    margin: 10,
  },
});
