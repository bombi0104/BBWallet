import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import Button from './common/BBButton'

const route = {
    type: 'push',
    route: {
        key: 'about',
        title: 'About'
    }
}

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Home</Text>
                <Button onPress={() => this.props._handleNavigate(route)} label='Go To About' />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        marginBottom: 20,
        fontSize: 22,
        textAlign: 'center'
    },
    container: {
        paddingTop: 60
    }
})