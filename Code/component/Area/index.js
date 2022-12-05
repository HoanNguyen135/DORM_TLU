import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const Area = () => {
  const navigation = useNavigation();

  const handleGoRoom = () => {
    navigation.navigate("RoomScreen");
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleGoRoom}>
      <View style={styles.area}>
        <View style={styles.boxImg}>
          <Image
            source={require("../../assets/images/Home.png")}
            style={styles.img}
          />
        </View>
        <View style={styles.boxContent}>
          <Text style={styles.textContent}>KHU K1</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Area;
