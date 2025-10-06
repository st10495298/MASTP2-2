import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { MenuItem } from "../types";
import MenuCard from "../components/MenuCard";

interface Props {
  menu: MenuItem[];
}

const HomeScreen: React.FC<Props> = ({ menu }) => {
  const averagePrice =
    menu.length > 0
      ? menu.reduce((sum, item) => sum + item.price, 0) / menu.length
      : 0;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Total Items: {menu.length}</Text>

      <FlatList
        data={menu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MenuCard item={item} />}
        ListEmptyComponent={<Text>No menu items available.</Text>}
      />

      <View style={styles.summaryBox}>
        <Text style={styles.summaryText}>
          Average Price: R {averagePrice.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  summaryBox: {
    marginTop: 10,
    backgroundColor: "#ffeaa7",
    padding: 10,
    borderRadius: 8,
  },
  summaryText: { textAlign: "center", fontWeight: "600" },
});

export default HomeScreen;
