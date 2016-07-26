import React, { PropTypes } from 'react';
import Drawer from 'react-native-drawer';
import { DefaultRenderer, Actions } from 'react-native-router-flux';

import ControlPanel from './ControlPanel';

const propTypes = {
  navigationState: PropTypes.object,
};

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.2, shadowRadius: 3},
  main: {paddingLeft: 3},
}

class NavigationDrawer extends React.Component {

  render() {
    const state = this.props.navigationState;
    const children = state.children;
    return (
        <Drawer
            ref="navigation"
            open={state.open}
            onOpen={()=>Actions.refresh({key:state.key, open: true})}
            onClose={()=>Actions.refresh({key:state.key, open: false})}
            type="overlay"
            content={<ControlPanel />}
            tapToClose={true}
            openDrawerOffset={0.2}
            panCloseMask={0.2}
            negotiatePan={true}

            tweenHandler={(ratio) => ({
             main: { opacity:Math.max(0.80,1-ratio) }
        })}>
            <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
        </Drawer>
    );
  }
}

NavigationDrawer.propTypes = propTypes;

export default NavigationDrawer;