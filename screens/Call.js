import * as React from "react";
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const Call = ({navigation}) => {
  return (
    <ImageBackground
      style={styles.callIcon}
      resizeMode="cover"
      source={require("../assets/homepage.png")}
    >
      <View style={styles.fluentspeaker216Filled} />
      <View style={styles.callChild} />
      <View style={styles.image6} />
      <Text
        style={[styles.emergencyDisaster, styles.callingTypo]}
      >{`Emergency & Disaster Management Information System `}</Text>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <View style={[styles.dmisParent, styles.dmisLayout]}>
          <Text style={[styles.dmis, styles.dmisPosition]}>DMIS</Text>
          <View style={[styles.groupItem, styles.groupLayout1]} />
          <View style={[styles.groupInner, styles.groupBg]} />
          <View style={[styles.rectangleView, styles.groupLayout1]} />
          <View style={[styles.groupChild1, styles.groupLayout1]} />
        </View>
      </View>
      <Image
        style={[styles.pxCoatOfArmsOfGhana1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/250pxcoat-of-arms-of-ghana-1.png")}
      />
      <TouchableOpacity style={[styles.rectangleGroup, styles.groupLayout]} onPress={() => navigation.goBack()}>
        <View style={[styles.groupChild2, styles.groupLayout]} />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
      </TouchableOpacity>

      <Text style={[styles.calling, styles.callingTypo]}>Calling...</Text>
      <Text style={[styles.ghanaPoliceService, styles.dmisPosition]}>
        Ghana Police Service
      </Text>

      <TouchableOpacity onPress={() => navigation.push('HomePage')}>
      <Image
        style={[styles.callItem, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/group-4907.png")}
      />
      </TouchableOpacity>

      <TouchableOpacity>
      <Image
        style={[styles.callInner, styles.callInnerPosition]}
        contentFit="cover"
        source={require("../assets/group-4909.png")}
      />
      </TouchableOpacity>

      <TouchableOpacity>
      <Image
        style={[styles.groupIcon, styles.callInnerPosition]}
        contentFit="cover"
        source={require("../assets/group-4908.png")}
      />
      </TouchableOpacity>
      
      <Image
        style={[styles.ellipseIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-36.png")}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  callingTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    left: "50%",
    position: "absolute",
  },
  dmisLayout: {
    height: 60,
    top: 0,
  },
  dmisPosition: {
    color: Color.colorDarkorange_100,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  groupLayout1: {
    height: 6,
    width: 27,
    position: "absolute",
  },
  groupBg: {
    backgroundColor: Color.colorBlack,
    left: -12,
  },
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  groupLayout: {
    width: 39,
    height: 40,
    position: "absolute",
  },
  callInnerPosition: {
    height: 67,
    width: 67,
    top: 671,
    left: "50%",
    position: "absolute",
  },
  fluentspeaker216Filled: {
    left: 24,
    width: 12,
    height: 12,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  callChild: {
    top: 224,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    backgroundColor: Color.colorGray,
    width: '100%',
    height: '100%',
    left: 0,
    position: "absolute",
  },
  image6: {
    top: 107,
    left: 135,
    width: 219,
    height: 13,
    position: "absolute",
  },
  emergencyDisaster: {
    marginLeft: -155.5,
    top: 100,
    fontSize: FontSize.size_smi_9,
    letterSpacing: -0.2,
    lineHeight: 28,
    color: Color.colorWhite,
    width: 310,
    height: 21,
  },
  groupChild: {
    marginLeft: -165,
    top: 21,
    backgroundColor: Color.colorWhite,
    height: 40,
    borderRadius: Border.br_4xs,
    width: 330,
    left: "50%",
    position: "absolute",
  },
  dmis: {
    marginLeft: -25,
    fontSize: FontSize.size_18xl_4,
    letterSpacing: -0.7,
    lineHeight: 82,
    width: 89,
    height: 60,
    top: 0,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorDarkorange_100,
  },
  groupItem: {
    top: 27,
    backgroundColor: Color.colorCrimson,
    left: 8,
    width: 27,
  },
  groupInner: {
    top: 37.5,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    height: 6,
    width: 27,
    position: "absolute",
  },
  rectangleView: {
    top: 38,
    backgroundColor: Color.colorGold,
    left: 8,
    width: 27,
  },
  groupChild1: {
    top: 48,
    backgroundColor: Color.colorSeagreen,
    left: 8,
    width: 27,
  },
  dmisParent: {
    marginLeft: -64,
    width: 128,
    left: "50%",
    position: "absolute",
  },
  rectangleParent: {
    marginLeft: -165.5,
    top: 40,
    height: 61,
    width: 330,
    left: "50%",
    position: "absolute",
  },
  pxCoatOfArmsOfGhana1Icon: {
    marginLeft: -60.5,
    top: 124,
    width: 121,
    height: 101,
  },
  groupChild2: {
    backgroundColor: Color.colorBlack,
    left: 0,
    borderRadius: Border.br_4xs,
    width: 39,
    top: 0,
  },
  vectorIcon: {
    height: "71.25%",
    width: "79.23%",
    top: "15%",
    right: "10.51%",
    bottom: "13.75%",
    left: "10.26%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleGroup: {
    top: 61,
    left: 31,
  },
  calling: {
    marginLeft: -40.5,
    top: 475,
    fontSize: FontSize.size_3xl_1,
    letterSpacing: -0.4,
    lineHeight: 39,
    color: Color.colorDimgray,
    width: 81,
    height: 35,
  },
  ghanaPoliceService: {
    marginLeft: -141.5,
    top: 502,
    fontSize: 31,
    letterSpacing: -0.6,
    lineHeight: 54,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    width: 293,
    height: 46,
  },
  callItem: {
    marginLeft: -45.5,
    top: 659,
    width: 91,
    height: 91,
  },
  callInner: {
    marginLeft: 96.5,
  },
  groupIcon: {
    marginLeft: -163.5,
  },
  ellipseIcon: {
    marginLeft: -87.5,
    top: 263,
    width: 175,
    height: 175,
  },
  callIcon: {
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Call;