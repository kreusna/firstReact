import React from 'react'
import {
    View,
    Switch,
    StyleSheet
} from 'react-native'

let SwitchExample = function(propss) {
    return (
        <View style={styles.container}>
            <Switch
                onValueChange={propss.toggleSwitch1}
                value={propss.switch1Value} />
            
        </View>
    )
}

export default SwitchExample
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 100
    }
})