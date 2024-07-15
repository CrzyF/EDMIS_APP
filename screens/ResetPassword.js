import * as React from "react";
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, TextInput } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const ResetPassword = ({navigation}) => {
  return (
    <ImageBackground
      style={styles.resetPasswordIcon}
      resizeMode="cover"
      source={require("../assets/homepage.png")}
    >
      <View style={styles.resetPasswordChild} />
      <Text
        style={[styles.emergencyDisaster, styles.dmisTypo]}
      >{`Emergency & Disaster Management Information System `}</Text>
      <View style={[styles.rectangleParent, styles.groupChild2Layout]}>
        <View style={styles.groupChild} />
        <View style={[styles.dmisParent, styles.dmisPosition]}>
          <Text style={[styles.dmis, styles.dmisPosition]}>DMIS</Text>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
          <View style={[styles.rectangleView, styles.groupLayout]} />
          <View style={[styles.groupChild1, styles.groupLayout]} />
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupChild2, styles.groupChild2Layout]} />
        <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={[styles.groupChild2, styles.groupChild2Layout]} />
        <Text style={[styles.password, styles.passwordTypo]}>
          Confirm Password
        </Text>
      </View>
      <Text style={[styles.resetPassword, styles.passwordTypo]}>
        Reset Password
      </Text>
      <Text
        style={styles.pleaseEnterYour}
      >{`Please enter your new password for your account
associated with example@gmail.com`}</Text>

      <TouchableOpacity style={[styles.login, styles.loginLayout]} onPress={() => navigation.navigate("Login")}>
        <Image
          style={[styles.loginChild, styles.loginLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-22.png")}
        />
        <Text style={[styles.submit, styles.passwordTypo]}>Submit</Text>
      </TouchableOpacity>

      <TextInput 
      style={[styles.enterEmailHere, styles.enterTypo]}
      placeholder="Enter email here"
      />

      <TextInput 
      style={[styles.enterPasswordHere, styles.enterTypo]}
      placeholder="Enter password here"
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  dmisTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  groupChild2Layout: {
    width: 346,
    position: "absolute",
  },
  dmisPosition: {
    height: 63,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  groupLayout: {
    height: 7,
    width: 29,
    position: "absolute",
  },
  rectangleLayout: {
    height: 73,
    left: 23,
    width: 346,
    position: "absolute",
  },
  passwordTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  loginLayout: {
    width: 344,
    height: 42,
    position: "absolute",
  },
  enterTypo: {
    fontSize: FontSize.size_smi_6,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  resetPasswordChild: {
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
    width: 325,
    height: 22,
    color: Color.colorWhite,
    left: "50%",
    position: "absolute",
    fontFamily: FontFamily.robotoRegular,
  },
  groupChild: {
    marginLeft: -173.15,
    top: 22,
    borderRadius: 9,
    height: 42,
    width: 346,
    left: "50%",
    backgroundColor: Color.colorWhite,
    position: "absolute",
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
    backgroundColor: Color.colorCrimson,
    left: 9,
    width: 29,
    top: 29,
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
    left: "50%",
    width: 346,
  },
  groupChild2: {
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    borderWidth: 1.1,
    height: 44,
    top: 29,
    left: 0,
  },
  password: {
    left: 1,
    color: Color.colorGray_200,
    fontSize: FontSize.size_sm_3,
    fontFamily: FontFamily.interRegular,
    top: 0,
  },
  rectangleGroup: {
    top: 410,
  },
  rectangleContainer: {
    top: 499,
  },
  resetPassword: {
    top: 311,
    left: 20,
    fontSize: 33,
    color: Color.colorOrange,
    width: 253,
  },
  pleaseEnterYour: {
    top: 351,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm_3,
    left: 23,
    textAlign: "left",
    position: "absolute",
  },
  loginChild: {
    borderRadius: 8,
    top: 0,
    width: 344,
    left: 0,
  },
  submit: {
    marginTop: -14.7,
    marginLeft: -40.6,
    top: "50%",
    fontSize: FontSize.size_4xl_1,
    width: 81,
    color: Color.colorWhite,
    left: "50%",
  },
  login: {
    top: 603,
    left: 25,
  },
  enterEmailHere: {
    top: 454,
    left: 34,
  },
  enterPasswordHere: {
    top: 543,
    left: 35,
  },
  resetPasswordIcon: {
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default ResetPassword;