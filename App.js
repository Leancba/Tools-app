import React from 'react';
import {View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import Calculatora from './componentes/Calculator'
import StopWatch from './componentes/StopWatch'

import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { SafeAreaView } from 'react-native-safe-area-context';


function Calculator() {
  return (
    <View style={{ flex: 1}}>

      <Calculatora/>

    </View>
  );
}

function Chronometer() {
  return (
    <View style={{ flex: 1}}>

      <StopWatch/>
      
    </View>
  );
}

function Home ( {navigation} ) {
  return (
    <View style = {{flex : 1, alignContent : 'center' , flexDirection: 'column', justifyContent: 'center'}} >
      <View style = {styles.calculate} >
        <Entypo name="calculator" size={200} color="#b3404a"  onPress={() => navigation.navigate('Calculadora')} />
      </View>

      <View style = {styles.chrono} >
        <FontAwesome5 name="stopwatch" size={200} color="#b3404a" onPress={() => navigation.navigate('Cronometro')} />
      </View>

    </View>
  )
}

const MyTheme = {
  colors: {
    primary: "red",
    background: 'white',
    card: 'rgba(  000, 000, 000  , 0.8)',
    text: 'white',
    border: 'black',
    notification: 'orange',
  },
};

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    
    <NavigationContainer theme={MyTheme}>
      
      <Drawer.Navigator initialRouteName="Home" >

        <Drawer.Screen name= "Home" component = {Home} options= {{headerShown: false}} />
        <Drawer.Screen name="Calculadora" component={Calculator} options= {{headerShown: false,}}  />
        <Drawer.Screen name="Cronometro" component={Chronometer} options= {{headerShown: false }} />
        

      </Drawer.Navigator>
    </NavigationContainer>
    
  );
}


const styles = StyleSheet.create({
  
  calculate: {
    backgroundColor: 'black',
    width: '100%',
    height: '50%',
   justifyContent: 'center',
      alignItems: 'center'
  },


  chrono: {
      backgroundColor: 'black',
      width: '100%',
      height: '50%',
      justifyContent: 'center',
      alignItems: 'center'
    

    }

    

})