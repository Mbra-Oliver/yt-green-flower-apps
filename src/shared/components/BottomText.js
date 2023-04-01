import { View, Text, StyleSheet } from "react-native";
import React from "react";

const BottomText = ({ text }) => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default BottomText;

const styles = StyleSheet.create({
  root: {
  
    paddingTop: 30,
  },
  text: {
    color: "gray",
    textAlign: "center",
  },
});
