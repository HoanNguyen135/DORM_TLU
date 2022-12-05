import { View, Text ,TextInput} from "react-native";
import React from "react";
import { Controller } from "react-hook-form";
import styles from "./styles";

const InputText = ({ control, inputName, placehorder, rules = {}, data }) => {


  let nameLabel;

  switch(inputName) {
    case 'username':
      nameLabel = 'Tài khoản'
      break;
    case 'password':
      nameLabel = 'Mật khẩu'
      break;
    default:
      nameLabel = inputName;
      break;
  }


  return (
    <Controller
      control={control}
      name={nameLabel}
      rules={rules}
      defaultValue={data}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <View style={styles.container}>
          <View style={styles.boxInput}>
            <View style={styles.boxText}>
              <Text style={styles.nameText}>{nameLabel}</Text>
            </View>
            <TextInput
              onBlur={onBlur}
              value={value}
              placeholder={placehorder}
              onChangeText={(text) => {
                onChange(text);
              }}
              style={[
                styles.inputText,
                {
                  borderColor: error ? "red" : "orange",
                },
              ]}
            />
          </View>
          {error && (
            <View style={styles.boxError}>
              <Text style={{ color: "red" }}>{error.message}</Text>
            </View>
          )}
        </View>
      )}
    />
  );
};

export default InputText;
