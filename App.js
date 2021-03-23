import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import Output from './src/Output';
import { AppHeader } from './src/header'

export default function App() {

  const [A, setInputA] = useState('');
  const [B, setInputB] = useState('');
  const [C, setInputC] = useState('');
  const [result, setInputResult] = useState('');

  const pressHandler = () =>{
    if(A.trim() && B.trim() && C.trim()){
      let D = B*B-4*A*C;
      if(A==0){
        let res = (-C)/B;
        setInputResult('x='+res);
      }
      else if(D>0){
        let x1 = (-B-Math.sqrt(D))/(2*A);
        let x2 = (-B+Math.sqrt(D))/(2*A);
        setInputResult('x1 = '+ x1+'\nx2 = '+x2);
      }
      else if(D<0){
        setInputResult('Нет корней!');
      }
      else if(D==0){
        let x = (-B)/(2*A);
        setInputResult('x = '+x);
      }
      else{
        Alert.alert('Проверьте корректность данных!');
      }
    }else{
      Alert.alert("Поля не должны быть пустыми!")
    }
  }

  return (
    <View>
        <AppHeader title="Решение квадратных уравнений"/>
      <View style = {styles.block} >
        <TextInput style = {styles.input} placeholder= "a" value = {A} onChange={(event) => setInputA(event.target.value)}/>
        <Text style = {styles.text}>x^2 + </Text>
        <TextInput style = {styles.input} placeholder= "b" value = {B} onChange={(event) => setInputB(event.target.value)}/>
        <Text style = {styles.text}>x + </Text>
        <TextInput style = {styles.input} placeholder= "c" value = {C} onChange={(event) => setInputC(event.target.value)}/>
        <Text style = {styles.text}>= 0</Text>
      </View>
      <Button style = {styles.but} title = "Вычислить!" onPress = { pressHandler }/>
      <Output A ={A} B = {B} C ={C}/>
      <Text style = {styles.res}>{result}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
    but: {

        backgroundColor: '#22ff22',
    },
  block: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '6%',
      marginTop: '5%',
      fontSize: 24
  },
  input: {
      //  keyboardType: 'numeric',
      width: '10%',
      padding: 10,
      borderStyle: 'solid',
      borderBottomColor: '#ff0000',
      marginLeft: '2%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '15%',
      fontSize: 24
  },
  text: {
      color: '#bf12aa',
      fontWeight: 'bold',
      fontSize: 24,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '15%'
  },
  res: {
      marginTop: 5,
      marginLeft: 15,
      fontSize: 24
  }
});
