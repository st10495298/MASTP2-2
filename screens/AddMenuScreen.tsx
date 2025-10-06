import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { MenuItem } from "../types";
import uuid from "react-native-uuid";

interface Props {
  menu: MenuItem[];
  setMenu: React.Dispatch<React.SetStateAction<MenuItem[]>>;
}

const AddMenuScreen: React.FC<Props> = ({ menu, setMenu }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState<MenuItem["course"]>("Starters");
  const [price, setPrice] = useState("");

  const handleSave = () => {
    if (!name || !price) {
      Alert.alert("Error", "Please fill in all required fields.");
      return;
    }

    const newItem: MenuItem = {
      id: uuid.v4().toString(),
      name,
      description,
      course,
      price: parseFloat(price),
    };

    setMenu([...menu, newItem]);
    setName("");
    setDescription("");
    setPrice("");
    Alert.alert("Success", "Menu item added!");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Add a New Dish</Text>

      <TextInput
        placeholder="Dish Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={[styles.input, { height: 80 }]}
        multiline
      />
      <Picker selectedValue={course} onValueChange={(v) => setCourse(v)}>
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Desserts" value="Desserts" />
        <Picker.Item label="Beverages" value="Beverages" />
      </Picker>
      <TextInput
        placeholder="Price (R)"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Save / Add Item" onPress={handleSave} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
});

export default AddMenuScreen;
