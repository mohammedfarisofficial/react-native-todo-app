import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal,Image } from "react-native";

export default function GoalInput({ onAddGoal,onCancel, visible }) {
  const [text, setText] = useState("");

  function inputTextHandler(inputText) {
    setText(inputText);
  }
  function onAddGoalHandler() {
    onAddGoal(text);
    setText("");
  }
  return (
    <Modal
      visible={visible}
      animationType="slide"
    >
      <View style={styles.inputContianer}>
        <Image style={styles.image} source={require('../assets/icons/goal.png')}/>
        <TextInput
          onChangeText={inputTextHandler}
          style={styles.textInput}
          placeholder="Enter your goal"
          value={text}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button color="#ff0000" title="Cancel" onPress={onCancel}/>
          </View>
          <View style={styles.button}>
            <Button color="#1da1f2" onPress={onAddGoalHandler} title="Add Goal" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContianer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding : 16,
    backgroundColor : '#192734'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#525556",
    width: "100%",
    padding: 12,
    color: 'white',
    borderRadius : 10
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 3,
  },
  image:{
    width : 100,
    height : 100,
    margin : 20,
  }
});
