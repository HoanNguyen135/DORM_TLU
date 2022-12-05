import { Platform } from "react-native";

export const FormatPrice = (number) => {
  if (Platform.OS === "ios") {
    return number.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
  } else {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " đ";
  }
};
