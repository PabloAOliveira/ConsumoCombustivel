import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const ResultScreen = () => {
  const route = useRoute();
  const { km, litros } = route.params;

  const media = km / litros;
  let classificacao = "";

  if (media > 12) classificacao = "A";
  else if (media > 10) classificacao = "B";
  else if (media > 8) classificacao = "C";
  else if (media > 4) classificacao = "D";
  else classificacao = "E";

  return (
    <View style={styles.container}>
      <Text style={styles.result}>
        Média de Consumo: {media.toFixed(2)} Km/L
      </Text>
      <Text style={styles.result}>Classificação: {classificacao}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  result: {
    fontSize: 24,
    textAlign: "center",
  },
});

export default ResultScreen;
