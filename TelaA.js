import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function TelaA({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TelaB')}
      >
        <Text style={styles.buttonText}>Tela B</Text>
      </TouchableOpacity>
    </View>
  );
}

export default TelaA;
