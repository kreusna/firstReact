import React from "react";
import {
    YellowBox, AppRegistry
} from "react-native";


import { createBottomTabNavigator } from 'react-navigation'
import Icon from "react-native-vector-icons/FontAwesome"

// import Explore from "./Explore"
// import Inbox from "./Inbox"
import Save from "./Save"
import Home from "./Home"


YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
// class App extends Component {

//     render() {
//         return (
//             <View style = {styles.container} >
//                 <Text > Testing App </Text>
//             </View>
//         )
//     }
// }

export default createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: "Home",
            tabBarIcon: ({ tintColor }) => (<Icon name="search" color={tintColor} size={24} />)
        }
    },
    Saved: {
        screen: Save,
        navigationOptions: {
            tabBarLabel: "SAVE",
            tabBarIcon: ({ tintColor }) => (<Icon name="save" color={tintColor} size={24} />)
        }
    },
    // Trips: {
    //     screen: Trip,
    //     navigationOptions: {
    //         tabBarLabel: "TRIP",
    //         tabBarIcon: ({ tintColor }) => (<Icon name="globe" color={tintColor} size={24} />)
    //     }
    // },
    // Inbox: {
    //     screen: Inbox,
    //     navigationOptions: {
    //         tabBarLabel: "INBOX",
    //         tabBarIcon: ({ tintColor }) => (<Icon name="inbox" color={tintColor} size={24} />)
    //     }
    // }
},{
    tabBarOptions: {
        activeTintColor : "red",
        inactiveTintColor : "grey",
        style : {
            backgroundColor : 'white',
            borderTopWidth : 0,
            shadowOffset : {width : 5, height : 3},
            shadowColor : 'black',
            shadowOpacity : 0.5,
            elevation : 5
        }
    }
})

// const styles = StyleSheet.create({
//     container: {
//         flex:1,
//         backgroundColor: "#fff",
//         justifyContent : 'center',
//     }
// });

AppRegistry.registerComponent('testing123', () => createBottomTabNavigator);