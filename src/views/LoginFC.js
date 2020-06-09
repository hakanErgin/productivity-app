import React from 'react';
import {Button, View, Text} from 'react-native';

const LoginView = props => {
  return (
    <>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>login</Text>
        <Button
          title="Register"
          onPress={() => props.navigation.navigate('Register', {thing: 'yes'})}
        />
      </View>
    </>
  );
};

LoginView.navigationOptions = navigation => ({
  title: 'custom title',
  headerRight: () => (
    <Button onPress={() => alert('This is a button!')} title="Info" />
  ),
});

export default LoginView;
