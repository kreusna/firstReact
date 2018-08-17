import React, { Component } from "react";
import {
    View,
    Text,
    Image, TouchableHighlight
} from "react-native";
import StarRating from 'react-native-star-rating'

// import { createBottomTabNavigator } from 'react-navigation'



export default class Category extends Component {

    changePage = ()=>{
        this.props.navigation.navigate('ItemDetail', {itemId:this.props.itemId})
    }

    render() {
        return (
            <TouchableHighlight onPress={ this.changePage }>
                <View style={{ marginBottom: 10, width: this.props.width / 2 - 30, height: 250, borderWidth: 1, borderRadius: 2, borderColor: "#515559" }} >
                    <View style={{ flex: 1 }} >
                        <Image style={{
                            flex: 1, height: null, width: null, resizeMode: 'cover'
                        }} source={require('../../../src/assets/home.jpg')} />
                    </View>
                    <View style={{ backgroundColor:"#ffffff", flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10 }} >
                        <Text style={{ fontSize: 10, color: '#b63838', }} >
                            {this.props.type}
                        </Text>
                        <Text style={{ fontSize: 12, fontWeight: 'bold' }} >{this.props.name}
                        </Text>
                        <Text style={{ fontSize: 10 }} >{this.props.price}
                        </Text>
                        <StarRating disable={true} maxStars={5} rating={this.props.rating} starSize={10} >

                        </StarRating>
                    </View>
                </View>
            </TouchableHighlight>
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

