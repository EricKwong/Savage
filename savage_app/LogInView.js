'use strict';

var React = require('react-native');
var MainMenuView = require('./MainMenuView');
var CreateView = require('./CreateView');

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
  getInitialState: function() {
    return {
      username: null,
      password: null,
    }
  },
  usernameTextChange: function(event) {
    this.setState({username: event.nativeEvent.text});
    console.log(this.state.username)
  },
  passwordTextChange: function(event) {
    this.setState({password: event.nativeEvent.text});
    console.log(this.state.password)
  },
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.title}> SAVAGE </Text>
          <TextInput style={styles.input} onChange={this.usernameTextChange} placeholder='Username'/>
          <TextInput secureTextEntry={true} style={styles.input} onChange={this.passwordTextChange} placeholder='Password'/>
          <TouchableHighlight onPress={this.logInPressed} style={styles.loginButton}
          underlayColor='rgb(0,235,76)'>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.createPressed} style={styles.createAccountButton}
          underlayColor='rgb(255,70,71)'>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  },

  loginQuery: function() {
    return 'username=' + this.state.username +
      '&password=' + this.state.password;
  },

  logInPressed: function() {
    var self = this;
    fetch('http://localhost:3000/sessions', {
      method: 'POST',
      body: this.loginQuery()
    }).then(function(response) {
      response.json().then(function(json) {
        json.currentLon = null;
        json.currentLat = null;
        if (response.status.toString().substr(0,1) === "2") {
          self.props.navigator.replace({
            title: 'Main Menu',
            component: MainMenuView,
            passProps: json
          }); 
        }
      });
    });   
  },

  createPressed: function() {
    this.props.navigator.push({
      title: 'Create',
      component: CreateView
    })
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'ivory',
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