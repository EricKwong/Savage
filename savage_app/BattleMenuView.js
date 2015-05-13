'use strict';

var React = require('react-native');
var MonsterView = require('./MonsterView');

var {
  StyleSheet,
  Text,
  TextInput,
  View,
  ListView,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component
} = React;

class BattleMenuView extends Component {

  constructor(props) {
    super(props);    
    var self = this;
    var ds = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.monsters)
    }
  }

  rowPressed(id) {
    var monster = this.props.monsters.filter(prop => prop.id === id)[0];
    this.props.monster = monster
    this.props.navigator.push({
      title: 'Monster',
      component: MonsterView,
      passProps: this.props
    })
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableHighlight onPress={() => this.rowPressed(rowData.id)} 
      underlayColor='#dddddd'>
        <View>
          <View style={styles.rowContainer}>
            <View>
              <Image style={styles.avatar} source={{ uri: rowData.avatar}}/>
            </View>
            <View style={styles.info}>
              <Text style={styles.monsterName}>{rowData.name}</Text>
              <Text style={styles.hp}>HP: {rowData.hp}</Text>
              <Text style={styles.bounty}>BOUNTY: {rowData.bounty}</Text>
              <Text style={styles.exp}>EXP: {rowData.exp}</Text>
            </View>
          </View>
          <View style={styles.seperator}/>
        </View>
      </TouchableHighlight>
    )
  }

  goBack() {
    this.props.navigator.pop()
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.header}>
            <TouchableHighlight onPress={this.goBack.bind(this)} style={styles.backButton}
              underlayColor='rgb(255,120,0)'>
              <Text style={styles.backText}>&#60;</Text>
            </TouchableHighlight>
            <Text style={styles.title}>Select A Monster To Battle</Text>
          </View>
          <View style={styles.seperator}/>
        </View>
        <ListView dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}/>
      </View>
    )
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ivory'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  avatar: {
    width: 100,
    height: 100
  },
  info: {
    flexDirection: 'column',
    flex: 1
  },
  hp: {
    fontSize: 18,
    color: 'indianred'
  },
  exp: {
    fontSize: 18,
    color: 'skyblue'
  },
  bounty: {
    fontSize: 18,
    color: 'gold'
  },
  seperator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  title: {
    fontSize: 25,
    alignSelf: 'center'
  },
  monsterName: {
    fontSize: 21,
    fontWeight: 'bold'
  },
  header: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 5
  },
  back:{
    right: 15,
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
    width: 44,
    borderRadius: 12,
    padding: 2,
    margin: 6,
    backgroundColor: 'rgb(255,150,0)'
  }
});

module.exports = BattleMenuView;