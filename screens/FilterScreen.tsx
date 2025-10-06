import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { MenuItem } from "../types";
import MenuCard from "../components/MenuCard";

interface Props {
  menu: MenuItem[];
}

const FilterScreen: React.FC<Props> = ({ menu }) => {
  const [selectedCourse, setSelectedCourse] =
    useState<MenuItem["course"]>("Starters");

  const filtered = menu.filter((item) => item.course === selectedCourse);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter by Course</Text>
      <Picker
        selectedValue={selectedCourse}
        onValueChange={(v) => setSelectedCourse(v)}
      >
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Desserts" value="Desserts" />
        <Picker.Item label="Beverages" value="Beverages" />
      </Picker>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MenuCard item={item} />}
        ListEmptyComponent={
          <Text style={styles.empty}>No items in this course.</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  empty: { textAlign: "center", color: "gray", marginTop: 20 },
});

export default FilterScreen;
