import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { Button } from 'react-native-elements'
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import Util from '../../libs/Util'
import Enum from '../../constants/Enums'

export default class Wallet extends Component {
    render() {
        return (
            // <View style={styles.container}>
            <ScrollableTabView
                style={styles.tabView}
                initialPage={1}
                renderTabBar={() => <ScrollableTabBar />} >
                <Text tabLabel='Send'>My</Text>
                <Text tabLabel='Activity'>favorite</Text>
                <Text tabLabel='Receive'>project</Text>
            </ScrollableTabView>
            // </View>
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
    tabView: {
        // marginTop: 20,
        // backgroundColor: 'blue'
    }
})