'use strict';

var React = require('react-native');
var StatsView = require('./StatsView');

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
    return (
    <View style={styles.container}>
      <View style={styles.info}>
        <View>
          <Image source={require('image!mario')} style={styles.image}/>
        </View>
        <View>
          <Text style={styles.username}>
            {this.props.username}
          </Text>
          <Text style={styles.level}>
            Level {this.props.level}
          </Text>
          <Text style={styles.health}>
            HP: {this.props.hp}/{this.props.max_health}
          </Text>
          <Text style={styles.exp}>
            EXP: {this.props.exp}
          </Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableHighlight style={styles.button}
            underlayColor='rgb(255,120,0)'>
          <Text style={styles.buttonText}>BATTLE</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}
            underlayColor='rgb(255,120,0)'>
          <Text style={styles.buttonText}>ITEMS</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}
            underlayColor='rgb(255,120,0)'>
          <Text style={styles.buttonText}>SHOP</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}
            underlayColor='rgb(255,120,0)'>
          <Text style={styles.buttonText}>MAP</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.statsPressed} style={styles.button}
            underlayColor='rgb(255,120,0)'>
          <Text style={styles.buttonText}>STATS</Text>
        </TouchableHighlight>
      </View>
    </View>
    )
  },

  statsPressed: function() {
    this.props.navigator.push({
      title: 'Stats',
      component: StatsView,
      passProps: this.props
    });
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ivory',
    padding: 30
  },
  info: {
    flexDirection: 'row',
    marginBottom: 40
  },
  username: {
    fontSize: 30,
    color: 'black',
  },
  level: {
    fontSize: 25,
    color: 'black',
  },
  health: {
    fontSize: 18,
    color: 'black',
  },
  exp: {
    fontSize: 18,
    color: 'skyblue'
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 30
  },
  buttonsContainer: {
    flexDirection: 'column'
  },
  button: {
    flex: 1,
    height: 70,
    backgroundColor: 'rgb(255,150,0)',
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 0,
    marginBottom: 20
  },
  buttonText: {
    fontSize: 32,
    textAlign: 'center',
    color: 'snow'
  }
});

module.exports = MainMenuView;