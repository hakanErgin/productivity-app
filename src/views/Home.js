import * as React from 'react';
import {Button, View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import styles from '../stlyes';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to the app!',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
        <Button title="print token :)" onPress={this._getData} />
      </View>
    );
  }

  _getData = async () => {
    try {
      const value = await AsyncStorage.getItem('userToken');
      if (value !== null) {
        // return <Text>{value}</Text>;
        return console.log(value);
      }
    } catch (e) {
      return <Text>{e}</Text>;
    }
  };

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

export default HomeScreen;
