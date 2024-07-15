import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../../GlobalStyles";
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';
import axios from 'axios';
import { launchCamera } from 'react-native-image-picker';

const Stream = ({navigation}) => {

    const [capturedImage, setCapturedImage] = useState(null);

    const handleCaptureImage = async () => {
      if (cameraRef.current) {
        const options = {
          mediaType: 'photo',
          quality: 1,
        };
    
        launchCamera(options, (response) => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else {
            setCapturedImage(response.uri);
          }
        });
      }
    };
    

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [locationAddress, setLocationAddress] = useState('');

    const cameraRef = useRef(null);
    const [isCameraReady, setIsCameraReady] = useState(false);

    useEffect(() => {
        (async () => {
          const { status } = await Camera.requestCameraPermissionsAsync();
          if (status === 'granted') {
            setIsCameraReady(true);
          } else {
            Alert.alert('Permission Denied', 'Please grant camera permission to use the scanner.');
          }
        })();
      }, []);
  
      useEffect(() => {
        (async () => {
          if (!Location) {
            console.error('Location is not available. Make sure expo-location is installed.');
            return;
          }
    
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          try {
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
    
            // Make reverse geocoding request
            const response = await axios.get(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coords.latitude},${location.coords.longitude}&key=AIzaSyBVySLCyfP7xyn8Zz2ntOiuMFaZWSk-9Uo`
            );
    
            if (response.data.results.length > 0) {
              const address = response.data.results[0].formatted_address;
              setLocationAddress(address);
            }
          } catch (error) {
            console.error('Error getting location:', error);
            setErrorMsg('Error getting location');
          }
        })();
      }, []);


    const dateToWords = (date) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
      };


  return (

     <Camera
        ref={cameraRef}
        style={styles.liveStreamIcon}
        type={Camera.Constants.Type.back}
        flashMode={Camera.Constants.FlashMode.off}
        onCameraReady={() => setIsCameraReady(true)}>

{capturedImage && (
  <Image
    source={{ uri: capturedImage }}
    style={{ width: 100, height: 100 }}
  />
)}



      <TouchableOpacity onPress={() => navigation.goBack()}>
      <View style={styles.image6} />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
      </View>
      </TouchableOpacity>

     {location ? (
        <>
          <Text style={styles.march820231}>
          {dateToWords(new Date(location.timestamp))}
          </Text>
          <Text style={styles.march82023}>
          {locationAddress}
          </Text>
        </>
      ) : (
        <Text style={styles.march82023}>Loading location...</Text>
      )}

      <TouchableOpacity>

      <Image
        style={styles.liveStreamChild}
        contentFit="cover"
        source={require("../assets/ellipse-32.png")}
      />

      </TouchableOpacity>

      <TouchableOpacity style={[styles.groupIcon, styles.iconLayout]}>

      <Image
        contentFit="cover"
        source={require("../assets/flipcamera.png")}
      />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.vectorIcon1, styles.iconLayout]} onPress={handleCaptureImage}>

      <Image
        style={{ transform: [{ scale: 0.35 }] }}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      </TouchableOpacity>

      <Text style={[styles.video, styles.liveTypo]}>VIDEO</Text>
      <Text style={[styles.live, styles.liveTypo]}>LIVE</Text>
      <Text style={[styles.photo, styles.liveTypo]}>PHOTO</Text>

      </Camera>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 40,
    width: 39,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "visible",
  },
  liveTypo: {
    top: 706,
    height: 12,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    lineHeight: 14,
    fontSize: FontSize.size_mini_5,
    position: "absolute",
  },
  image6: {
    top: 107,
    left: 135,
    width: 219,
    height: 13,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_4xs,
    backgroundColor: Color.colorBlack,
  },
  vectorIcon: {
    height: "71.25%",
    width: "79.23%",
    top: "15%",
    right: "10.51%",
    bottom: "13.75%",
    left: "10.26%",
  },
  rectangleParent: {
    top: 61,
    left: 31,
  },
  march82023: {
    top: 635,
    left: 50,
    width: 270,
    height: 72,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    lineHeight: 24,
    fontSize: FontSize.size_mini_5,
    position: "absolute",
  },
  march820231: {
    top: 605,
    left: 50,
    width: 270,
    height: 72,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    lineHeight: 24,
    fontSize: FontSize.size_mini_5,
    position: "absolute",
  },
  liveStreamChild: {
    top: 736,
    left: 165,
    width: 63,
    height: 64,
    position: "absolute",
  },
  groupIcon: {
    height: "4.21%",
    width: "10.43%",
    top: "88%",
    right: "23.16%",
    bottom: "7.76%",
    left: "70%",
  },
  vectorIcon1: {
    height: "2.82%",
    width: "3.05%",
    top: "5.5%",
    right: "47.07%",
    bottom: "89.08%",
    left: "45.87%",
  },
  video: {
    left: 99,
    width: 42,
  },
  live: {
    left: 267,
    width: 29,
  },
  photo: {
    left: 183,
    width: 50,
  },
  liveStreamIcon: {
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Stream;