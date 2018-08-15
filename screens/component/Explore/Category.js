import React, { Component } from "react";
import {
    View,
    Text,
    Image
} from "react-native";


// import { createBottomTabNavigator } from 'react-navigation'



export default class Category extends Component {

    render() {
        return (
            <View style={{ height: 130, width: 130, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }} >
                <View style={{ flex: 2 }} >
                    <Image source={this.props.imageUrl} style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} />
                </View>
                <View>
                    <Text>
                        {this.props.name}
                    </Text>
                    
                </View>

            </View>
        )
    }
}


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//         alignItems: "center",
//         justifyContent: 'center',
//     }
// });

