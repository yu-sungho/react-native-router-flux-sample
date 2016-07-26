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
  }
  _handlePress(event, type) {
    //Navigator title 변경
    event.navigationState.children[0].rightTitle = "Search";
    Actions.pageTwo({type: ActionConst.REFRESH, text:"Hello PageTwo"});
  }

  _handlePressOnLeft(event, type) {
    //Drawer 상태 Toggle
    Actions.refresh({key: 'drawer', open: value => !value });
  }

  render() {
    return (
     <Router>
        <Scene key="drawer" component={NavigationDrawer} open={false} >
          <Scene key="root">
             <Scene key="pageOne" component={PageOne} title="Login" initial={true} hideNavBar={true}/>
             <Scene key="pageTwo" component={PageTwo} title="Workitem" leftButtonImage={require("./menu_burger.png")} onLeft={(event) => this._handlePressOnLeft(event, "navigationDrawer")}
                rightTitle="login" onRight={(event) => this._handlePress(event, "pageTwo")} />
             <Scene key="pageThree" component={PageThree} title="Sprint" hideNavBar={false}/>
          </Scene>
        </Scene>
      </Router>
    )
  }
}

