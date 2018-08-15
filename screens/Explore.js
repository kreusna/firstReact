import React, { Component } from "react";
import {
    View,
    SafeAreaView, Platform, StatusBar, ScrollView, Image,
    TextInput, Text, Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"

import Category from './component/Explore/Category'
import ExHome from './component/Explore/Home'


// import { createBottomTabNavigator } from 'react-navigation'

const { width } = Dimensions.get('window');

export default class Explore extends Component {
    
    startHeaderHeight = 60 

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }} >
                <View style={{ flex: 1 }} >
                    <View style={{ height: Platform.OS == "android"? 40 + StatusBar.currentHeight :this.startHeaderHeight, backgroundColor: "white", borderBottomWidth: 1, borderBottomColor: "#dddddd" }}>
                        <View style={{
                            flexDirection: 'row', padding: 5, backgroundColor: 'white', marginHorizontal: 5,
                            shadowOffset: { width: 0, height: 0 },
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            elevation: 1,
                            height : 43,
                            marginBottom : 10,
                            marginTop: Platform.OS == "android" ? 5 : null
                        }} >
                            <Icon name="ios-search" size={20} style={{ marginRight: 10, marginTop: 10 }} />
                            <TextInput placeholder="Try New Search" placeholderTextColor='grey'
                                underlineColorAndroid='transparent'
                                style={{ height:35,
                                    flex: 1,
                                    fontWeight: '700',
                                    backgroundColor: 'white'
                                }} />

                        </View>
                    </View>
                    <ScrollView scrollEventThrottle={16}  >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }} >
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }} >
                                What do you want to find ?
                            </Text>
                            <View style={{ height: 130, marginTop: 20 }} >
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                                    <Category imageUrl={require('../src/assets/home.jpg')} name="Home" />
                                    <Category imageUrl={require('../src/assets/home.jpg')} name="Home" />
                                    <Category imageUrl={require('../src/assets/home.jpg')} name="Home" />
                                </ScrollView>
                            </View>

                            <View style={{ marginTop: 40, paddingHorizontal: 20 }} >
                                <Text style={{ fontSize: 24, fontWeight: '700' }} >
                                    Introducing To First Page
                                </Text>
                                <Text style={{ fontWeight: '100', marginTop: 10 }} >
                                    Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
                                </Text>
                                <View style={{ width: width - 40, height: 200, marginTop: 20 }} >
                                    <Image style={{
                                        flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd'
                                    }} source={require('../src/assets/home.jpg')} />

                                </View>

                            </View>

                        </View>
                        <View style={{ marginTop: 40 }} >
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }} >
                                Home around the world
                            </Text>
                            <View style={{ paddingHorizontal: 20, marginTop: 20 , flexDirection : "row", flexWrap : "wrap", justifyContent : "space-between" }} >
                                <ExHome width = {width} type = "asdfasdfdsfdsf" name = "adsfasdfsd" price = "50$" rating = {3} />
                                <ExHome width = {width} type = "asdfasdfdsfdsf" name = "adsfasdfsd" price = "50$" rating = {4} />
                                <ExHome width = {width} type = "asdfasdfdsfdsf" name = "adsfasdfsd" price = "50$" rating = {4} />
                            </View>
                        </View>

                    </ScrollView>
                </View>
            </SafeAreaView>
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