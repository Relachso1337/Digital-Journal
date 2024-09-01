import { View, Text, Button } from 'react-native'
import React from 'react'
import DUbtn from '../components/Main Page/DUbtn'

const MainPage = ({navigation}) => {
  return (
    <View>
      <Text>MainPage</Text>
      <Button title='Daily Update' 
      onPress={() => navigation.navigate('Daily Update')}></Button>
    </View>
  )
}

export default MainPage