import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import { Goalitem } from "./components/Goalitem";
import { GoalInput } from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const handleModal = () => {
    setModalVisible((e) => !e);
  };

  return (
    <View style={styles.appContainer}>
      <View style={{ marginBottom: 16 }}>
        <Button title="Add New Goal" color="" onPress={handleModal} />
      </View>
      <GoalInput
        setGoals={setGoals}
        modalVisible={modalVisible}
        handleModal={handleModal}
      />

      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <Goalitem goals={goals} setGoals={setGoals} itemData={itemData} />
            );
          }}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  TextInput: {
    padding: 5,
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
  },
  goalsContainer: {
    flex: 4,
  },
  textList: {
    padding: 10,
    backgroundColor: "blue",
    borderColor: "#000000",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
  },
});
