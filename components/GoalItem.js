import { StyleSheet, View, Text, Pressable } from "react-native";
const GoalItem = ({ text, onDeleteGoal, id }) => {
  // function onDeleteGoalHandler(){
  //      onDeleteGoal(id)
  // }
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={onDeleteGoal.bind(this, id)}
        style={({ pressed })=> pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#5e0acc",
    padding: 13,
    margin: 5,
    borderRadius: 5,
  },
  goalText: {
    color: "#ffffff",
  },
  pressedItem :{
       opacity : .3
  },
});
