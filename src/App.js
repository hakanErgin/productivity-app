import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Button, View, Text} from 'react-native';

// import LoginView from './views/Login';
// import RegisterView from './views/Register';

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

const AppNavigator = createStackNavigator(
  {
    Login: LoginView,
    Register: RegisterView,
  },
  {
    initialRouteName: 'Login',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

// export default createAppContainer(AppNavigator);
