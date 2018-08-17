import React, { Component } from "react";
import {
    View,
    SafeAreaView, Platform, StatusBar, ScrollView,
    TextInput, Text, Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"

// import Category from './component/Explore/Category'
import ExHome from './component/Explore/Home'


// import { createBottomTabNavigator } from 'react-navigation'

const { width } = Dimensions.get('window');

export default class Explore extends Component {

    startHeaderHeight = 60

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }} >
                <View style={{ flex: 1 , backgroundColor:"#f5f4f2" }} >
                    <View style={{ height: Platform.OS == "android" ? 40 + StatusBar.currentHeight : this.startHeaderHeight, backgroundColor: "white", borderBottomWidth: 1, borderBottomColor: "#dddddd" }}>
                        <View style={{
                            flexDirection: 'row', padding: 5, backgroundColor: 'white', marginHorizontal: 5,
                            shadowOffset: { width: 0, height: 0 },
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            elevation: 1,
                            height: 43,
                            marginBottom: 10,
                            marginTop: Platform.OS == "android" ? 5 : null
                        }} >
                            <Icon name="ios-search" size={20} style={{ marginRight: 10, marginTop: 10 }} />
                            <TextInput placeholder="Try New Search" placeholderTextColor='grey'
                                underlineColorAndroid='transparent'
                                style={{
                                    height: 35,
                                    flex: 1,
                                    fontWeight: '700',
                                    backgroundColor: 'white'
                                }} />

                        </View>
                    </View>

                    <ScrollView scrollEventThrottle={16}  >

                        <View style={{ marginTop: 10 }} >
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }} >
                                Home around the world
                            </Text>
                            <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }} >
                                <ExHome width={width} type="asdfasdfdsfdsf" name="adsfasdfsd" price="50$" rating={3} itemId={1} navigation={this.props.navigation} />
                                <ExHome width={width} type="asdfasdfdsfdsf" name="adsfasdfsd" price="50$" rating={4} itemId={2} navigation={this.props.navigation} />
                                <ExHome width={width} type="asdfasdfdsfdsf" name="adsfasdfsd" price="50$" rating={4} itemId={3} navigation={this.props.navigation} />
                                <ExHome width={width} type="asdfasdfdsfdsf" name="adsfasdfsd" price="50$" rating={3} itemId={4} navigation={this.props.navigation} />
                                <ExHome width={width} type="asdfasdfdsfdsf" name="adsfasdfsd" price="50$" rating={4} itemId={5} navigation={this.props.navigation}/>
                                <ExHome width={width} type="asdfasdfdsfdsf" name="adsfasdfsd" price="50$" rating={4} itemId={6} navigation={this.props.navigation} />
                                <ExHome width={width} type="asdfasdfdsfdsf" name="adsfasdfsd" price="50$" rating={3} itemId={7} navigation={this.props.navigation} />
                                <ExHome width={width} type="asdfasdfdsfdsf" name="adsfasdfsd" price="50$" rating={4} itemId={8} navigation={this.props.navigation} />
                                <ExHome width={width} type="asdfasdfdsfdsf" name="adsfasdfsd" price="50$" rating={4} itemId={9} navigation={this.props.navigation} />
                                <ExHome width={width} type="asdfasdfdsfdsf" name="adsfasdfsd" price="50$" rating={3} itemId={10} navigation={this.props.navigation} />
                                <ExHome width={width} type="asdfasdfdsfdsf" name="adsfasdfsd" price="50$" rating={4} itemId={11} navigation={this.props.navigation} />
                                <ExHome width={width} type="asdfasdfdsfdsf" name="adsfasdfsd" price="50$" rating={4} itemId={12} navigation={this.props.navigation} />
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