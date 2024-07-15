import * as React from "react";
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Homepage = ({navigation}) => {
  return (
    <ImageBackground
      style={styles.homepageIcon}
      resizeMode="cover"
      source={require("../assets/homepage.png")}
    >
      <View style={styles.homepageChild} />
      <Text style={[styles.quickCall, styles.dmisTypo]}>Quick Call</Text>

      <TouchableOpacity style={[styles.rectangleParent, styles.groupParentLayout]} onPress={() => navigation.navigate("LiveStream")}>
        <View style={[styles.groupChild, styles.groupChildShadowBox]} />
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.hospital, styles.fireTypo]}>Hospital</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.rectangleGroup, styles.groupParentLayout]} onPress={() => navigation.navigate("LiveStream")}>
        <View style={[styles.groupItem, styles.groupChildShadowBox]} />
        <Text style={[styles.hospital, styles.fireTypo]}>Security</Text>
        <View style={[styles.groupInner, styles.firePosition]} />
        <Image
          style={[styles.vectorIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.rectangleContainer, styles.groupParentLayout]} onPress={() => navigation.navigate("LiveStream")}>
        <View style={[styles.rectangleView, styles.groupChildShadowBox]} />
        <Text style={[styles.fire, styles.firePosition]}>Fire</Text>
      </TouchableOpacity>
      <Image
        style={[styles.vectorIcon3, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />

      <TouchableOpacity style={[styles.groupView, styles.groupParentLayout]} onPress={() => navigation.navigate("LiveStream")}>
        <View style={[styles.groupChild1, styles.groupChildShadowBox]} />
        <Image
          style={[styles.vectorIcon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
        <Text style={[styles.disaster, styles.fireTypo]}>Disaster</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.rectangleParent1, styles.groupParentLayout]} onPress={() => navigation.navigate("LiveStream")}>
        <View style={[styles.groupChild2, styles.groupChildShadowBox]} />
        <Image
          style={[styles.groupIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
        <Text style={styles.terrorism}>Terrorism</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.rectangleParent2, styles.rectangleLayout]} onPress={() => navigation.navigate("Webapps")}>
        <Image
          style={[styles.rectangleIcon, styles.rectangleLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-48.png")}
        />
        <Text style={[styles.webApps, styles.webAppsTypo]}>Web Apps</Text>
      </TouchableOpacity>
      <View style={styles.image6} />
      <Text
        style={[styles.emergencyDisaster, styles.eGovTypo]}
      >{`Emergency & Disaster Management Information System `}</Text>
      <Text style={[styles.eGov, styles.eGovTypo]}>E-GOV</Text>
      <View style={[styles.rectangleParent3, styles.groupChild3Position]}>
        <View style={[styles.groupChild3, styles.groupChild3Position]} />
        <View style={[styles.dmisParent, styles.dmisLayout]}>
          <Text style={[styles.dmis, styles.dmisPosition]}>DMIS</Text>
          <View style={[styles.groupChild4, styles.groupChildLayout]} />
          <View style={[styles.groupChild5, styles.groupChildLayout]} />
          <View style={[styles.groupChild6, styles.groupChildLayout]} />
          <View style={[styles.groupChild7, styles.groupChildLayout]} />
        </View>
      </View>
      <Image
        style={[styles.pxCoatOfArmsOfGhana1Icon, styles.dmisPosition]}
        contentFit="cover"
        source={require("../assets/250pxcoat-of-arms-of-ghana-1.png")}
      />
      <TouchableOpacity style={[styles.rectangleParent4, styles.groupChild8Position]}>
        <Image
          style={[styles.groupChild8, styles.groupChild8Position]}
          contentFit="cover"
          source={require("../assets/rectangle-59.png")}
        />
        <Image
          style={[styles.groupChild9, styles.rectangleLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-48.png")}
        />
        <Text style={[styles.viewEvidence, styles.webAppsTypo]}>
          View Evidence
        </Text>
      </TouchableOpacity>
      
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  dmisTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  groupParentLayout: {
    height: 57,
    width: 63,
    top: 762,
    position: "absolute",
  },
  groupChildShadowBox: {
    borderRadius: 6,
    shadowOpacity: 1,
    elevation: 3.79,
    shadowRadius: 3.79,
    shadowOffset: {
      width: 0,
      height: 3.790055274963379,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhite,
    top: 0,
    height: 57,
    width: 63,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "visible",
  },
  fireTypo: {
    height: 16,
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    lineHeight: 17,
    letterSpacing: -0.2,
    fontSize: FontSize.size_2xs_8,
    top: 37,
    textAlign: "left",
  },
  firePosition: {
    left: 23,
    position: "absolute",
  },
  rectangleLayout: {
    height: 33,
    width: 323,
    position: "absolute",
  },
  webAppsTypo: {
    height: 30,
    color: Color.colorWhite,
    lineHeight: 31,
    fontSize: FontSize.size_2xl_4,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    letterSpacing: -0.4,
    left: "50%",
    position: "absolute",
  },
  eGovTypo: {
    height: 21,
    lineHeight: 28,
    fontSize: FontSize.size_smi_9,
    color: Color.colorWhite,
    letterSpacing: -0.2,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    left: "50%",
    position: "absolute",
  },
  groupChild3Position: {
    width: 330,
    left: "50%",
    position: "absolute",
  },
  dmisLayout: {
    height: 60,
    top: 0,
  },
  dmisPosition: {
    width: 89,
    left: "50%",
    position: "absolute",
  },
  groupChildLayout: {
    width: 27,
    height: 6,
    position: "absolute",
  },
  groupChild8Position: {
    height: 366,
    marginLeft: -161.5,
    width: 323,
    left: "50%",
    position: "absolute",
  },
  homepageChild: {
    top: 239,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    backgroundColor: "#f0f0f0",
    width: 393,
    height: 613,
    left: 0,
    position: "absolute",
  },
  quickCall: {
    marginLeft: -49.5,
    top: 716,
    fontSize: FontSize.size_3xl_1,
    lineHeight: 39,
    color: Color.colorDimgray,
    width: 98,
    height: 28,
    letterSpacing: -0.4,
    fontFamily: FontFamily.robotoRegular,
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorWhite,
  },
  vectorIcon: {
    height: "48.33%",
    top: "11.6%",
    right: "27.36%",
    left: "28.8%",
    bottom: "40.07%",
    maxWidth: "100%",
    width: "43.84%",
  },
  hospital: {
    left: 12,
    width: 40,
    height: 6,
    position: "absolute",
  },
  rectangleParent: {
    left: 31,
  },
  groupItem: {
    backgroundColor: Color.colorWhite,
  },
  groupInner: {
    top: 14,
    backgroundColor: "#d4b054",
    width: 16,
    height: 14,
  },
  vectorIcon1: {
    height: "46.57%",
    width: "42.4%",
    top: "13.36%",
    right: "28.96%",
    left: "28.64%",
    bottom: "40.07%",
    maxWidth: "100%",
  },
  rectangleGroup: {
    left: 101,
  },
  rectangleView: {
    backgroundColor: Color.colorWhite,
  },
  fire: {
    width: 20,
    height: 16,
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    lineHeight: 17,
    letterSpacing: -0.2,
    fontSize: FontSize.size_2xs_8,
    top: 38,
    textAlign: "left",
  },
  rectangleContainer: {
    left: 171,
  },
  groupChild1: {
    backgroundColor: Color.colorWhite,
  },
  vectorIcon2: {
    height: "41.65%",
    width: "48.48%",
    top: "18.28%",
    right: "26.4%",
    left: "25.12%",
    bottom: "40.07%",
    maxWidth: "100%",
  },
  disaster: {
    left: 13,
    width: 45,
    height: 6,
    position: "absolute",
  },
  groupView: {
    left: 241,
  },
  groupChild2: {
    backgroundColor: Color.colorWhite,
  },
  groupIcon: {
    height: "48.15%",
    top: "15.11%",
    right: "28.16%",
    bottom: "36.73%",
    left: "28%",
    width: "43.84%",
  },
  terrorism: {
    left: 8,
    width: 48,
    height: 15,
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    lineHeight: 17,
    letterSpacing: -0.2,
    fontSize: FontSize.size_2xs_8,
    top: 37,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent1: {
    left: 312,
  },
  vectorIcon3: {
    height: "3.11%",
    width: "6.01%",
    top: "90.26%",
    right: "45.39%",
    bottom: "6.63%",
    left: "48.6%",
  },
  rectangleIcon: {
    borderRadius: 8,
    top: 0,
    left: 0,
  },
  webApps: {
    marginLeft: -47.5,
    top: 1,
    width: 94,
  },
  rectangleParent2: {
    top: 248,
    left: 35,
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
    width: 310,
  },
  eGov: {
    marginLeft: -18.5,
    top: 204,
    width: 46,
  },
  groupChild3: {
    marginLeft: -165,
    top: 21,
    borderRadius: Border.br_4xs,
    height: 40,
    backgroundColor: Color.colorWhite,
  },
  dmis: {
    marginLeft: -25,
    fontSize: FontSize.size_18xl_4,
    letterSpacing: -0.7,
    lineHeight: 82,
    color: Color.colorDarkorange_100,
    height: 60,
    top: 0,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  groupChild4: {
    top: 27,
    backgroundColor: Color.colorCrimson,
    left: 8,
    width: 27,
  },
  groupChild5: {
    top: 37.5,
    backgroundColor: Color.colorBlack,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    left: -10,
  },
  groupChild6: {
    top: 38,
    backgroundColor: Color.colorGold,
    left: 8,
    width: 27,
  },
  groupChild7: {
    top: 48,
    backgroundColor: Color.colorSeagreen,
    left: 8,
    width: 27,
  },
  dmisParent: {
    marginLeft: -64,
    width: 128,
    left: "50%",
    height: 60,
    position: "absolute",
  },
  rectangleParent3: {
    marginLeft: -165.5,
    top: 40,
    height: 61,
  },
  pxCoatOfArmsOfGhana1Icon: {
    marginLeft: -44.5,
    top: 130,
    height: 74,
  },
  groupChild8: {
    borderRadius: Border.br_lg,
    top: 0,
  },
  groupChild9: {
    top: 333,
    borderBottomRightRadius: Border.br_lg,
    borderBottomLeftRadius: Border.br_lg,
    left: 0,
  },
  viewEvidence: {
    marginLeft: -66.5,
    top: 334,
    width: 132,
  },
  rectangleParent4: {
    top: 326,
  },
  homepageIcon: {
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Homepage;