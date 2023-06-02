import { View, TextInput, Button, StyleSheet, Modal, Image} from "react-native";
import { useState } from "react";

export default function GoalInput ({addGoalHandler, endAddGoalHandler, visible}) {
      const [enteredGoalText, setEnteredGoalText] = useState('');

      function goalInputHandler(enteredText) {
            setEnteredGoalText(enteredText);
      };

      function addGoal() {
            if (enteredGoalText.length > 3){
                  addGoalHandler(enteredGoalText);
                  setEnteredGoalText('');
            }
      }

      return (
            <Modal visible={visible} animationType="slide">
                  <View style={styles.inputContainer}>
                        <Image style={styles.image} source={require('../assets/images/goal.png')}/>
                        <TextInput 
                              style={styles.textInput} 
                              placeholder='Your goal!' 
                              onChangeText={goalInputHandler}
                              value={enteredGoalText} 
                        />
                        <View style={styles.buttonContainer}>
                              <View style={styles.button}>
                                    <Button title='Add goal!' onPress={addGoal} color="#b180f0"/>
                              </View>
                              <View style={styles.button}>
                                    <Button title='Cancel' onPress={endAddGoalHandler} color="#f31282"/>
                              </View>
                        </View>
                  </View>
            </Modal>
      );
};

const styles = StyleSheet.create({
      inputContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 16,
            backgroundColor: '#311b6b',
      },
      textInput: {
            borderWidth: 1,
            borderColor: '#e4d0ff',
            backgroundColor: '#e4d0ff',
            color: '#120438',
            borderRadius: 6,
            width: '100%',
            padding: 16,
      },
      buttonContainer: {
            flexDirection: 'row',
            marginTop: 16,
      },
      button: {
            width: 100,
            marginHorizontal: 8,
      },
      image: {
            width: 100,
            height: 100,
            margin: 20,
      }
});