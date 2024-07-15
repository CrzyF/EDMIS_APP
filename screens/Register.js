import * as React from "react";
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, TextInput } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Register = ({navigation}) => {
  return (
    <ImageBackground
      style={styles.registerIcon}
      resizeMode="cover"
      source={require("../assets/homepage.png")}
    >
      <View style={styles.registerChild} />
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.loginLayout]} />
        <Text style={styles.email}>Email</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.loginLayout]} />
        <Text style={styles.email}>Password</Text>
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.loginLayout]} />
        <Text style={styles.email}>Confirm Password</Text>
      </View>
      <Text style={styles.newAccount}>New Account</Text>
      <Text style={styles.pleaseFillThe}>
        Please fill the form to create your account
      </Text>
      <TextInput 
        style={[styles.enterEmailHere, styles.enterTypo]}
        placeholder="Enter email here"
      />


      <TextInput 
        style={[styles.enterPasswordHere, styles.enterTypo]}
        placeholder="Enter password here"
      />
        

      <TextInput 
        style={[styles.reEnterPasswordHere, styles.enterTypo]}
        placeholder="Re-enter password here"
      />
        
      <Text
        style={[styles.emergencyDisaster, styles.registerPosition]}
      >{`Emergency & Disaster Management Information System `}</Text>
      <View style={[styles.groupView, styles.viewPosition]}>
        <View style={[styles.rectangleView, styles.viewPosition]} />
        <View style={[styles.dmisParent, styles.dmisPosition]}>
          <Text style={[styles.dmis, styles.dmisPosition]}>DMIS</Text>
          <View style={[styles.groupChild1, styles.groupChildLayout]} />
          <View style={[styles.groupChild2, styles.groupChildLayout]} />
          <View style={[styles.groupChild3, styles.groupChildLayout]} />
          <View style={[styles.groupChild4, styles.groupChildLayout]} />
        </View>
      </View>

      <TouchableOpacity style={[styles.login, styles.loginLayout]} onPress={() => navigation.navigate("Login")}>
        <Image
          style={styles.loginChild}
          contentFit="cover"
          source={require("../assets/rectangle-22.png")}
        />
        <Text style={[styles.register, styles.registerPosition]}>Register</Text>
      </TouchableOpacity>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  rectangleLayout: {
    height: 69,
    left: 34,
    width: 327,
    position: "absolute",
  },
  loginLayout: {
    width: 327,
    height: 42,
    position: "absolute",
  },
  enterTypo: {
    left: 45,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi_6,
    position: "absolute",
  },
  registerPosition: {
    color: Color.colorWhite,
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  viewPosition: {
    width: 346,
    left: "50%",
    position: "absolute",
  },
  dmisPosition: {
    height: 63,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  groupChildLayout: {
    height: 7,
    width: 29,
    position: "absolute",
  },
  registerChild: {
    top: 295,
    borderTopLeftRadius: 21,
    borderTopRightRadius: 21,
    width: 393,
    height: 560,
    backgroundColor: Color.colorWhite,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    top: 27,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    height: 42,
    left: 0,
  },
  email: {
    left: 1,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi_6,
    top: 0,
    position: "absolute",
  },
  rectangleParent: {
    top: 388,
  },
  rectangleGroup: {
    top: 473,
  },
  rectangleContainer: {
    top: 558,
  },
  newAccount: {
    top: 310,
    left: 30,
    fontSize: FontSize.size_12xl_5,
    color: Color.colorOrange,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  pleaseFillThe: {
    top: 345,
    left: 35,
    fontSize: 12,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  enterEmailHere: {
    top: 429,
  },
  enterPasswordHere: {
    top: 514,
  },
  reEnterPasswordHere: {
    top: 599,
  },
  emergencyDisaster: {
    marginLeft: -163.15,
    top: 148,
    fontSize: FontSize.size_sm_5,
    letterSpacing: -0.3,
    lineHeight: 30,
    width: 325,
    height: 22,
    fontFamily: FontFamily.robotoRegular,
  },
  rectangleView: {
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
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
  },
  groupChild1: {
    top: 29,
    backgroundColor: Color.colorCrimson,
    left: 9,
    height: 7,
    width: 29,
  },
  groupChild2: {
    top: 40,
    backgroundColor: Color.colorBlack,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    left: -10,
  },
  groupChild3: {
    top: 40,
    backgroundColor: Color.colorGold,
    left: 9,
    height: 7,
    width: 29,
  },
  groupChild4: {
    top: 51,
    backgroundColor: Color.colorSeagreen,
    left: 9,
    height: 7,
    width: 29,
  },
  dmisParent: {
    marginLeft: -67.15,
    width: 134,
  },
  groupView: {
    marginLeft: -173.65,
    top: 85,
    height: 64,
  },
  loginChild: {
    borderRadius: 8,
    top: 0,
    height: 42,
    width: 327,
    left: 0,
    position: "absolute",
  },
  register: {
    marginTop: -14.7,
    marginLeft: -44.7,
    top: "50%",
    fontSize: FontSize.size_4xl_1,
    fontFamily: FontFamily.interRegular,
  },
  login: {
    top: 667,
    left: 33,
    height: 42,
  },
  registerIcon: {
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Register;