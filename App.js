import React, { Component } from 'react';
import LoginView from './src/LoginView';
import HomeView from './src/HomeView';
import { Actions, Scene, Router } from 'react-native-router-flux';

const scenes = Actions.create(
  <scene key="root">
    <scene key="login" component={LoginView} hideNavBar />
    <scene key="home" component={HomeView} hideNavBar />
  </scene>
);

export default class App extends Component<Props> {
  render() {
    return <Router scenes={scenes} />
  }
}
