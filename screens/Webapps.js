import * as React from "react";
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Webapps = ({navigation}) => {
  return (
    <ImageBackground
      style={styles.homepageIcon}
      resizeMode="cover"
      source={require("../assets/homepage.png")}
    >
      <View style={styles.homepageChild} />
      <Text style={[styles.emergencyCalls, styles.emergencyCallsLayout2]}>
        Emergency Calls
      </Text>

      <View style={styles.groupParent}>

       <TouchableOpacity onPress={() => navigation.navigate("PoliceWebsite")}>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-4869.png")}
        />
        </TouchableOpacity>

        <View style={styles.rectangleParent}>
          <TouchableOpacity onPress={() => navigation.navigate("AmbulanceWebsite")}>
          <Image
            style={[styles.groupInner, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-32.png")}
          />
          </TouchableOpacity>

        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>

        <TouchableOpacity onPress={() => navigation.navigate("FireServiceWebsite")}>

          <Image
            style={[styles.rectangleIcon, styles.rectangleLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-31.png")}
          />

       </TouchableOpacity>

        </View>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>

        <TouchableOpacity onPress={() => navigation.navigate("NadmoWebsite")}>

          <Image
            style={[styles.rectangleIcon, styles.rectangleLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-311.png")}
          />
          </TouchableOpacity>

        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("LiveStream")}>

      <View style={[styles.groupView, styles.rectangleParentLayout]}>
        <View style={styles.groupChildShadowBox} />
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.hospital, styles.fireTypo]}>Hospital</Text>
      </View>

      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("LiveStream")}>
      <View style={[styles.rectangleParent1, styles.rectangleParentLayout]}>
        <View style={styles.groupChildShadowBox} />
        <Text style={[styles.hospital, styles.fireTypo]}>Security</Text>
        <View style={[styles.groupChild5, styles.firePosition]} />
        <Image
          style={[styles.vectorIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("LiveStream")}>

      <View style={[styles.rectangleParent2, styles.rectangleParentLayout]}>
        <View style={styles.groupChildShadowBox} />
        <Text style={[styles.fire, styles.firePosition]}>Fire</Text>

        <Image
        style={{ transform: [{ scale: 0.30 }], top: "-30%", left: '20%' }}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />

      </View>

     </TouchableOpacity>


      <TouchableOpacity onPress={() => navigation.navigate("LiveStream")}>


      <View style={[styles.rectangleParent3, styles.rectangleParentLayout]}>
        <View style={styles.groupChildShadowBox} />
        <Image
          style={[styles.vectorIcon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
        <Text style={[styles.disaster, styles.fireTypo]}>Disaster</Text>
      </View>

      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("LiveStream")}>
      <View style={[styles.rectangleParent4, styles.rectangleParentLayout]}>
        <View style={styles.groupChildShadowBox} />
        <Image
          style={[styles.groupIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
        <Text style={styles.terrorism}>Terrorism</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity>

      <View style={[styles.rectangleParent5, styles.groupChild9Layout]}>
        <Image
          style={[styles.groupChild9, styles.groupChild9Layout]}
          contentFit="cover"
          source={require("../assets/rectangle-48.png")}
        />
        <Text style={[styles.emergencyAlarm, styles.emergencyTypo]}>
          Emergency Alarm
        </Text>
        <Image
          style={[
            styles.emojioneMonotoneloudspeakerIcon,
            styles.emergencyCallsLayout,
          ]}
          contentFit="cover"
          source={require("../assets/emojionemonotoneloudspeaker.png")}
        />
      </View>

      </TouchableOpacity>

      <View style={styles.image6} />
      <Text
        style={[styles.emergencyDisaster, styles.emergencyTypo]}
      >{`Emergency & Disaster Management Information System `}</Text>
      <View style={[styles.rectangleParent6, styles.groupChild10Position]}>
        <View style={[styles.groupChild10, styles.groupChild10Position]} />
        <View style={[styles.dmisParent, styles.dmisPosition]}>
          <Text style={[styles.dmis, styles.dmisPosition]}>DMIS</Text>
          <View style={[styles.groupChild11, styles.groupChildLayout]} />
          <View style={[styles.groupChild12, styles.groupChildLayout]} />
          <View style={[styles.groupChild13, styles.groupChildLayout]} />
          <View style={[styles.groupChild14, styles.groupChildLayout]} />
        </View>
      </View>

      <TouchableOpacity>
      <Image
        style={styles.pxCoatOfArmsOfGhana1Icon}
        contentFit="cover"
        source={require("../assets/250pxcoat-of-arms-of-ghana-1.png")}
      />
      </TouchableOpacity>
      
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  emergencyCallsLayout: {
    height: 28,
    position: "absolute",
  },
  emergencyCallsLayout2: {
    height: 38,
    position: "absolute",
  },
  groupLayout: {
    height: 137,
    width: 146,
    position: "absolute",
  },
  groupPosition: {
    borderRadius: 8,
    top: 0,
    left: 0,
  },
  rectangleLayout: {
    height: 143,
    width: 146,
    position: "absolute",
  },
  rectangleParentLayout: {
    height: 57,
    width: 63,
    top: 700,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "visible",
  },
  fireTypo: {
    height: 13,
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    lineHeight: 10,
    letterSpacing: -0.2,
    fontSize: FontSize.size_2xs_8,
    top: 44,
    textAlign: "left",
  },
  firePosition: {
    left: '60%',
    position: "absolute",
  },
  groupChild9Layout: {
    height: 33,
    width: "92%",
    position: "absolute",
  },
  emergencyTypo: {
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    left: "50%",
    position: "absolute",
  },
  groupChild10Position: {
    width: 330,
    left: "50%",
    position: "absolute",
  },
  dmisPosition: {
    height: 60,
    top: 0,
    left: "50%",
    position: "absolute",
  },
  groupChildLayout: {
    width: 27,
    height: 6,
    position: "absolute",
  },
  textPosition: {
    lineHeight: 26,
    textAlign: "left",
    left: "52%",
    position: "absolute",
  },
  homepageChild: {
    top: 224,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    backgroundColor: "#f0f0f0",
    width: "100%",
    height: 628,
    left: 0,
    position: "absolute",
  },
  emergencyCalls: {
    marginLeft: -77.5,
    top: 654,
    fontSize: 22,
    lineHeight: 39,
    color: "#627076",
    width: 158,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    letterSpacing: -0.4,
    left: "50%",
  },
  groupChild: {
    top: 0,
    width: 146,
    left: 0,
  },
  groupItem: {
    backgroundColor: "transparent",
    height: 137,
    width: 146,
    position: "absolute",
  },
  groupInner: {
    height: 137,
    width: 146,
    position: "absolute",
  },
  rectangleParent: {
    shadowOpacity: 1,
    elevation: 5.4,
    shadowRadius: 5.4,
    shadowOffset: {
      width: 0,
      height: 5.4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 177,
    height: 137,
    width: 146,
    top: 0,
    position: "absolute",
  },
  rectangleIcon: {
    borderRadius: 8,
    top: 0,
    left: 0,
  },
  rectangleGroup: {
    top: 159,
    height: 143,
    shadowOpacity: 1,
    elevation: 5.4,
    shadowRadius: 5.4,
    shadowOffset: {
      width: 0,
      height: 5.4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 177,
  },
  rectangleContainer: {
    top: 159,
    height: 143,
    shadowOpacity: 1,
    elevation: 5.4,
    shadowRadius: 5.4,
    shadowOffset: {
      width: 0,
      height: 5.4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
  },
  groupParent: {
    top: 319,
    height: 302,
    width: 323,
    left: "13%",
    position: "absolute",
  },
  groupChildShadowBox: {
    elevation: 3.79,
    shadowRadius: 3.79,
    borderRadius: 6,
    backgroundColor: Color.colorWhite,
    height: 57,
    width: 63,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5.4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 0,
    left: "25%",
    position: "absolute",
  },
  vectorIcon: {
    height: "48.33%",
    top: "11.6%",
    right: "27.36%",
    left: "54%",
    bottom: "40.07%",
    maxWidth: "100%",
    width: "43.84%",
  },
  hospital: {
    left: '40%',
    width: 50,
    height: 16,
    position: "absolute",
    overflow: "visible"
  },
  groupView: {
    left: 31,
  },
  groupChild5: {
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
    left: "54%",
    bottom: "40.07%",
    maxWidth: "100%",
  },
  rectangleParent1: {
    left: 101,
  },
  fire: {
    width: 35,
    height: 14,
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    lineHeight: 10,
    letterSpacing: -0.2,
    fontSize: FontSize.size_2xs_8,
    top: 44,
    textAlign: "left",
  },
  rectangleParent2: {
    left: 171,
  },
  vectorIcon2: {
    height: "41.65%",
    width: "48.48%",
    top: "18.28%",
    right: "26.4%",
    left: "50%",
    bottom: "40.07%",
    maxWidth: "100%",
  },
  disaster: {
    left: "45%",
    width: 40,
    height: 16,
    position: "absolute",
  },
  rectangleParent3: {
    left: 241,
  },
  groupIcon: {
    height: "48.15%",
    top: "15.11%",
    right: "28.16%",
    bottom: "36.73%",
    left: "50%",
    width: "43.84%",
  },
  terrorism: {
    left: '35%',
    width: 48,
    height: 15,
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    lineHeight: 10,
    fontSize: FontSize.size_2xs_8,
    top: 44,
    letterSpacing: -0.2,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent4: {
    left: 312,
  },
  vectorIcon3: {
    height: "3.11%",
    width: "6.01%",
    top: "79.98%",
    right: "45.39%",
    bottom: "13.91%",
    left: "42.5%",
  },
  groupChild9: {
    borderRadius: 8,
    top: 0,
    left: 0,
  },
  emergencyAlarm: {
    marginLeft: -99.5,
    top: 1,
    fontSize: 21,
    lineHeight: 31,
    width: 162,
    height: 32,
    letterSpacing: -0.4,
  },
  emojioneMonotoneloudspeakerIcon: {
    top: 3,
    left: '65%',
    width: 28,
    overflow: "hidden",
  },
  rectangleParent5: {
    top: 248,
    left: 35,
    height: 33,
  },
  image6: {
    top: 107,
    left: 135,
    width: 219,
    height: 13,
    position: "absolute",
  },
  emergencyDisaster: {
    marginLeft: -164,
    top: 100,
    fontSize: 13,
    lineHeight: 28,
    width: 350,
    height: 21,
    letterSpacing: -0.2,
    color: Color.colorWhite,
  },
  groupChild10: {
    marginLeft: -165,
    top: 21,
    borderRadius: 9,
    height: 40,
    backgroundColor: Color.colorWhite,
    width: 330,
  },
  dmis: {
    marginLeft: -25,
    fontSize: 37,
    letterSpacing: -0.7,
    lineHeight: 82,
    color: "#f79520",
    width: 89,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  groupChild11: {
    top: 27,
    backgroundColor: "#ce1126",
    left: 8,
    width: 27,
  },
  groupChild12: {
    top: 37.5,
    backgroundColor: Color.colorBlack,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    left: -10,
  },
  groupChild13: {
    top: 38,
    backgroundColor: "#fcd116",
    left: 8,
    width: 27,
  },
  groupChild14: {
    top: 48,
    backgroundColor: "#006b3f",
    left: 8,
    width: 27,
  },
  dmisParent: {
    marginLeft: -64,
    width: 128,
  },
  rectangleParent6: {
    marginLeft: -165.5,
    top: 40,
    height: 61,
  },
  pxCoatOfArmsOfGhana1Icon: {
    marginLeft: -61.5,
    top: 134,
    width: 121,
    height: 101,
    left: "50%",
    position: "absolute",
  },
  text: {
    height: "2.35%",
    marginLeft: -19.5,
    top: "92.84%",
    fontSize: 16,
    width: 39,
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 26,
  },
  text1: {
    marginLeft: -66.5,
    top: "95.16%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    color: "#fe8502",
    width: 132,
  },
  homepageIcon: {
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Webapps;