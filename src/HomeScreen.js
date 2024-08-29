import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const [km, setKm] = useState("");
  const [litros, setLitros] = useState("");
  const navigation = useNavigation();

  const calculaMedia = () => {
    const kmValue = parseFloat(km);
    const litrosValue = parseFloat(litros);

    if (isNaN(kmValue) || isNaN(litrosValue) || litrosValue === 0) {
      alert("Por favor, insira valores válidos.");
      return;
    }

    navigation.navigate("ResultScreen", {
      km: kmValue,
      litros: litrosValue,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Quilometragem (KM):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={km}
        onChangeText={setKm}
      />
      <Text style={styles.label}>Litros de Gasolina:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={litros}
        onChangeText={setLitros}
      />
      <Button title="Calcular" onPress={calculaMedia} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 8,
    marginBottom: 16,
    fontSize: 18,
  },
});

export default HomeScreen;
