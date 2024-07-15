import * as React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const EvidenceSubmission = ({navigation, route}) => {

const { capturedImage, date, time, location } = route.params;

  return (
    <ImageBackground
      style={styles.evidencesubmissionIcon}
      resizeMode="cover"
      source={require("../assets/homepage.png")}
    >
      <View style={styles.evidencesubmissionChild} />
      <View style={styles.image6} />
      <Text
        style={[styles.emergencyDisaster, styles.dmisTypo]}
      >{`Emergency & Disaster Management Information System `}</Text>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <View style={[styles.dmisParent, styles.dmisPosition]}>
          <Text style={[styles.dmis, styles.dmisPosition]}>DMIS</Text>
          <View style={[styles.groupItem, styles.groupLayout1]} />
          <View style={[styles.groupInner, styles.groupBg]} />
          <View style={[styles.rectangleView, styles.groupLayout1]} />
          <View style={[styles.groupChild1, styles.groupLayout1]} />
        </View>
      </View>
      <Image
        style={[
          styles.pxCoatOfArmsOfGhana1Icon,
          styles.emergencyDisasterPosition,
        ]}
        contentFit="cover"
        source={require("../assets/250pxcoat-of-arms-of-ghana-1.png")}
      />
      <TouchableOpacity onPress={() => navigation.goBack()}>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupChild2, styles.groupLayout]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.push('Call')}>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <Image
          style={[styles.rectangleIcon, styles.rectangleLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-48.png")}
        />
        <Text
          style={[styles.submitInitiate, styles.submitInitiateTypo]}
        >{`Next`}</Text>
      </View>
      </TouchableOpacity>

      <Image 
      source={{ uri: capturedImage  }} 
      style={styles.screenshot20240106At207}/>

      <Text style={styles.march1}>{time}</Text>

      <Text style={styles.march2}>{date}</Text>

      <Text style={styles.march3}>{location}</Text>

      <Text style={[styles.evidenceSubmission, styles.submitInitiateTypo1]}>
        Evidence Submission
      </Text>

      <TouchableOpacity style={[styles.evidencesubmissionItem, styles.vectorIconLayout]} >

      <Image
        style={{ transform: [{ scale: 0.35 }] }}
        contentFit="cover"
        source={require("../assets/group-4906.png")}
      />

    </TouchableOpacity>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  dmisTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  dmisPosition: {
    height: 60,
    top: 0,
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
    left: -15,
  },
  emergencyDisasterPosition: {
    left: "50%",
    position: "absolute",
  },
  groupLayout: {
    width: 39,
    height: 40,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "visible",
  },
  rectangleLayout: {
    height: 33,
    width: 330,
    position: "absolute",
  },
  submitInitiateTypo: {
    letterSpacing: -0.4,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    left: "79%",
    position: "absolute",
  },
  submitInitiateTypo1: {
    letterSpacing: -0.4,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    left: "53%",
    position: "absolute",
  },
  evidencesubmissionChild: {
    top: 224,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    backgroundColor: "#fffdfd",
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
    width: 310,
    height: 21,
    color: Color.colorWhite,
    left: "50%",
    position: "absolute",
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
    color: Color.colorDarkorange_100,
    width: 89,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  groupItem: {
    top: 27,
    backgroundColor: Color.colorCrimson,
    left: 8,
    width: 27,
  },
  groupInner: {
    top: 38,
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
  },
  rectangleParent: {
    top: 40,
    height: 61,
    width: 330,
    marginLeft: -165.5,
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
    top: 0,
    borderRadius: Border.br_4xs,
    width: 39,
  },
  vectorIcon: {
    height: "71.25%",
    width: "79.23%",
    top: "15%",
    right: "10.51%",
    bottom: "13.75%",
    left: "10.26%",
  },
  rectangleGroup: {
    top: 61,
    left: 31,
  },
  rectangleIcon: {
    borderRadius: 8,
    top: 0,
    left: '6%',
  },
  submitInitiate: {
    marginLeft: -95,
    top: 1,
    fontSize: FontSize.size_2xl_4,
    lineHeight: 30,
    width: 189,
    height: 35,
    color: Color.colorWhite,
  },
  rectangleContainer: {
    top: 779,
    left: 31,
  },
  screenshot20240106At207: {
    top: 284,
    borderRadius: Border.br_11xl,
    width: 332,
    height: 473,
    marginLeft: -165.5,
    left: "50%",
    position: "absolute",
  },
  evidenceSubmission: {
    marginLeft: -102.5,
    top: 236,
    fontSize: FontSize.size_3xl_1,
    lineHeight: 35,
    color: Color.colorDimgray,
    width: 205,
    height: 26,
  },
  evidencesubmissionItem: {
    height: "4.34%",
    width: "9.41%",
    top: "25%",
    right: "8.14%",
    bottom: "63.73%",
    left: "74%",
  },
  evidencesubmissionIcon: {
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
  march1: {
    top: 690,
    left: 60,
    fontSize: FontSize.size_mini_5,
    lineHeight: 14,
    fontWeight: "300",
    fontFamily: FontFamily.robotoLight,
    width: 267,
    height: 17,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  march2: {
    top: 704,
    left: 60,
    fontSize: FontSize.size_mini_5,
    lineHeight: 14,
    fontWeight: "300",
    fontFamily: FontFamily.robotoLight,
    width: 367,
    height: 17,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  march3: {
    top: 718,
    left: 60,
    fontSize: FontSize.size_mini_5,
    lineHeight: 14,
    fontWeight: "300",
    fontFamily: FontFamily.robotoLight,
    width: 367,
    height: 37,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
});

export default EvidenceSubmission;