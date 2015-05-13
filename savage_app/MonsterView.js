'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  TextInput,
  View,
  ListView,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
} = React;

var MonsterView = React.createClass({
  getInitialState: function() {
    return {
      monsterHp: this.props.monster.hp,
      monsterBounty: this.props.monster.bounty,
      monsterExp: this.props.monster.exp,
      playerHp: this.props.hp,
      playerGold: this.props.gold,
      playerExp: this.props.exp
    }
  },

  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.fightScene}>
          <View style={styles.seperator}/>
          <Image style={styles.grass} source={require('image!grass')}>
            <View style={styles.monsterBackDrop}>
              <Text style={styles.monsterHpText}>HP: {this.state.monsterHp}</Text>
              <Image style={styles.monsterImage} source={{ uri: this.props.monster.avatar }}/>
            </View>
            <View style={styles.playerBackDrop}>
              <Text style={styles.playerHpText}>HP: {this.state.playerHp}</Text>
              <Image style={styles.playerImage} source={require('image!player')}/>
            </View>
          </Image>
          <View style={styles.seperator}/>
        </View>
        <View style={styles.fightOptions}>
          <TouchableHighlight onPress={this.playerAttack} style={styles.attackButton}
            underlayColor='rgb(255,70,71)'>
            <Text style={styles.buttonText}>ATTACK</Text>
          </TouchableHighlight> 
          <TouchableHighlight style={styles.defendButton}
            underlayColor='deepskyblue'>
            <Text style={styles.buttonText}>DEFEND</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  },

  playerAttack: function() {
    var hp = this.state.monsterHp - this.props.attack;
    this.setState({monsterHp: hp});

    if (this.state.monsterHp <= 0) {
      var self = this;
      var gold = this.state.playerGold + this.state.monsterBounty;
      var exp = this.state.playerExp + this.state.monsterExp;

      this.setState({playerExp: exp, playerGold: gold});
      fetch('http://localhost:3000/players/' + this.props.id + '/' + hp + '/' +
         gold + '/' + exp , {
        method: 'PUT'
      }).then(function(response) {
        console.log(response.status);
        self.props.navigator.pop();
      });
    }
    setTimeout(this.monsterAttack, 1000);
    // this.monsterAttack();
  },

  monsterAttack: function() {
    var self = this;
    var hp = this.state.playerHp - this.props.monster.attack;
    this.setState({playerHp: hp});
    if (this.state.playerHp <= 0) {
      fetch('http://localhost:3000/players/' + this.props.id  + '/0', {
        method: 'PUT'
      }).then(function(response) {
        console.log(response.status);
        self.props.navigator.pop();
      });
    } 
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    backgroundColor: 'ivory',
  },
  monsterBackDrop: {
    backgroundColor: 'rgba(0,0,0,0)',
    marginLeft: 38,
    marginBottom: 10
  },
  playerBackDrop: {
    backgroundColor: 'rgba(0,0,0,0)',
    marginLeft: 220,
    marginBottom: 40
  },
  playerImage: {
    height: 100,
    width: 100
  },
  playerHpText: {
    fontSize: 18,
    marginLeft: 30
  },
  monsterImage: {
    height: 100,
    width: 100
  },
  monsterHpText: {
    fontSize: 18,
    color: 'red'
  },
  grass: {
    height: 240,
    width: 400,
  },
  seperator: {
    height: 3,
    backgroundColor: '#dddddd'
  },
  fightScene: {
    marginTop: 20
  },
  fightOptions: {
    marginTop: 20
  },
  attackButton: {
    backgroundColor: 'indianred',
    height: 70,
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 0,
    margin: 25
  },
  defendButton: {
    backgroundColor: 'dodgerblue',
    height: 70,
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 0,
    marginLeft: 25,
    marginRight: 25
  },
  buttonText: {
    alignSelf: 'center',
    color: 'snow',
    fontSize: 32
  }
});

module.exports = MonsterView;