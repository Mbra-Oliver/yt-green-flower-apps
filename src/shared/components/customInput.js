import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "./../constant";

const CustomInput = ({ placeholder }) => {
  return (
    <View style={styles.root}>
      <TextInput placeholder={placeholder} style={styles.input} />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  root: {
    // ...StyleSheet.absoluteFill,
    paddingBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    borderRadius: 15,
    backgroundColor: "white",
  },
});
