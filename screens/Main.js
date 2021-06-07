import React,{Component} from 'react';
import { StyleSheet, Text, View,SafeAreaView,Platform,Image,TouchableOpacity,ScrollView } from 'react-native';

import {StatusBar} from 'expo-status-bar';
import * as FaceDetector from 'expo-face-detector';
import {Camera} from 'expo-camera';
import * as Permissions from 'expo-permissions';
import Filter1 from '../components/Filter1'
import Filter2 from '../components/Filter2'
import Filter3 from '../components/Filter3'
import Filter4 from '../components/Filter4'
import Filter5 from '../components/Filter5'
import Filter6 from '../components/Filter6'
import Filter7 from '../components/Filter7'
import Filter8 from '../components/Filter8'
import Filter9 from '../components/Filter9'
import Filter10 from '../components/Filter10'
import Filter11 from '../components/Filter11'
import Filter12 from '../components/Filter12'

let data = {
    "crown": [
        {
            "id": "crown-pic1",
            "image": require('../assets/crown-pic1.png')
        },
        {
            "id": "crown-pic2",
            "image": require('../assets/crown-pic2.png')
        },
        {
            "id": "crown-pic3",
            "image": require('../assets/crown-pic3.png')
        }
    ],
    "flower": [
        {
            "id": "flower-pic1",
            "image": require('../assets/flower-pic1.png')
        },
        {
            "id": "flower-pic2",
            "image": require('../assets/flower-pic2.png')
        },
        {
            "id": "flower-pic3",
            "image": require('../assets/flower-pic3.png')
        }
    ],
    "hair": [
        {
            "id": "hair-pic1",
            "image": require('../assets/hair-pic1.png')
        },
    ],
    "hat": [
        {
            "id": "hat-pic1",
            "image": require('../assets/hat-pic1.png')
        },
        {
            "id": "hat-pic2",
            "image": require('../assets/hat-pic2.png')
        }
    ],
    "other": [
        {
            "id": "other-pic1",
            "image": require('../assets/other-pic1.png')
        },
        {
            "id": "other-pic2",
            "image": require('../assets/other-pic2.png')
        },
        {
            "id": "other-pic3",
            "image": require('../assets/other-pic3.png')
        },
    ]
}


export default class MainScreen extends React.Component{
constructor(props){
        super(props)
        this.state = {
            hasCameraPermissions : null,
            faces : [],
            current_filter: "hat-pic1",
            selected: "hat"
        }
    }
    componentDidMount(){
        Permissions.askAsync(Permissions.CAMERA).then(this.onCameraPermission)
        }
        onCameraPermission = (status) =>{
            this.setState({
                hasCameraPermissions : status.status === "granted"
            })
        }
        onFacesDetected = (faces) => {
            this.setState({
                faces : faces
            })
        }
   
