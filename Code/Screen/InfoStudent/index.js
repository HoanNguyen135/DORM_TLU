import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import styles from "./styles";
import { Zocial } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const InfoStudent = () => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.boxAvatar}>
        <Image
          style={styles.imgAvatar}
          source={require("../../assets/images/avatar.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnEdit}>
        <Text style={styles.textEdit}>Sửa thông tin</Text>
      </TouchableOpacity>
      <View style={styles.boxInfoPersonal}>
        <View style={styles.row}>
          <View style={[styles.boxIcon]}>
            <Zocial name="persona" size={14} color="black" />
          </View>
          <Text>Thông tin cá nhân</Text>
        </View>
        <View style={styles.row}>
          <View style={[styles.boxIcon]}>
            <Ionicons name="person-outline" size={14} color="black" />
          </View>
          <Text>Họ và tên : Nguyễn Công Hoan</Text>
        </View>
        <View style={[styles.row, styles.JustifyContent]}>
          <View style={[styles.boxIcon]}>
            <AntDesign name="phone" size={14} color="black" />
          </View>
          <Text>0866477201</Text>
          <View style={[styles.boxIcon]}>
            <AntDesign name="team" size={14} color="black" />
          </View>
          <Text>Nam</Text>
          <Text>Dân tộc: Kinh</Text>
        </View>
        <View style={styles.row}>
          <View style={[styles.boxIcon]}>
            <AntDesign name="idcard" size={14} color="black" />
          </View>
          <Text>CCCD/CMND: 0002031230021</Text>
        </View>
        <View style={styles.row}>
          <View style={[styles.boxIcon]}>
            <Ionicons name="ios-location-outline" size={14} color="black" />
          </View>
          <Text>Quê quán : Hà Nam</Text>
          <Text>Khoa : CNTT</Text>
        </View>
        <View style={styles.row}>
          <View style={[styles.boxIcon]}>
            <Fontisto name="email" size={14} color="black" />
          </View>
          <Text>Email : hoannguyen13520@gmail.com</Text>
        </View>
      </View>
      <View style={styles.boxInfoContact}>
        <View style={styles.row}>
          <View style={[styles.boxIcon]}>
            <Zocial name="persona" size={14} color="black" />
          </View>
          <Text>Thông tin liên hệ</Text>
        </View>
        <View style={styles.row}>
          <View style={[styles.boxIconHome]}>
            <Ionicons name="home-outline" size={14} color="black" />
          </View>
          <Text style={styles.textAddress} numberOfLines={2}>
            Đ/c thường trú : Thôn Nhân Trai Xã Hưng Công Huyện Bình Lục Tỉnh Hà
            Nam
          </Text>
        </View>
        <View style={[styles.row]}>
          <View style={[styles.boxIcon]}>
            <AntDesign name="phone" size={14} color="black" />
          </View>
          <Text>Số điện thoại bố : 0866477201</Text>
        </View>
        <View style={styles.row}>
          <View style={[styles.boxIcon]}>
            <Ionicons name="person-outline" size={14} color="black" />
          </View>
          <Text>Họ tên bố : Nguyễn Khắc Thoại</Text>
        </View>
        <View style={[styles.row]}>
          <View style={[styles.boxIcon]}>
            <AntDesign name="phone" size={14} color="black" />
          </View>
          <Text>Số điện thoại mẹ : 0866477201</Text>
        </View>
        <View style={styles.row}>
          <View style={[styles.boxIcon]}>
            <Ionicons name="person-outline" size={14} color="black" />
          </View>
          <Text>Họ tên mẹ : Nguyễn Khắc Thoại</Text>
        </View>
      </View>
      <View style={styles.boxInfoDorm}>
        <View style={styles.row}>
          <View style={[styles.boxIcon]}>
            <Zocial name="persona" size={14} color="black" />
          </View>
          <Text>Thông tin KTX</Text>
        </View>
        <View style={styles.row}>
          <View style={[styles.boxIcon]}>
            <Ionicons name="ios-location-outline" size={14} color="black" />
          </View>
          <Text>Tòa nhà: 04</Text>
        </View>
        <View style={styles.row}>
          <View style={[styles.boxIcon]}>
            <Ionicons name="ios-location-outline" size={14} color="black" />
          </View>
          <Text>Phòng : 311</Text>
        </View>
      </View>
      <View style={styles.boxBreakRule}>
        <TouchableOpacity style={styles.sentBreakRule}>
          <Text style={styles.textSentBreakRule} numberOfLines={1}>Gửi thông báo vi phạm cho phụ huynh</Text>
        </TouchableOpacity>
        <View style={styles.row}>
          <View style={[styles.boxIcon]}>
            <MaterialIcons name="dangerous" size={24} color="black" />
          </View>
          <Text>Vi phạm</Text>
        </View>
        <View style={styles.row}>
          <Text>Thông tin liên hệ</Text>
        </View>
        <View style={styles.row}>
          <Text>Thông tin liên hệ</Text>
        </View>
        <View style={styles.row}>
          <Text>Thông tin liên hệ</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default InfoStudent;
