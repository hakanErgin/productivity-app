import React from 'react';
import {Button, View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import gql from 'graphql-tag';
import {useMutation, useQuery} from '@apollo/react-hooks';

import styles from '../stlyes';

// const SIGN_IN = gql`
//   mutation LoginMutation($email: String!, $password: String!) {
//     Login(email: "hakan.ergin@gmail.com", password: "123")
//   }
// `;

const USER = gql`
  query {
    users {
      email
    }
  }
`;

const SignInScreen = () => {
  // const [signin, {data}] = useMutation(SIGN_IN);

  const {loading, error, data} = useQuery(USER);

  return (
    <View style={styles.container}>
      {/* <Button title="Sign in!" onPress={signin} /> */}
      {data && <Text>{data.users[0].email}</Text>}
    </View>
  );
};

export default SignInScreen;
