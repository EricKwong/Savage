'use strict';

var React = require('react-native');
var StatsView = require('./StatsView');
var BattleMenuView = require('./BattleMenuView');

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
  getInitialState: function() {
    return {
      initialPosition: null,
      lastPosition: null,
      playerHp: this.props.hp
    }
  },
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
        <TouchableHighlight onPress={this.battlePressed} style={styles.button}
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
  },

  battlePressed: function() {
    var url = 'http://localhost:3000/players/' + this.props.id + '/monsters';
    var self = this;
    fetch(url)
      .then(response => response.json())
      .then(function(json) {
        self.props.monsters = json;
        self.props.navigator.push({
          title: 'Battle',
          component: BattleMenuView,
          passProps: self.props
        })
      }); 
  },
  componentDidMount: function() { 
    // var self = this;
    // setInterval(function() {
    //   navigator.geolocation.getCurrentPosition(function(location) {
    //     var lat = location.coords.latitude;
    //     var lon = location.coords.longitude;
 
    //     var latKm = lat * (10000/90);
    //     var lonKm = lon * (10000/90);

    //     var latFeet = Math.round(latKm * 3280.4);
    //     var lonFeet = Math.round(lonKm * 3280.4);
        
    //     var steps = 0;
    //     var lonDiff = Math.abs(self.props.currentLon) - Math.abs(lonFeet);
    //     var latDiff = Math.abs(self.props.currentLat) - Math.abs(latFeet);
    //     if (Math.abs(lonDiff) > 0) {
    //       steps += Math.abs(lonDiff);
    //     }

    //     if (Math.abs(latDiff) > 0) {
    //       steps += Math.abs(latDiff);
    //     }

    //     if (steps < 200) {
    //       self.props.steps += steps;
    //     }
    //     console.log(Math.abs(latFeet), Math.abs(lonFeet))
    //     console.log(Math.abs(lonDiff), Math.abs(latDiff), self.props.steps)

    //     self.props.currentLon = lonFeet;
    //     self.props.currentLat = latFeet;
    //   });
    // }, 5000); 
    navigator.geolocation.watchPosition((position) => {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;

      var latKm = lat * (10000/90);
      var lonKm = lon * (10000/90);

      var latFeet = Math.round(latKm * 3280.4);
      var lonFeet = Math.round(lonKm * 3280.4);

      var steps = 0;
      var lonDiff = Math.abs(this.props.currentLon) - Math.abs(lonFeet);
      var latDiff = Math.abs(this.props.currentLat) - Math.abs(latFeet);
      if (Math.abs(lonDiff) > 0 && Math.abs(lonDiff) < 200) {
        steps += Math.abs(lonDiff);
      }

      if (Math.abs(latDiff) > 0 && Math.abs(latDiff) < 200) {
        steps += Math.abs(latDiff);
      }

      console.log(steps)
    })
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