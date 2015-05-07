'use strict';

var React = require('react-native');
var MainMenuView = require('./MainMenuView');

var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image
} = React;

var LogInView = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.title}> SAVAGE </Text>
          <TextInput style={styles.input} placeholder='Username'/>
          <TextInput style={styles.input} placeholder='Password'/>
          <TouchableHighlight onPress={this.logInPressed.bind(this)} style={styles.loginButton}
          underlayColor='rgb(0,235,76)'>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.createAccountButton}
          underlayColor='rgb(255,70,71)'>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  },

  logInPressed: function() {
    // debugger;
    this.props.navigator.replace({
      title: 'Main Menu',
      component: MainMenuView
    }); 
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'beige'
  },
  title: {
    fontSize: 80,
    textAlign: 'center',
    marginRight: 20,
    color: 'deepskyblue',
  },
  loginButton: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: 'rgb(0,255,99)',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  createAccountButton: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: 'rgb(255,99,71)',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  form: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    marginTop: 200
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
  },
  input: {
    height: 50,
    padding: 8,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'lightgrey',
    color: '#48BBEC'
  }
});

module.exports = LogInView;