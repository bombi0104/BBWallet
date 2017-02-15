import React, { Component } from 'react'
import Enums from '../constants/Enums'
import Home from './Home'
import About from './About'
import CreateRestoreWallet from './CreateRestoreWallet'
import CreateNewWallet from './CreateNewWallet'
import RestoreWallet from './RestoreWallet'

import {
  BackAndroid,
  NavigationExperimental
} from 'react-native'

const {
  CardStack: NavigationCardStack,
  Header: NavigationHeader
} = NavigationExperimental

class NavRoot extends Component {
  constructor(props) {
    super(props)
    this._renderScene = this._renderScene.bind(this)
    this._handleBackAction = this._handleBackAction.bind(this)
  }
  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this._handleBackAction)
  }
  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this._handleBackAction)
  }
  _renderScene(props) {
    const { route } = props.scene
    if (route.key === 'home') {
      return <Home
        _handleNavigate={this._handleNavigate.bind(this)} />
    }
    else if (route.key === 'about') {
      return <About _goBack={this._handleBackAction.bind(this)} />
    }
    else if (route.key === Enums.SCREENS.CREATE_RESTORE_WALLET) {
      return <CreateRestoreWallet
        _goBack={this._handleBackAction.bind(this)}
        _handleNavigate={this._handleNavigate.bind(this)} />
    }
    else if (route.key === Enums.SCREENS.CREATE_NEW_WALLET) {
      return <CreateNewWallet
        _goBack={this._handleBackAction.bind(this)}
        _handleNavigate={this._handleNavigate.bind(this)} />
    }
    else if (route.key === Enums.SCREENS.RESTORE_WALLET) {
      return <RestoreWallet
        _goBack={this._handleBackAction.bind(this)}
        _handleNavigate={this._handleNavigate.bind(this)} />
    }
  }
  _handleBackAction() {
    if (this.props.navigation.index === 0) {
      return false
    }
    this.props.popRoute()
    return true
  }
  _handleNavigate(action) {
    switch (action && action.type) {
      case 'push':
        this.props.pushRoute(action.route)
        return true
      case 'back':
      case 'pop':
        return this._handleBackAction()
      default:
        return false
    }
  }
  render() {
    return (
      <NavigationCardStack
        /*direction='vertical'*/
        navigationState={this.props.navigation}
        onNavigate={this._handleNavigate.bind(this)}
        renderScene={this._renderScene}
        renderHeader={props => (
          <NavigationHeader
            {...props}
            onNavigateBack={this._handleBackAction}
            renderTitleComponent={props => {
              const title = props.scene.route.title
              return <NavigationHeader.Title>{title}</NavigationHeader.Title>
            }}
          // When dealing with modals you may also want to override renderLeftComponent...
          />
        )} />
    )
  }
}

export default NavRoot