import * as React from "react";
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, TextInput } from "react-native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const ForgotPassword = ({navigation}) => {
  return (
    <ImageBackground
      style={styles.forgotPasswordIcon}
      resizeMode="cover"
      source={require("../assets/homepage.png")}
    >
      <View style={styles.forgotPasswordChild} />
      <Text
        style={[styles.emergencyDisaster, styles.dmisTypo]}
      >{`Emergency & Disaster Management Information System `}</Text>
      <View style={[styles.rectangleParent, styles.groupChildPosition]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <View style={[styles.dmisParent, styles.dmisPosition]}>
          <Text style={[styles.dmis, styles.dmisPosition]}>DMIS</Text>
          <View style={[styles.groupItem, styles.groupLayout1]} />
          <View style={[styles.groupInner, styles.groupLayout1]} />
          <View style={[styles.rectangleView, styles.groupLayout1]} />
          <View style={[styles.groupChild1, styles.groupLayout1]} />
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupChild2, styles.groupLayout]} />
        <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      </View>
      <Text style={[styles.forgotPassword, styles.emailTypo]}>
        Forgot Password?
      </Text>
      <Text style={[styles.haveYouForgotten, styles.enterEmailHereTypo]}>
        Have you forgotten your password? Please enter the email address you
        used to register. An email will be sent with a confirmation link.
      </Text>

      <TouchableOpacity style={[styles.login, styles.loginLayout]} onPress={() => navigation.navigate("ResetPassword")}>
        <Image
          style={[styles.loginChild, styles.loginLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-22.png")}
        />
        <Text style={[styles.submit, styles.emailTypo]}>Submit</Text>
      </TouchableOpacity>

      <TextInput 
      style={[styles.enterEmailHere, styles.enterEmailHereTypo]}
      placeholder="Enter email here"
      />
    
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  dmisTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  groupChildPosition: {
    width: 346,
    left: "50%",
    position: "absolute",
  },
  dmisPosition: {
    height: 63,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  groupLayout1: {
    height: 7,
    width: 29,
    position: "absolute",
  },
  groupLayout: {
    width: 330,
    position: "absolute",
  },
  emailTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  enterEmailHereTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  loginLayout: {
    width: 329,
    height: 42,
    position: "absolute",
  },
  forgotPasswordChild: {
    top: 295,
    borderTopLeftRadius: 21,
    borderTopRightRadius: 21,
    width: 393,
    height: 560,
    backgroundColor: Color.colorWhite,
    left: 0,
    position: "absolute",
  },
  emergencyDisaster: {
    marginLeft: -163.15,
    top: 148,
    fontSize: FontSize.size_sm_5,
    letterSpacing: -0.3,
    lineHeight: 30,
    height: 22,
    width: 325,
    color: Color.colorWhite,
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    marginLeft: -173.15,
    top: 22,
    borderRadius: 9,
    height: 42,
    backgroundColor: Color.colorWhite,
  },
  dmis: {
    marginLeft: -26.25,
    fontSize: FontSize.size_20xl_3,
    letterSpacing: -0.8,
    lineHeight: 86,
    color: Color.colorDarkorange_100,
    width: 93,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  groupItem: {
    top: 29,
    backgroundColor: Color.colorCrimson,
    left: 9,
    width: 29,
  },
  groupInner: {
    top: 40,
    backgroundColor: Color.colorBlack,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    left: -10,
  },
  rectangleView: {
    top: 40,
    backgroundColor: Color.colorGold,
    left: 9,
    width: 29,
  },
  groupChild1: {
    top: 51,
    backgroundColor: Color.colorSeagreen,
    left: 9,
    width: 29,
  },
  dmisParent: {
    marginLeft: -67.15,
    width: 134,
  },
  rectangleParent: {
    marginLeft: -173.65,
    top: 85,
    height: 64,
  },
  groupChild2: {
    top: 28,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    borderWidth: 1.1,
    height: 42,
    left: 0,
  },
  email: {
    left: 1,
    color: Color.colorGray_200,
    fontSize: FontSize.size_smi_7,
    top: 0,
  },
  rectangleGroup: {
    top: 426,
    height: 70,
    left: 33,
  },
  forgotPassword: {
    top: 325,
    left: 31,
    fontSize: 32,
    color: "#ffae00",
  },
  haveYouForgotten: {
    top: 365,
    fontSize: FontSize.size_smi_7,
    left: 33,
    width: 325,
  },
  loginChild: {
    borderRadius: 8,
    top: 0,
    left: 0,
  },
  submit: {
    marginTop: -14.7,
    marginLeft: -38.9,
    top: "50%",
    fontSize: FontSize.size_4xl_1,
    width: 77,
    color: Color.colorWhite,
    left: "50%",
  },
  login: {
    top: 533,
    left: 34,
  },
  enterEmailHere: {
    top: 467,
    left: 43,
    fontSize: FontSize.size_smi_6,
  },
  forgotPasswordIcon: {
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default ForgotPassword;