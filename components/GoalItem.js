import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function GoalItem ({text, deleteGoalHandler, id}) {
      return(
            <View style={styles.goalItem}>
                  <Pressable 
                        android_ripple={{color: '#210644'}} 
                        onPress={() => deleteGoalHandler(id)}
                        style={({pressed}) => pressed && styles.pressedItem}
                  >
                        <Text style={styles.goalText}>{text}</Text>
                  </Pressable>
            </View>
      );
};

const styles = StyleSheet.create({
      goalItem: {
            margin: 8,
            borderRadius: 6,
            backgroundColor: '#5e0acc',
            color: 'white',
      },
      pressedItem:{
            opacity: 0.5,
      },
      goalText: {
            color: 'white',
            padding: 8,
      }
});