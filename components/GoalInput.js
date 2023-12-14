import { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Button,
  Modal,
  Image,
} from "react-native";

export const GoalInput = ({ setGoals, modalVisible, handleModal }) => {
  const [container, setContainer] = useState("");

  const handleAdd = () => {
    setGoals((e) => [...e, container]);
    setContainer("");
    handleModal();
  };

  const handleInput = (text) => {
    setContainer(text);
  };

  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/goal.png")} />
        <TextInput
          placeholder="Hello!"
          style={styles.TextInput}
          value={container}
          onChangeText={handleInput}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button onPress={handleAdd} title="Add" color="#5e0acc" />
          </View>

          <View style={styles.button}>
            <Button title="Cancel" onPress={handleModal} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#311b6b",
  },
  TextInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 10,
    color: "#120438",
    width: "100%",
  },
  buttons: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
