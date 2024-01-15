import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [lower, setLower] = useState(0);
  const [upper, setUpper] = useState(0);

  const calculate = () => {
    const ageNumber = parseFloat(age);
    const rateLower = Math.round((220 - ageNumber) * 0.65)
    const rateUpper = Math.round((220 - ageNumber) * 0.85)
    setLower(rateLower);
    setUpper(rateUpper);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Age</Text>
      <TextInput
        keyboardType='decimal-pad'
        value={age.toString()}
        onChangeText={text => setAge(text)}
        style={styles.input}
      />
      <Text style={styles.label}>HR limits</Text>
      <Text style={styles.result}>{lower} - {upper}</Text>
      <Button title='Calculate' onPress={calculate}></Button>
    </View>
  );
}

// TODO: Fix calc

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 30,
    justifyContent: 'center'
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    marginBottom: 10,
  },
  result: {
    marginBottom: 10,
    fontStyle: 'italic'
  }
});
