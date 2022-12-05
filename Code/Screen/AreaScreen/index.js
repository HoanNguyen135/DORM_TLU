import { View, Text,FlatList,Button } from 'react-native'
import React from 'react'
import styles from './styles'
import { Area } from '../../component'

const data = [
    {
        id: '1'
    },
    {
        id: '2'
    },
    {
        id: '3'
    }
]

const AreaScreen = () => {




    const renderArea = () => { 
        return <Area/>
     }

  return (
    <View style={styles.container}>
      <View style={styles.boxContent}>
        <View style={styles.boxButton}>
            <Text style={styles.textButton}>Thêm khu</Text>
        </View>
        <Text style={styles.textContent}>Các khu kí túc xá</Text>
        </View>
      <View>
        <FlatList
            data={data}
            keyExtractor= {(item)=> item.id.toString()}
            renderItem={renderArea}
            numColumns={2}
            showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default AreaScreen