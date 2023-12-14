import { StyleSheet, View, Text, Pressable } from "react-native";

export const Goalitem = ({ itemData, goals, setGoals }) => {
  const handleonDelete = () => {
    const newGoals = goals.filter((goal) => goal !== itemData.item);
    setGoals(newGoals);
  };
  return (
    <Pressable android_ripple={{ color: "red" }} onPress={handleonDelete}>
      <View style={styles.textList}>
        <Text style={{ color: "#ffffff" }}>{itemData.item}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  textList: {
    padding: 10,
    backgroundColor: "#5e0acc",
    borderColor: "#000000",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
  },
});
