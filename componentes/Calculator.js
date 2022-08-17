import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  Switch
} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 


export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [currentNumber, setCurrentNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');
  
  const buttons = ['C', 'DEL', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];



  const styles = StyleSheet.create({
    results: {
      backgroundColor: darkMode ? 'black' : 'white',
      maxWidth: '100%',
      minHeight: '35%',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    resultText: {
      maxHeight: 40,
      color: darkMode? 'white' : 'black',
      margin: 15,
      fontSize: 35,
    },
    historyText: {
      color: darkMode ? '#b3404a' : '#FF6666',
      fontSize: 25,
      
      marginBottom: -10,
      marginRight: 10,
      alignSelf: 'flex-end',
    },
    themeButton: {
      alignSelf: 'center',
      bottom: '10%',
      margin: 15,
      backgroundColor: darkMode ? 'black' : 'white',
      alignItems: 'center',
      justifyContent: 'center',
      width: 100,
      height: 100,
      borderRadius: 25,
    },
    buttons: {
      width: '100%',
      height: '33%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      
    },
    button: {
      borderColor: darkMode ? 'white' : 'black',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '24%',
      minHeight: '53%',
      flex: 2,
    },
    textButton: {
      color: darkMode ? 'white' : 'black',
      fontSize: 30,
      fontWeight: '800'
    }
  })

  const handleInput = (btnPressed) => {
    if (btnPressed === '+' || btnPressed === '-' || btnPressed === '*' || btnPressed === '/') {
      setCurrentNumber(currentNumber + btnPressed);
      return;
    }

    switch (btnPressed) {
      case 'DEL':
        setCurrentNumber(currentNumber.substring(0, (currentNumber.length - 1)))
        return
      case 'C':
        setLastNumber('');
        setCurrentNumber('');
        
        return
      case '=':
        setLastNumber(currentNumber + '=');
        setCurrentNumber('')
        calculate()
        return;
    }
    setCurrentNumber(currentNumber + btnPressed);
  }

  const calculate = () => {
    let lastArr = currentNumber[currentNumber.length - 1]
    if (lastArr === '/' || lastArr === '*' || lastArr === '-' || lastArr === '+' || lastArr === '.') {
      setCurrentNumber(currentNumber);
    }
    else {
      let result = eval(currentNumber).toString();
      setCurrentNumber(result);
      return;
    }
  }
  <Entypo name="light-bulb" size={24} color="black" />
  return (
    <View>
      <View style={styles.results}>
        <TouchableOpacity style={styles.themeButton}>
          <Entypo name="light-bulb" size={24} color= {darkMode ? '#b3404a' : '#FF6666'} onPress={() => darkMode ? setDarkMode(false) : setDarkMode(true)}  />
        </TouchableOpacity>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((btn) =>
          btn === '=' || btn === '/' || btn === '*' || btn === '-' || btn === '+' ?
            <TouchableOpacity key={btn} style={[styles.button, { backgroundColor: darkMode? '#b3404a' : '#FF6666' }]} onPress={() => handleInput(btn)}>
              <Text style={[styles.textButton, { color: 'white', fontSize: 28 }]}>{btn}</Text>
            </TouchableOpacity>
            : btn === 0 ?
              <TouchableOpacity key={btn} style={[styles.button, {
                backgroundColor: typeof (btn) === 'number' ?
                  darkMode ? '#303946' : '#fff' : darkMode === true ? '#414853' : '#ededed', minWidth: '36%'
              }]} onPress={() => handleInput(btn)}>
                <Text style={styles.textButton}>{btn}</Text>
              </TouchableOpacity>
              : btn === '.' || btn === 'DEL' ?
                <TouchableOpacity key={btn} style={[styles.button, { backgroundColor: btn === '.' ? darkMode ? '#303946' : '#fff' : darkMode === true ? '#414853' : '#ededed', minWidth: '37%' }]}
                  onPress={() => handleInput(btn)}
                >
                  <Text style={styles.textButton}>{btn}</Text>
                </TouchableOpacity>
                : btn === 'C' ?
                  <TouchableOpacity key={btn} style={[styles.button, { backgroundColor: typeof (btn) === 'number' ? darkMode ? '#303946' : '#fff' : darkMode === true ? '#414853' : '#ededed', minWidth: '36%' }]}
                    onPress={() => handleInput(btn)}
                  >
                    <Text style={styles.textButton}>{btn}</Text>
                  </TouchableOpacity>
                  :
                  <TouchableOpacity key={btn} style={[styles.button, { backgroundColor: typeof (btn) === 'number' ? darkMode ? '#303946' : '#fff' : darkMode === true ? '#414853' : '#ededed' }]}
                    onPress={() => handleInput(btn)}
                  >
                    <Text style={styles.textButton}>{btn}</Text>
                  </TouchableOpacity>

        )}
      </View>
    </View>
  )

}