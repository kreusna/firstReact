import React from "react";
import {
    YellowBox
} from "react-native";


import { createStackNavigator } from 'react-navigation'
import Icon from "react-native-vector-icons/FontAwesome"

import Explore from "./screens/Explore"
import Inbox from "./screens/Inbox"
import Save from "./screens/Save"
import Trip from "./screens/Trips"
import HomeMenu from './screens/HomeMenu';
import ItemDetail from './screens/ItemDetail'


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

export default createStackNavigator({
    Explore: {
        screen: Explore,
        navigationOptions: {
            tabBarLabel: "EXPLORE",
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
    Trips: {
        screen: Trip,
        navigationOptions: {
            tabBarLabel: "TRIP",
            tabBarIcon: ({ tintColor }) => (<Icon name="globe" color={tintColor} size={24} />)
        }
    },
    Inbox: {
        screen: Inbox,
        navigationOptions: {
            tabBarLabel: "INBOX",
            tabBarIcon: ({ tintColor }) => (<Icon name="inbox" color={tintColor} size={24} />)
        }
    },
    HomeMenu: {
        screen: HomeMenu,
    },
    ItemDetail: {
        screen: ItemDetail,
    }
},{
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
        gesturesEnabled: false,
    },
    initialRouteName: 'HomeMenu',
})

// const styles = StyleSheet.create({
//     container: {
//         flex:1,
//         backgroundColor: "#fff",
//         justifyContent : 'center',
//     }
// });
