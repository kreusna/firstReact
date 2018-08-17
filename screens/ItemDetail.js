import React from 'react';
import { Text, View, SafeAreaView, Button,StyleSheet } from 'react-native';

export default class ItemDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    // componentDidMount() {
    //     return fetch('https://facebook.github.io/react-native/movies.json')
    //         .then((response) => response.json())
    //         .then((responseJson) => {

    //             this.setState({
    //                 isLoading: false,
    //                 dataSource: responseJson.movies,
    //             }, function () {

    //             });

    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }



    render() {

        return (
            <SafeAreaView style={{ flex: 1 }} >
                <View style={styles.backGroundView} >
                    <Text>Hello Item {this.props.navigation.getParam("itemId", " No Id")} </Text>
                </View>
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: 'center',
    },
    backGroundView: {
        flex: 1, 
        backgroundColor: "#f5f4f2"
    }
});