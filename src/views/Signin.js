import React from 'react';
import {Button, View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import gql from 'graphql-tag';
import {useMutation, useQuery} from '@apollo/react-hooks';

import styles from '../stlyes';

const SIGN_IN = gql`
  mutation {
    Login(email: "hakan.ergin@gmail.com", password: "123")
  }
`;

const SignInScreen = props => {
  const [signin, {data}] = useMutation(SIGN_IN);

  const _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    props.navigation.navigate('App');
  };

  return (
    <View style={styles.container}>
      <Button title="Sign in!" onPress={_signInAsync} />
      {data && console.log(data)}
      {/* {data && <Text>{data.users[0].email}</Text>} */}
    </View>
  );
};

export default SignInScreen;
