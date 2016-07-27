import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';

export default class PageThree extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
        filterData: this.props.filterData
    }
  }

  componentDidMount() {
    this.props.navigationState.state = this.state;
  }

  _handlePress() {
    this.setState({filterData: "Success Detail Message"});
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (JSON.stringify(this.state) !== JSON.stringify(nextState)) {
        this.props.navigationState.state = nextState;
    }
    return true;
  }

    render() {
      return (
        <View style={{margin: 128}}>
          <Text>Page Three</Text>
           <Button
            containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'green'}}
            style={{flex:1, fontSize: 20, color: '#FFF'}}
            onPress={() => this._handlePress()}>
            Value Change
           </Button>
        </View>
      )
    }
}
