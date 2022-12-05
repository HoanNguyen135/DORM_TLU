import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { useNavigation } from "@react-navigation/native";

const Room = () => {


  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate("ListStudentInRoomScreen")
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleClick}>
      <Text style={styles.textNameRoom}>P311</Text>
      <Text style={styles.textNumberRoom}>6/6</Text>
    </TouchableOpacity>
  )
}

export default Room