import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MapScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Navigation Map</Text>
      <Text style={styles.text}>Home → Add Menu → Filter → Map</Text>
      <Text style={styles.text}>Each tab helps users navigate easily.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 16, color: "gray" },
});

export default MapScreen;
