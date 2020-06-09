import React from 'react';
import {Button, View, Text} from 'react-native';

const RegisterView = () => {
  return (
    <>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>register</Text>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    </>
  );
};

export default RegisterView;
