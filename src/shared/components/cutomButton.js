import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS } from "../constant";

const cutomButton = ({title}) => {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Crée mon compte</Text>
      </TouchableOpacity>
    </View>
  );
};

export default cutomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.main,
    padding: 20,
    borderRadius: 50,
  },

  buttonText: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
  },
});
