import React from 'react';
import {Button, View, Text} from 'react-native';

class LoginView extends React.Component {
  static navigationOptions = () => {
    return {
      title: 'custom title',
      headerRight: () => (
        <Button onPress={() => alert('This is a button!')} title="Info" />
      ),
    };
  };
  render() {
    return (
      <>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>login</Text>
          <Button
            title="Register"
            onPress={() =>
              this.props.navigation.navigate('Register', {thing: 'yes'})
            }
          />
        </View>
      </>
    );
  }
}

export default LoginView;
