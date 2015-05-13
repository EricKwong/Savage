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

var StatsView = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.back}>
          <TouchableHighlight onPress={this.goBack} style={styles.backButton}
            underlayColor='rgb(255,120,0)'>
            <Text style={styles.backText}>&#60;</Text>
          </TouchableHighlight>
          <Text style={styles.title}>Stats</Text>
        </View>
        <View style={styles.seperator}/>
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
        <View style={styles.statsDetails}>
          <Text style={styles.stats}>
            GOLD: {this.props.gold}
          </Text>
          <Text style={styles.stats}>
            ATTACK: {this.props.attack}
          </Text>
          <Text style={styles.stats}>
            DEFENSE: {this.props.defense}
          </Text>
          <Text style={styles.stats}>
            STEPS: {this.props.steps}
          </Text>
        </View>
      </View>
    )
  },
  goBack: function() {
    this.props.navigator.pop()
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ivory',
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    marginLeft: 90,
  },
  info: {
    flexDirection: 'row',
    padding: 30
  },
  statsDetails: {
    marginLeft: 30
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
  stats: {
    fontSize: 30,
    marginBottom: 10
  },
  back:{
    marginTop: 30,
    marginBottom: 5,
    flexDirection: 'row'
  },
  backText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'snow',
    flex: 1,
    alignSelf: 'center',
  },
  backButton: {
    height: 30,
    width: 45,
    borderRadius: 12,
    padding: 2,
    margin: 10,
    backgroundColor: 'rgb(255,150,0)'
  },
  seperator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
});

module.exports = StatsView;
