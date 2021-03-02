import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import RadioForm from 'react-native-simple-radio-button';

export default function App() {

  
    function calculate() {
      let result = 0;
      let litres = bottles * 0.33;
      let grams = litres * 8 * 4.5;
      grams = grams - wei/10 * time;
  
      if (gen === 'Male') {
        result = grams / (wei * 0.7);
      }
      else {
        result = grams / (wei * 0.6);
      }
  
      if (result <= 0)  {
        result = 0;
      }
  
      setProm(result);
    }
  

  const [wei, setWei] = useState('');
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gen, setGen] = useState('Male');
  const [prom, setProm] = useState(0);


  return (
    <View style={styles.container}>
      
      <View style={styles.field}>
        <Text>Weight</Text>
        <TextInput style={styles.input} keyboardType="numeric" 
        placeholder="Enter weight" value={wei} onChangeText={text => setWei(text)}></TextInput>
      </View>
      

      <View>
      <Text style={styles.dropdown}>Bottles</Text>
          <DropDownPicker items={[
            { label: '1 bottle', value: 1 },
            { label: '2 bottles', value: 2 },
            { label: '3 bottles', value: 3 },
            { label: '4 bottles', value: 4 },
            { label: '5 bottles', value: 5 },
            { label: '6 bottles', value: 6 },
            { label: '7 bottles', value: 7 },
            { label: '8 bottles', value: 8 },
            { label: '9 bottles', value: 9 },
            { label: '10 bottles', value: 10 }
          ]}
            containerStyle={{ height: 40 }}
            defaultValue={bottles}
            onChangeItem={item => setBottles(item.value)}
            style={styles.dropdown}
            style={{marginLeft: 10}}
            zIndex={5000}
          />
      </View>
      
      <View>
      <Text style={styles.dropdown}>Time</Text>
          <DropDownPicker items={[
            { label: '1 hour', value: 1 },
            { label: '2 Hours', value: 2 },
            { label: '3 Hours', value: 3 },
            { label: '4 Hours', value: 4 },
            { label: '5 Hours', value: 5 },
            { label: '6 Hours', value: 6 },
            { label: '7 Hours', value: 7 },
            { label: '8 Hours', value: 8 },
            { label: '9 Hours', value: 9 },
            { label: '10 Hours', value: 10 }
          ]}
            containerStyle={{ height: 40 }}
            defaultValue={time}
            onChangeItem={item => setTime(item.value)}
            style={styles.dropdown}
            style={{marginLeft: 10}}
            zIndex={5000}
          />
      </View>

      <View>
      <Text>Gender</Text>
        <RadioForm
          radio_props={[
            { label: 'Male', value: 'Male' },
            { label: 'Female', value: 'Female' }
          ]}
          onPress={(value) => {setGen(value)}}
          />
      </View>
      <Text>Promilles</Text>
      <Text style={{marginBottom: 10}}>{prom.toFixed(2)}</Text>
        <Button onPress={calculate} title="Calculate"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    marginRight: 20,
  },
  input: {
    marginTop: 10,
  },
  dropdown: {
    zIndex: 1000,
  },
  field: {
    margin: 10,
  }
});
