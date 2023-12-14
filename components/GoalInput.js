import { useState } from "react";
import { TextInput, View, StyleSheet, Button, Modal } from "react-native";

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
  console.log(modalVisible);
  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Hello!"
          style={styles.TextInput}
          value={container}
          onChangeText={handleInput}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button onPress={handleAdd} title="Add" />
          </View>

          <View style={styles.button}>
            <Button title="Cancel" onPress={handleModal} />
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
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  TextInput: {
    padding: 5,
    borderWidth: 1,
    borderColor: "#cccccc",
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
});
