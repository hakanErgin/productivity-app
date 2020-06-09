import React from 'react';
import {Button, View, Text} from 'react-native';

class RegisterView extends React.Component {
  render() {
    return (
      <>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>register</Text>
          <Text>
            {JSON.stringify(this.props.navigation.getParam('thing', 'xxxx'))}
          </Text>

          <Button
            title="Login"
            onPress={() => this.props.navigation.navigate('Login')}
          />
        </View>
      </>
    );
  }
}

export default RegisterView;
