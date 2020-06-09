import React from 'react';
import {Button, View, Text} from 'react-native';

const RegisterView = props => {
  return (
    <>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>register</Text>
        <Text>
          {JSON.stringify(props.navigation.getParam('thing', 'xxxx'))}
        </Text>
        <Button
          title="Login"
          onPress={() => props.navigation.navigate('Login')}
        />
      </View>
    </>
  );
};

export default RegisterView;
