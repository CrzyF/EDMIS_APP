import * as React from "react";
import { StyleSheet, View, Text, ImageBackground, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const AddContact = ({navigation}) => {

  const handlePress = () => {
    Alert.alert(
      'Sending Evidence To:',
      'Public Utilities Regulatory Commission',
      [
        {
          text: 'Cancel',
        },
        {
          text: 'Proceed',
          onPress: () => followup(), // You can define a function here for "Proceed" action
        },
      ],
      { cancelable: false }
    );
  };

  const followup = () => {
    Alert.alert(
      'Evidence Sent Successfully',
      'Call Institution?',
      [
        {
          text: 'No',
        },
        {
          text: 'Yes',
          onPress : () => navigation.navigate("Call"), // You can define a function here for "Proceed" action
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <ImageBackground
      style={styles.addcontactIcon}
      resizeMode="cover"
      source={require("../assets/homepage.png")}
    >
      <View style={styles.addcontactChild} />
      <View style={styles.image6} />
      <Text
        style={[styles.emergencyDisaster, styles.dmisTypo]}
      >{`Emergency & Disaster Management Information System `}</Text>
      <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
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
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupChild2, styles.groupLayout]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
      </View>

      <TouchableOpacity style={[styles.rectangleContainer, styles.rectangleParentLayout]}>
        <Image
          style={[styles.rectangleIcon, styles.rectangleIconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-48.png")}
        />
        <Text style={[styles.next, styles.nextTypo]}>Next</Text>
      </TouchableOpacity>

      <Text style={[styles.selectInstitutionMda, styles.nextTypo]}>
        Select Institution (MDA)
      </Text>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
      <View style={[styles.addcontactItem, styles.rectangleIconLayout]} />
      <TextInput 
        style={styles.searchInstitution}
        placeholder="Search Institution ... "
      />
      <View
        style={[
          styles.publicUtilitiesRegulatoryCoParent,
          styles.rectangleParentLayout,
        ]}
      >

      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.publicUtilitiesRegulatory}>
          Public Utilities Regulatory Commission.
        </Text>
      </TouchableOpacity>

        <Image
          style={[styles.lineIcon, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line-1.png")}
        />

        <Image
          style={[styles.groupChild3, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line-1.png")}
        />
        <Image
          style={[styles.lineIcon, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line-1.png")}
        />
        <Image
          style={[styles.groupChild3, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line-1.png")}
        />
        <Text style={[styles.ghanaDistricts, styles.ghanaTypo]}>
          Ghana Districts.
        </Text>
        <Image
          style={[styles.groupChild6,styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line-1.png")}
        />
        <Text style={[styles.nationalCommunicationsAuthor, styles.ghanaTypo]}>
          National Communications Authority
        </Text>
        <Image
          style={[styles.groupChild7, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line-1.png")}
        />
        <Text style={[styles.ghanaInstituteOf, styles.ghanaTypo]}>
          Ghana Institute of Management and Public
        </Text>
        <Image
          style={[styles.groupChild8, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line-1.png")}
        />
        <Text
          style={[styles.nationalDevelopmentPlanning, styles.nationalLayout]}
        >
          National Development Planning Commission.
        </Text>
        <Image
          style={[styles.groupChild9, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line-1.png")}
        />
        <Text style={[styles.nationalCommissionOn, styles.nationalLayout]}>
          National Commission on Culture
        </Text>
        <Image
          style={[styles.groupChild10, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line-1.png")}
        />
        <Text style={[styles.ghanaPoliceService, styles.ghanaLayout]}>
          Ghana Police Service
        </Text>
        <Image
          style={[styles.groupChild11, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line-1.png")}
        />
        <Text style={[styles.nationalAmbulanceService, styles.ghanaLayout]}>
          National Ambulance Service
        </Text>
        <Image
          style={[styles.groupChild12, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line-1.png")}
        />
        <Text style={[styles.ghanaNationalFire, styles.ghanaLayout]}>
          Ghana National Fire Service
        </Text>
        <Image
          style={[styles.groupChild13, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line-1.png")}
        />
        <Text style={[styles.nadmoGhana, styles.ghanaTypo]}>Nadmo Ghana</Text>
        <Image
          style={[styles.groupChild14, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line-1.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector8.png")}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  dmisTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  rectangleParentLayout: {
    width: 330,
    position: "absolute",
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
    left: -10,
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
    overflow: "hidden",
  },
  rectangleIconLayout: {
    borderRadius: 8,
    width: 330,
    position: "absolute",
  },
  nextTypo: {
    letterSpacing: -0.4,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    left: "50%",
    position: "absolute",
  },
  lineIconLayout: {
    height: 1,
    width: 330,
    left: 0,
    position: "absolute",
  },
  ghanaTypo: {
    height: 27,
    color: Color.colorBlack,
    lineHeight: 21,
    fontSize: FontSize.size_base_6,
    letterSpacing: -0.3,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    left: 0,
    position: "absolute",
  },
  groupChildLayout: {
    height: 11,
    width: 330,
    left: 0,
    position: "absolute",
  },
  nationalLayout: {
    width: 315,
    height: 27,
    color: Color.colorBlack,
    lineHeight: 21,
    fontSize: FontSize.size_base_6,
    letterSpacing: -0.3,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    left: 0,
    position: "absolute",
  },
  ghanaLayout: {
    width: 204,
    height: 27,
    color: Color.colorBlack,
    lineHeight: 21,
    fontSize: FontSize.size_base_6,
    letterSpacing: -0.3,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    left: 0,
    position: "absolute",
  },
  addcontactChild: {
    top: 224,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    backgroundColor: Color.colorGray,
    width: 393,
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
    color: Color.colorDarkorange_200,
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
    backgroundColor: Color.colorGold,
    top: 38,
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
    marginLeft: -165.5,
    left: "50%",
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
    height: 33,
    top: 0,
    left: 0,
  },
  next: {
    marginLeft: -22,
    top: 1,
    fontSize: FontSize.size_2xl_4,
    lineHeight: 31,
    width: 43,
    height: 32,
    color: Color.colorWhite,
  },
  rectangleContainer: {
    top: 779,
    height: 33,
    left: 31,
  },
  selectInstitutionMda: {
    marginLeft: -112.5,
    fontSize: FontSize.size_3xl_1,
    lineHeight: 39,
    color: Color.colorDimgray,
    width: 225,
    height: 36,
    top: 236,
  },
  vectorIcon1: {
    height: "1.64%",
    width: "3.56%",
    top: "34.27%",
    right: "85.75%",
    bottom: "64.08%",
    left: "10.69%",
  },
  addcontactItem: {
    top: 284,
    borderStyle: "solid",
    borderColor: Color.colorDarkorange_200,
    borderWidth: 2,
    height: 30,
    marginLeft: -165.5,
    left: "50%",
  },
  searchInstitution: {
    top: 291,
    left: 84,
    fontSize: 14,
    lineHeight: 18,
    color: "#d9d9d9",
    width: 267,
    height: 17,
    letterSpacing: -0.3,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    position: "absolute",
  },
  publicUtilitiesRegulatory: {
    top: 8,
    width: 274,
    height: 26,
    color: Color.colorBlack,
    lineHeight: 21,
    fontSize: FontSize.size_base_6,
    letterSpacing: -0.3,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    left: 0,
    position: "absolute",
  },
  lineIcon: {
    top: 0,
  },
  groupChild3: {
    top: 38,
  },
  ghanaDistricts: {
    top: 46,
    width: 261,
  },
  groupChild6: {
    top: 76,
  },
  nationalCommunicationsAuthor: {
    top: 86,
    width: 248,
  },
  groupChild7: {
    top: 116,
  },
  ghanaInstituteOf: {
    top: 126,
    width: 298,
  },
  groupChild8: {
    top: 156,
  },
  nationalDevelopmentPlanning: {
    top: 166,
  },
  groupChild9: {
    top: 196,
  },
  nationalCommissionOn: {
    top: 206,
  },
  groupChild10: {
    top: 236,
  },
  ghanaPoliceService: {
    top: 246,
  },
  groupChild11: {
    top: 276,
  },
  nationalAmbulanceService: {
    top: 286,
  },
  groupChild12: {
    top: 316,
  },
  ghanaNationalFire: {
    top: 326,
  },
  groupChild13: {
    top: 356,
  },
  nadmoGhana: {
    top: 366,
    width: 106,
  },
  groupChild14: {
    top: 396,
  },
  vectorIcon2: {
    height: "3.68%",
    width: "4.55%",
    top: "2.95%",
    right: "3.03%",
    bottom: "93.37%",
    left: "92.42%",
  },
  publicUtilitiesRegulatoryCoParent: {
    top: 337,
    height: 407,
    left: 31,
  },
  addcontactIcon: {
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default AddContact;