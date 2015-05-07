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

var MainMenuView = React.createClass({
  render: function() {
    
    console.log('rendered')
    return (
    <View style={styles.container}>
      <Text style={styles.name}>
        Hello
      </Text>
    </View>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  name: {
    fontSize: 18,
    color: 'black'
  }
});

module.exports = MainMenuView;