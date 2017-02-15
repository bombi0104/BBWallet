import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { Button } from 'react-native-elements'

export default class CreateNewWallet extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    raised
                    icon={{ name: 'restore' }}
                    backgroundColor='#9B30EA'
                    title='RESTORE WALLET BY HD-SEED'
                    buttonStyle={styles.button} />
                <Button
                    raised
                    icon={{ name: 'open-in-new' }}
                    backgroundColor='#8CC153'
                    title='CREATE NEW WALLET'
                    buttonStyle={styles.button} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F2F2F2'
        // alignItems: 'center',
    },
    button: {
        marginTop: 20,
        height: 70
    }
})