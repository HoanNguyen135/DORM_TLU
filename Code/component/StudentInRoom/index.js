import { View, Text, Image,TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const StudentInRoom = () => {


  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate("InfoStudentScreen")
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleClick}>
      <View style={styles.boxAvatar}>
        <Image
          style={styles.imgAvatar}
          source={require("../../assets/images/avatar.png")}
        />
      </View>
      <View style={styles.infoStudent}>
        <Text style={[styles.textName,styles.text]}>Nguyễn Công Hoan</Text>
        <Text style={[styles.textMSV,styles.text]}>MSV : 1851061349</Text>
        <Text style={[styles.textClass,styles.text]}>Lớp : 60TH4</Text>
        <Text style={[styles.textBirth,styles.text]}>NS : 13/05/2000</Text>
      </View>
    </TouchableOpacity>
  );
};

export default StudentInRoom;
