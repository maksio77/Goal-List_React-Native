import { StyleSheet, FlatList, View, Button,  } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals ] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  };

  function endAddGoalHandler() {
    setModalIsVisible(false);
  };

  function addGoalHandler(enteredGoalText){
    setCourseGoals(currentCourseGoals =>  [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}]);
    endAddGoalHandler();
  };

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.id != id);
    })
  };

  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button 
          title='Add new goal' 
          color={"#a065ec"} 
          onPress={startAddGoalHandler}
        />
        <GoalInput endAddGoalHandler={endAddGoalHandler} addGoalHandler={addGoalHandler} visible={modalIsVisible}/>
        <View style={styles.goalsContainer}>
          <FlatList 
            data={courseGoals} 
            alwaysBounceVertical={false}
            keyExtractor={item =>  item.id }
            renderItem={ itemData => <GoalItem id={itemData.item.id} text={itemData.item.text} deleteGoalHandler={deleteGoalHandler}/> }/>
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
