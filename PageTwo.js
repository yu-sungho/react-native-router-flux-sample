import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

export default class PageTwo extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
        pageTwoData : 'test'
    }
  }

  componentDidMount() {
    this.props.navigationState.state = this.state;
  }

  _handlePress() {

  }

    render() {
      return (
        <View style={{margin: 128}}>
          <Text>{this.props.text}</Text>
           <Button
            containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'green'}}
            style={{flex:1, fontSize: 20, color: '#FFF'}}
            onPress={() => this._handlePress()}>
            Login Button
           </Button>
        </View>
      )
    }
}
