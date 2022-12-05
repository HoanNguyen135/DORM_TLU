import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import React from "react";
import { InputText } from "../../component";
import { useForm } from "react-hook-form";
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = () => {};

  const handleRegister = () => {
    navigation.navigate('RegisterInDorm')
  };


  return (
    <View style={styles.container}>
      <View style={styles.boxLogo}>
        <Image
          style={styles.imgLogo}
          source={require("../../assets/images/Logo_TLU.png")}
        />
      </View>
      <Text style={styles.textLogo}>KÍ TÚC XÁ ĐẠI HỌC THỦY LỢI</Text>
      <InputText
        control={control}
        inputName="username"
        placehorder={"Nhập tên tài khoản"}
        rules={{ required: "Vui lòng nhập tài khoản " }}
      />
      <InputText
        control={control}
        inputName="password"
        placehorder={"Nhập mã mật khẩu"}
        rules={{ required: "Vui lòng nhập mật khẩu " }}
      />
      <TouchableOpacity
        onPress={handleSubmit(handleLogin)}
        style={styles.btnLogin}
      >
        <Text style={styles.textLogin}>Đăng nhập</Text>
      </TouchableOpacity>
      <View style={styles.btnRegister}>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.textRegister}>Đăng ký ở nội trú</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.textRegister}>Tìm kiếm đơn đăng ký</Text>

        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity onPress={handleRegister} style={styles.btnRegister}>
        
      </TouchableOpacity> */}
    </View>
  );
};

export default LoginScreen;
