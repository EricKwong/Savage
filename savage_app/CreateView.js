'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image
} = React;

var CreateView = React.createClass({
  getInitialState: function() {
    return {
      firstName: null,
      lastName: null,
      username: null,
      password: null,
      passwordConfirmation: null
    }
  },

  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.title}>Create an Account</Text>
          <TextInput style={styles.input} onChange={this.firstNameTextChange} placeholder='First name'/>
          <TextInput style={styles.input} onChange={this.lastNameTextChange} placeholder='Last name'/>
          <TextInput style={styles.input} onChange={this.usernameTextChange} placeholder='Username'/>
          <TextInput secureTextEntry={true} style={styles.input} onChange={this.passwordTextChange} placeholder='Password'/>
          <TextInput secureTextEntry={true} style={styles.input} onChange={this.passwordConfirmationTextChange} placeholder='Password Confirmation'/>
          <TouchableHighlight onPress={this.submitPressed} style={styles.submitButton}
              underlayColor='rgb(255,70,71)'>
              <Text style={styles.submitText}>Submit</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  },

  firstNameTextChange: function(event) {
    this.setState({firstName: event.nativeEvent.text});
  },

  lastNameTextChange: function(event) {
    this.setState({lastName: event.nativeEvent.text});
  },

  usernameTextChange: function(event) {
    this.setState({username: event.nativeEvent.text});
  },

  passwordTextChange: function(event) {
    this.setState({password: event.nativeEvent.text});
  },

  passwordConfirmationTextChange: function(event) {
    this.setState({passwordConfirmation: event.nativeEvent.text});
  },

  createQuery: function() {
    return 'first_name=' + this.state.firstName + '&last_name=' + this.state.lastName +
      '&username=' + this.state.username + '&password=' + this.state.password + '&password_confirmation=' + this.state.passwordConfirmation
  },

  submitPressed: function() {
    var self = this;
    fetch('http://localhost:3000/players', {
      method: 'POST',
      body: this.createQuery()
    }).then(function(response) {
      self.props.navigator.pop();
    })
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ivory'
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 20
  },
  input: {
    height: 50,
    padding: 8,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'lightgrey',
    color: '#48BBEC'
  },
  submitButton: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: 'rgb(255,99,71)',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  submitText: {
    color: 'snow',
    fontSize: 24,
    alignSelf: 'center'
  },
  form: {
    marginTop: 150
  }
});

module.exports = CreateView;