import React, { Component } from "react";
import {
    SafeAreaView, View, TouchableOpacity, Text
} from "react-native";

import { RNCamera } from 'react-native-camera';
import Icon from "react-native-vector-icons/Ionicons"


export default class FaceDetect extends Component {

    takePicture = async () => {
        try {
            const data = await this.camera.takePictureAsync();
            console.log('Path to image: ' + data.uri);
        } catch (err) {
            // console.log('err: ', err);
        }
    };

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <RNCamera
                        ref={cam => {
                            this.camera = cam;
                        }}
                        style={styles.preview}
                    >
                        <View style={styles.captureContainer}>
                            <TouchableOpacity style={styles.capture} onPress={this.takePicture}>
                                <Icon name="ios-search" size={20}/>
                                <Text>Take Photo</Text>
                            </TouchableOpacity>
                        </View>
                    </RNCamera>

                    <View style={styles.space} />
                </View>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    }
});


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//         alignItems: "center",
//         justifyContent: 'center',
//     }
// });