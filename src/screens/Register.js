import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

import { COLORS } from "./../shared/constant";

import CustomInput from "../shared/components/customInput";
import CustomButton from "../shared/components/cutomButton";
import BottomText from "../shared/components/BottomText";
import { Image } from "react-native";

const Register = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
        />
      </View>

      <View style={styles.title}>
        {/* Icon */}

        <Text style={styles.titleText}>L'herbe verte</Text>
      </View>

      <CustomInput placeholder="Entrer votre nom" />
      <CustomInput placeholder="Entrer votre prénom" />
      <CustomInput placeholder="Entrer votre email" />

      <CustomButton title="Crée mon compte" />

      <BottomText text="En cliquant sur crée le compte, vous accepter nos termes et conditions" />
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },

  title: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
    width: "100%",
    marginBottom: 30,
  },

  titleText: {
    color: "black",
    fontWeight: "600",
    fontSize: 25,
    color: COLORS.main,
    textTransform: "uppercase",
  },

  logoContainer: {
    justifyContent: "center",
    alignItems:'center'
  },

  logo: {
    width: 100,
    height: 100,
  },
});
