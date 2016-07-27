import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import Button from 'react-native-button';

export default class PageTwo extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
        loginMessage : this.props.loginMessage,
        filterData: this.props.filterData,
    }
  }

  componentDidMount() {
    this.props.navigationState.state = this.state;
  }

  _handlePress() {
    Actions.pageThree({type: ActionConst.PUSH, filterData:this.state.filterData});
  }

    render() {
      return (
        <View style={{margin: 128}}>
          <Text style={{fontSize:20}}>{this.props.loginMessage}</Text>
          <Button
            containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'green'}}
            style={{flex:1, fontSize: 20, color: '#FFF'}}
            onPress={() => this._handlePress()}>
            Go Detail View
           </Button>
           <Text style={{fontSize:20}}>{this.props.filterData}</Text>
        </View>
      )
    }
}
