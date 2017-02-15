import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { Button } from 'react-native-elements'
import Util from '../libs/Util'
import Enum from '../constants/Enums'

export default class CreateRestoreWallet extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    raised
                    icon={{ name: 'restore' }}
                    backgroundColor='#9B30EA'
                    title='RESTORE WALLET BY HD-SEED'
                    buttonStyle={styles.button}
                    onPress={() => { this.props._handleNavigate(Util.routeTo(Enum.SCREENS.RESTORE_WALLET)) }} />
                <Button
                    raised
                    icon={{ name: 'open-in-new' }}
                    backgroundColor='#8CC153'
                    title='CREATE NEW WALLET'
                    buttonStyle={styles.button}
                    onPress={() => { this.props._handleNavigate(Util.routeTo(Enum.SCREENS.CREATE_NEW_WALLET)) }} />
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