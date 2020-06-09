import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SignInScreen from './views/Signin';
import HomeScreen from './views/Home';
import AuthLoadingScreen from './views/AuthLoading';
import OtherScreen from './views/Other';

const AppStack = createStackNavigator({Home: HomeScreen, Other: OtherScreen});
const AuthStack = createStackNavigator({SignIn: SignInScreen});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
