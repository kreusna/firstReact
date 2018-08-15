import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class SwichExample extends Component {
    state = {
        initialPosition: 'unknown',
        lastPosition: 'unknown',
    }
    watchID: ?number = null;

    componentDidMount = () => {
        console.log("test=============111");
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log("test=============");
                const initialPosition = JSON.stringify(position);
                this.setState({ initialPosition });
            },
            (error) => alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 3600000 }
        );
        this.watchID = navigator.geolocation.watchPosition((position) => {
            const lastPosition = JSON.stringify(position);
            this.setState({ lastPosition });
        });
    }
    componentWillUnmount = () => {
        navigator.geolocation.clearWatch(this.watchID);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.boldText}>
                    Initial position:
                </Text>

                <Text>
                    {this.state.initialPosition}
                </Text>

                <Text style={styles.boldText}>
                    Current position:
                </Text>

                <Text>
                    {this.state.lastPosition}
                </Text>
            </View>
        )
    }
}
export default SwichExample

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50
    },
    boldText: {
        fontSize: 30,
        color: 'red',
    }
})