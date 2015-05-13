/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var LogInView = require('./LogInView');
var MainMenuView = require('./MainMenuView');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} = React;

var savage_app = React.createClass({
  render: function() {
    return (
      <NavigatorIOS style={styles.container}
        initialRoute={{
          title: 'Log In',
          component: LogInView
        }} 
        navigationBarHidden='true'/>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('savage_app', () => savage_app);
