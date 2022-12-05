import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import { Picker } from "@react-native-picker/picker";
import { Room } from "../../component";

const data = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
  {
    id: 9,
  },
  {
    id: 10,
  },
  {
    id: 11,
  },
  {
    id: 12,
  },
];

const Rooms = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  const handleChangeValue = (a) => {
    setSelectedLanguage(a);
    alert(a);
  };

  const renderRoom = () => {
    return <Room />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxRoom}>
        <Picker
          style={{ width: 180,height: 30,justifyContent: 'center' }}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) => handleChangeValue(itemValue)}
          mode={"dropdown"}
        >
          <Picker.Item label="Tầng 1 22 người" value="Tầng 1" />
          <Picker.Item label="Tầng 2" value="Tầng 2" />
          <Picker.Item label="Tầng 3" value="Tầng 3" />
        </Picker>
        <View style={styles.boxIconHome}>
          <Ionicons name="home-outline" size={16} color="black" />
        </View>
        <TouchableOpacity style={styles.btnAddRoom}>
          <Text style={styles.textAddRoom}>Thêm</Text>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.boxNumberRoom}>
        <Text>(22 phòng)</Text>
      </View> */}
      <FlatList
        renderItem={renderRoom}
        numColumns={4}
        keyExtractor={(item) => item.id.toString()}
        data={data}
        style={styles.listRoom}
      />
    </View>
  );
};

export default Rooms;
