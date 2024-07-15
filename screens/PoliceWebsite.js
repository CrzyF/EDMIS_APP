import * as React from "react";
import { useRef } from "react";
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";
import WebView from 'react-native-webview';

const PoliceWebsite = ({navigation}) => {

    const webURL = 'https://police.gov.gh/en/';

    const webViewRef = useRef(null);

    const enterFullscreen = () => {
      if (webViewRef.current) {
        webViewRef.current.injectJavaScript(`
          var element = document.documentElement;
          if(element.requestFullscreen) {
            element.requestFullscreen();
          } else if(element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
          } else if(element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
          } else if(element.msRequestFullscreen) {
            element.msRequestFullscreen();
          }
        `);
      }
    };


  return (
    <ImageBackground
      style={styles.webPreviewIcon}
      resizeMode="cover"
      source={require("../assets/homepage.png")}
    >

      <WebView source={{ uri: webURL }}
       style={styles.webPreviewChild}
      />

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
      <TouchableOpacity style={[styles.rectangleGroup, styles.groupLayout]} onPress={() => navigation.goBack()}>
        <View style={[styles.groupChild2, styles.groupLayout]} />
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector4.png")}
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
  webPreviewChild: {
    top: 224,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    width: "100%",
    height: 628,
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
    width: 350,
    height: 21,
    left: "48%",
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
    top:38,
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
    top: 0,
    width: 39,
    borderRadius: Border.br_4xs,
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
  webPreviewIcon: {
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default PoliceWebsite;