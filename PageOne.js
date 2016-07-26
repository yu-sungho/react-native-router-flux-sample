import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { Actions,ActionConst } from 'react-native-router-flux';
import Button from 'react-native-button';

export default class PageOne extends Component {

  constructor(props, context) {
    super(props, context);
  }

 _handlePress() {
    Actions.pageTwo({type: ActionConst.REPLACE, text: 'Hello World11!'});
 }

 render() {

   return (
     <View style={{flexDirection:'column', flex:1, justifyContent: 'center', alignItems: 'center'}}>
       <Text style={{fontSize:50, paddingBottom:20}}>Login {this.props.text}</Text>
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