        onFaceDectectionError = (err) => {
            console.log(err)
        }
render(){
    const {hasCameraPermissions} = this.state;
    if(hasCameraPermissions == null){
        return <View/>
    }
    if(hasCameraPermissions == false){
        return(
            <View style = {styles.container}>
            <Text> You Have No Excess To The Camera</Text>
            </View>
        )
    }
return(
    <View style = {styles.middlecontainer}>
    <SafeAreaView style= {styles.droidSafeArea}/>
    <View style = {styles.upperContainer}>
    <Text style = {styles.titleText}>Look Me... </Text>
    </View>
    <View style = {styles.cameraStyle}>
    <Camera style = {{flex : 1}}type = {Camera.Constants.Type.front}
    faceDetectorSettings = {{
        mode : FaceDetector.Constants.Mode.fast,
        detectLandmarks : FaceDetector.Constants.Landmarks.all,
        runClassifications : FaceDetector.Constants.Classifications.all,
    }}
    onFacesDetected = {this.onFacesDetected}
    onFaceDetectionError = {this.onFaceDetectionError}
    />
  {
                        this.state.faces.map(face => {
                            if (this.state.current_filter === "filter_1") {
                                return <Filter1 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_2") {
                                return <Filter2 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_3") {
                                return <Filter3 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_4") {
                                return <Filter4 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_5") {
                                return <Filter5 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_6") {
                                return <Filter6 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_7") {
                                return <Filter7 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_8") {
                                return <Filter8 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_9") {
                                return <Filter9 key={face.faceID} face={face} />
                            } else if (this.state.current_filter === "filter_10") {
                                return <Filter10 key={face.faceID} face={face} />
                            }
                            else if (this.state.current_filter === "filter_11") {
                                return <Filter11 key={face.faceID} face={face} />
                            }
                            else if (this.state.current_filter === "filter_12") {
                                return <Filter12 key={face.faceID} face={face} />
                            }
                        })
                    }
    </View>
    <View style={styles.framesContainer}>
                    <View style={styles.categoryContainer}>
                        <TouchableOpacity style={this.state.selected == "crown" ? styles.categoryBoxSelected : styles.categoryBox} onPress={() => this.setState({ selected: `crown` })}>
                            <Text>Crown</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.selected == "flower" ? styles.categoryBoxSelected : styles.categoryBox} onPress={() => this.setState({ selected: `flower` })}>
                            <Text>Flower</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.selected == "hair" ? styles.categoryBoxSelected : styles.categoryBox} onPress={() => this.setState({ selected: `hair` })}>
                            <Text>Hair</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.selected == "hat" ? styles.categoryBoxSelected : styles.categoryBox} onPress={() => this.setState({ selected: `hat` })}>
                            <Text>Hat</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.selected == "other" ? styles.categoryBoxSelected : styles.categoryBox} onPress={() => this.setState({ selected: `other` })}>
                            <Text>Other</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={{ flexDirection: "row", flex: 0.6 }} horizontal showsHorizontalScrollIndicator={false}>
                        {
                            data[this.state.selected].map(filter_data => {
                                return (
                                    <TouchableOpacity style={styles.filterImageContainer} onPress={() => this.setState({ current_filter: `hat-pic1_${filter_data.id}` })}>
                                        <Image source={filter_data.image} style={{ height: 32, width: 80 }} />
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    headingContainer: {
        flex: 0.15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#6278e4"
    },
    titleText1: {
        fontSize: RFValue(30),
        fontWeight: "bold",
        color: "#efb141",
        fontStyle: 'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -3, height: 3 },
        textShadowRadius: 1
    },
    titleText2: {
        fontSize: RFValue(30),
        fontWeight: "bold",
        color: "white",
        fontStyle: 'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -3, height: 3 },
        textShadowRadius: 1
    },
    subheading1: {
        fontSize: RFValue(20),
        color: "#efb141",
        fontStyle: 'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -3, height: 3 },
        textShadowRadius: 1
    },
    subheading2: {
        fontSize: RFValue(20),
        color: "white",
        fontStyle: 'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -3, height: 3 },
        textShadowRadius: 1
    },
    cameraStyle: {
        flex: 0.65
    },
    framesContainer: {
        flex: 0.2,
        paddingLeft: RFValue(20),
        paddingRight: RFValue(20),
        paddingTop: RFValue(10),
        backgroundColor: "#6278e4"
    },
    filterImageContainer: {
        height: RFPercentage(8),
        width: RFPercentage(15),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e4e7f8",
        borderRadius: 30,
        marginRight: 20
    },
    categoryContainer: {
        flex: 0.4,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: RFValue(10)
    },
    categoryBox: {
        flex: 0.2,
        borderRadius: 30,
        borderWidth: 1,
        backgroundColor: "white",
        width: "100%",
        padding: RFValue(3),
        margin: 1,
        alignItems: "center"
    },
    categoryBoxSelected: {
        flex: 0.2,
        borderRadius: 30,
        borderWidth: 1,
        backgroundColor: "#efb141",
        width: "100%",
        padding: RFValue(3),
        margin: 1,
        alignItems: "center"
    }
});