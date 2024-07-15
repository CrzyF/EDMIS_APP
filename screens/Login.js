import * as React from "react";
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity, TextInput } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Login = ({navigation}) => {
  return (
    <ImageBackground
      style={styles.loginIcon}
      resizeMode="cover"
      source={require("../assets/homepage.png")}
    >
      <View style={styles.loginChild} />
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.loginBorder]} />
        <Text style={[styles.email, styles.emailPosition]}>Email</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.loginBorder]} />
        <Text style={[styles.email, styles.emailPosition]}>Password</Text>
      </View>
      <View style={[styles.dontHaveAccountParent, styles.loginInnerLayout]}>
        <Text style={[styles.dontHaveAccount, styles.enterClr]}>
          Password Forgotten?
        </Text>
        
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
        <Text style={[styles.signUp, styles.signUpClr]}>Reset</Text>
        </TouchableOpacity>

      </View>
      <TouchableOpacity
        style={[
          styles.continueWithoutAnAccountWrapper,
          styles.continuePosition,
        ]}
        onPress={() => navigation.navigate("HomePage")}
      >
        <Text style={[styles.continueWithoutAn, styles.continuePosition]}>
          Continue without an account
        </Text>

      </TouchableOpacity>

      <View style={[styles.rememberMeWrapper, styles.loginInnerLayout]}>
        <Text style={[styles.dontHaveAccount, styles.enterClr]}>
          Remember me
        </Text>
      </View>

      <TouchableOpacity style={[styles.signupButton, styles.signupButtonPosition]} onPress={() => navigation.navigate("Register")}>
        <View style={[styles.login, styles.emailPosition]}>
          <View style={[styles.loginItem, styles.loginItemLayout]} />
          <Text style={[styles.register, styles.login2Typo]}>Register</Text>
        </View>
      </TouchableOpacity>

      <Text style={[styles.welcomeBack, styles.signUpClr]}>Welcome Back!</Text>
      <Text style={[styles.pleaseLoginTo, styles.signupButtonPosition]}>
        Please login to access your account
      </Text>
      
      <TextInput style={[styles.enterEmailHere, styles.enterPosition]}
      placeholder="Enter email here"
      />

      <TextInput style={[styles.enterPasswordHere, styles.enterPosition]}
        placeholder="Enter password here"
      />

      <View style={[styles.loginInner, styles.enterPosition]} />
      <Text
        style={[styles.emergencyDisaster, styles.login2Position]}
      >{`Emergency & Disaster Management Information System `}</Text>
      <View style={[styles.rectangleContainer, styles.groupInnerPosition]}>
        <View style={[styles.groupInner, styles.groupInnerPosition]} />
        <View style={[styles.dmisParent, styles.dmisPosition]}>
          <Text style={[styles.dmis, styles.dmisPosition]}>DMIS</Text>
          <View style={[styles.rectangleView, styles.groupChildLayout]} />
          <View style={[styles.groupChild1, styles.groupChildLayout]} />
          <View style={[styles.groupChild2, styles.groupChildLayout]} />
          <View style={[styles.groupChild3, styles.groupChildLayout]} />
        </View>
      </View>
      <TouchableOpacity style={[styles.login1, styles.loginLayout]} onPress={() => navigation.navigate("HomePage")}>
        <Image
          style={styles.loginItemLayout}
          contentFit="cover"
          source={require("../assets/rectangle-22.png")}
        />
        <Text style={[styles.login2, styles.login2Position]}>Login</Text>
      </TouchableOpacity>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  rectangleLayout: {
    height: 69,
    width: 327,
    left: 34,
    position: "absolute",
  },
  loginBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  emailPosition: {
    top: 0,
    position: "absolute",
  },
  loginInnerLayout: {
    height: 15,
    top: 568,
  },
  enterClr: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  signUpClr: {
    color: Color.colorDarkorange_200,
    textAlign: "left",
  },
  continuePosition: {
    left: "50%",
    position: "absolute",
  },
  signupButtonPosition: {
    left: 35,
    position: "absolute",
  },
  loginItemLayout: {
    borderRadius: 8,
    top: 0,
    height: 42,
    width: 327,
    left: 0,
    position: "absolute",
    overflow: "visible"
  },
  login2Typo: {
    fontSize: FontSize.size_4xl_1,
    top: "50%",
    marginTop: -14.7,
    fontFamily: FontFamily.interRegular,
  },
  enterPosition: {
    left: 45,
    position: "absolute",
  },
  login2Position: {
    color: Color.colorWhite,
    left: "50%",
    textAlign: "left",
    position: "absolute",
  },
  groupInnerPosition: {
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
  loginLayout: {
    width: 327,
    height: 42,
    overflow: "visible"
  },
  loginChild: {
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
    borderColor: Color.colorGainsboro,
    height: 42,
    width: 327,
    left: 0,
    position: "absolute",
  },
  email: {
    left: 1,
    color: Color.colorGray_200,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi_6,
  },
  rectangleParent: {
    top: 404,
  },
  rectangleGroup: {
    top: 489,
  },
  dontHaveAccount: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi_6,
    top: 0,
    position: "absolute",
    left: 0,
  },
  signUp: {
    left: 129,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 0,
    fontSize: FontSize.size_smi_6,
    position: "absolute",
  },
  dontHaveAccountParent: {
    left: 198,
    width: 175,
    position: "absolute",
  },
  continueWithoutAn: {
    marginLeft: -137,
    fontSize: 19,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: 0,
    color: Color.colorBlack,
    textAlign: "left",
  },
  continueWithoutAnAccountWrapper: {
    marginLeft: -136.75,
    top: 773,
    width: 274,
    height: 23,
  },
  rememberMeWrapper: {
    left: 71,
    width: 187,
    position: "absolute",
  },
  loginItem: {
    borderColor: Color.colorDarkorange_200,
    borderWidth: 1,
    borderStyle: "solid",
  },
  register: {
    marginLeft: -45.3,
    left: "50%",
    position: "absolute",
    color: Color.colorDarkorange_200,
    textAlign: "left",
  },
  login: {
    height: 42,
    width: 327,
    left: 0,
  },
  signupButton: {
    top: 702,
    height: 42,
    width: 327,
  },
  welcomeBack: {
    top: 326,
    left: 30,
    fontSize: 32,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  pleaseLoginTo: {
    top: 361,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi_6,
  },
  enterEmailHere: {
    top: 445,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi_6,
  },
  enterPasswordHere: {
    top: 530,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_smi_6,
  },
  loginInner: {
    borderColor: Color.colorBlack,
    width: 15,
    height: 15,
    top: 568,
    borderWidth: 1,
    borderStyle: "solid",
  },
  emergencyDisaster: {
    marginLeft: -172.15,
    top: 148,
    fontSize: 14,
    letterSpacing: -0.3,
    lineHeight: 30,
    width: 345,
    height: 22,
    fontFamily: FontFamily.robotoRegular,
  },
  groupInner: {
    marginLeft: -173.15,
    top: 22,
    borderRadius: 9,
    height: 42,
    backgroundColor: Color.colorWhite,
  },
  dmis: {
    marginLeft: -26.25,
    fontSize: 39,
    letterSpacing: -0.8,
    lineHeight: 86,
    color: Color.colorDarkorange_100,
    width: 93,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
  },
  rectangleView: {
    top: 29,
    backgroundColor: Color.colorCrimson,
    left: 9,
    width: 29,
  },
  groupChild1: {
    top: 40,
    backgroundColor: Color.colorBlack,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    left: -10,
  },
  groupChild2: {
    top: 40,
    backgroundColor: Color.colorGold,
    left: 9,
    width: 29,
  },
  groupChild3: {
    top: 51,
    backgroundColor: Color.colorSeagreen,
    left: 9,
    width: 29,
  },
  dmisParent: {
    marginLeft: -67.15,
    width: 134,
  },
  rectangleContainer: {
    marginLeft: -173.65,
    top: 85,
    height: 64,
  },
  login2: {
    marginLeft: -30.4,
    fontSize: FontSize.size_4xl_1,
    top: "50%",
    marginTop: -14.7,
    fontFamily: FontFamily.interRegular,
  },
  login1: {
    top: 642,
    height: 42,
    left: 34,
    width: 327,
    position: "absolute",
  },
  loginIcon: {
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Login;