import React from 'react';
import { FlatList, ActivityIndicator, Image, View, Dimensions, StyleSheet } from 'react-native';


import Lightbox from 'react-native-lightbox';
import Carousel from 'react-native-looped-carousel';

export default class FetchExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    componentDidMount() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.movies,
                }, function () {

                });

            })
            .catch((error) => {
                console.error(error);
            });
    }



    render() {
        // this.props.navigation.navigate("Trips")
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }

        return (
            <View style={{ flex: 1, paddingTop: 20 }}>
                <Lightbox underlayColor="white" swipeToDismiss={true} >
                    <Image
                        style={{ width: 400, height: 400 }}
                        resizeMode="contain"
                        source={{ uri: 'https://www.yayomg.com/wp-content/uploads/2014/04/yayomg-pig-wearing-party-hat.jpg' }}
                    />
                </Lightbox>
                <Lightbox springConfig={{ tension: 50, friction: 20 }} swipeToDismiss={true} renderContent={renderCarousel}>
                    <Image
                        style={styles.carousel}
                        resizeMode="contain"
                        source={{ uri: 'https://www.yayomg.com/wp-content/uploads/2014/04/yayomg-pig-wearing-party-hat.jpg' }}
                    />
                </Lightbox>
            </View>
        );
    }
}
const renderCarousel = () => (

    <Image
        style={{ flex:1 }}
        resizeMode="contain"
        source={{ uri: 'https://www.yayomg.com/wp-content/uploads/2014/04/yayomg-pig-wearing-party-hat.jpg' }}
    />

)

const WINDOW_WIDTH = Dimensions.get('window').width;
const BASE_PADDING = 10;
const styles = StyleSheet.create({

    closeButton: {
        color: 'white',
        borderWidth: 1,
        borderColor: 'white',
        padding: 8,
        borderRadius: 3,
        textAlign: 'center',
        margin: 10,
        alignSelf: 'flex-end',
    },
    customHeaderBox: {
        height: 150,
        backgroundColor: '#6C7A89',
        justifyContent: 'center',
        alignItems: 'center',
    },

    col: {
        flex: 1,
    },

    squareFirst: {
        backgroundColor: '#C0392B',
    },
    squareSecond: {
        backgroundColor: '#019875',
    },
    squareText: {
        textAlign: 'center',
        color: 'white',
    },
    carousel: {
        height: 50,
        width: 50,
        backgroundColor: 'white',
    },
    contain: {
        flex: 1,
        height: 150,
    },

});