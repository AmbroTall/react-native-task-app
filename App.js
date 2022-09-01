import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";

export default function App() {
  const [text, onChangeText] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleTask = () => {
    text !== ""
      ? setTasks([...tasks, { id: Math.random() * 100, title: text }])
      : console.log("Cant be empty");
    onChangeText("");
  };

  console.log(tasks);

  const handleDelete = (id) => {
    const newArray = tasks.filter((item) => item.id !== id);
    setTasks(newArray);
  };

  const Item = ({ title, id }) => (
    <View style={styles.item} onPress={() => handleDelete(id)}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => <Item title={item.title} />;
  return (
    <View style={styles.container}>
      <View style={styles.Inputcontainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Button
          onPress={handleTask}
          title="Add Task"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      {tasks.length > 0 ? (
        <View style={styles.listContainer}>
          <FlatList
            data={tasks}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      ) : (
        <View style={styles.item}>
          <Text>No tasks</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: "#588fed",
    display: "flex",
    flexDirection: "column",
  },
  Inputcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    width: 200,
    height: 50,
    borderRadius: 20,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  listContainer: {
    flex: 3,
    backgroundColor: "#fff",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
