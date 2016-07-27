import React, { Component } from 'react';
import { Router, Scene, Actions,ActionConst, DefaultRenderer} from 'react-native-router-flux';
import Drawer from 'react-native-drawer';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import NavigationDrawer from './NavigationDrawer';
import ControlPanel from './ControlPanel';



export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
        loginMessage: ''
    }
  }
  _handlePress(event, type) {
    //Navigator title 변경
    //event.navigationState.children[0].rightTitle = "Search";
    var data = event.navigationState.children[0].state;
    this.setState({loginMessage: data.loginMessage});
    Actions.pageThree({type: ActionConst.PUSH, filterData: data.filterData});
  }

  _handlePressOnLeft(event, type) {
    //Drawer 상태 Toggle
    Actions.refresh({key: 'drawer', open: value => !value });
  }

  _handlePressPageThree(event, type) {
    //Navigatior의 state값을 가져와서 다른 View에 넘겨준다.
    var data = event.navigationState.children[0].state;
    Actions.pageTwo({type: ActionConst.BACK_ACTION, filterData: data.filterData, loginMessage:this.state.loginMessage});
  }

  render() {
    return (
     <Router>
        <Scene key="drawer" component={NavigationDrawer} open={false} >
          <Scene key="root">
             <Scene key="pageOne" component={PageOne} title="Login" initial={true} hideNavBar={true}/>
             <Scene key="pageTwo" component={PageTwo} title="Workitem" leftButtonImage={require("./menu_burger.png")} onLeft={(event) => this._handlePressOnLeft(event, "navigationDrawer")}
                rightTitle="Filter" onRight={(event) => this._handlePress(event, "pageTwo")} />
             <Scene key="pageThree" component={PageThree} title="Sprint" hideNavBar={false} rightTitle="Send" onRight={(event) => this._handlePressPageThree(event, "pageTwo")} />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

