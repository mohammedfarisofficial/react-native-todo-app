import { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function deleteItemHandler(id) {
    setGoals((preGoals) => preGoals.filter((goal) => goal.key !== id));
  }
  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }
  function addGoalHandler(text) {
    if(text !== ''){
      setGoals((preGoals) => [
        ...preGoals,
        { text, key: Math.random().toString() },
      ]);
      endAddGoalHandler();
    }
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#1da1f2"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
          visible={modalIsVisible}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            alwaysBounceVertical={false}
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDeleteGoal={deleteItemHandler}
                  id={itemData.item.key}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
