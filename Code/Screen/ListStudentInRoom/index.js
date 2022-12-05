import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import { StudentInRoom } from '../../component'
import styles from './styles'

const ListStudentInRoom = () => {
  return (
    <ScrollView style={styles.container}>
        <StudentInRoom/>
        <StudentInRoom/>
        <StudentInRoom/>
        <StudentInRoom/>
        <StudentInRoom/>
    </ScrollView>
  )
}

export default ListStudentInRoom