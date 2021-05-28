import React from 'react';
import LottieView from 'react-native-web-lottie';

export default class SantaAnimation extends React.Component {
  render() {
    return (
      <LottieView
      source={require('../assets/13015-santa-claus.json')}
      style={{width:"70%"}}
      autoPlay loop />
    )
  }
}
