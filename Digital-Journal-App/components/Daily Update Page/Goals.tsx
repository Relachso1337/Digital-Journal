import { View, Text, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Goals = () => {
    const [GoalList, setGoalList] = useState('')
    
    useEffect(() => {
        const loadGoals = async () => {
          try {
            const goals = await AsyncStorage.getItem('GoalList');
    
            if (goals !== null) setGoalList(goals);
          } catch (error) {
            console.error('Failed to load goals', error);
          }
        };
    
        loadGoals();
      }, []);
    
      useEffect(() => {
        const storeGoals = async () => {
          try {
            await AsyncStorage.setItem('GoalList', GoalList);
          } catch (error) {
            console.error('Failed to save goals', error);
          }
        };
    
        storeGoals();
      }, [GoalList]);
    
      return (
    <View className="flex flex-col pb-3">
      <Text className="text-gray-600 font-semibold text-lg pb-2">GOALS I AM CURRENTLY WORKING TOWARDS:</Text>
      <TextInput
      onChangeText={(GoalList) => setGoalList(GoalList)}
      placeholder='Write down your longterm Goals'
      className='h-32 border-dotted border-2 rounded p-2 focus:border-gray-800'
      multiline={true}
      value={GoalList}
      />
    </View>
  )
}

export default Goals