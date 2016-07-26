import React from 'react';
import {PropTypes} from "react";
import {StyleSheet, Text, View} from "react-native";
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

const contextTypes = {
  drawer: React.PropTypes.object,
};

const propTypes = {
  name: PropTypes.string,
  sceneStyle: View.propTypes.style,
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#999',
  },
});

const ControlPanel = (props, context) => {
  const drawer = context.drawer;

  return (
    <View style={[styles.container]}>
      <Text>Drawer</Text>
      <Button onPress={() => { drawer.close(); Actions.pageTwo(); }}>PageTwo</Button>
      <Button onPress={() => { drawer.close(); Actions.pageThree(); }}>PageThree</Button>
    </View>
  );
};

ControlPanel.contextTypes = contextTypes;
ControlPanel.propTypes = propTypes;

export default ControlPanel;