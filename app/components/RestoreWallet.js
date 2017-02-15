import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native'
import { Button } from 'react-native-elements'
import Util from '../libs/Util'
import Enum from '../constants/Enums'

export default class RestoreWallet extends Component {
    render() {
        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss() }>
                <View style={styles.container}>
                    <TextInput
                        multiline={true}
                        placeholder='Input Passphases'
                        style={styles.inputPassphases} />
                    <Button
                        raised
                        icon={{ name: 'restore' }}
                        backgroundColor='#9B30EA'
                        title='RESTORE WALLET'
                        buttonStyle={styles.button}
                        onPress={() => { this.props._handleNavigate(Util.routeTo(Enum.SCREENS.WALLET)) }} />
                </View>
            </TouchableWithoutFeedback>
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
    },
    inputPassphases: {
        height: 120,
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        fontSize: 18,
        backgroundColor: '#F0F4C3'
    }
})