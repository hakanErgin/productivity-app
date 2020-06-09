import React from 'react';
import {Button, View, Text} from 'react-native';

const LoginView = () => {
  return (
    <>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>login</Text>
        <Button
          title="Register"
          onPress={() => this.props.navigation.navigate('Register')}
        />
      </View>
    </>
  );
};

export default LoginView;
