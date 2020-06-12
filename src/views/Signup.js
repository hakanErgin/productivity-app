import React from 'react';
import {Button, View, Text, TextInput} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import gql from 'graphql-tag';
import {useMutation, useQuery} from '@apollo/react-hooks';
import {Formik} from 'formik';

import styles from '../stlyes';

const SIGN_UP = gql`
  mutation Register($email: String!, $password: String!) {
    Register(email: $email, password: $password) {
      id
      email
    }
  }
`;

const SignUpScreen = props => {
  const [signUp] = useMutation(SIGN_UP, {
    onCompleted(signUp) {
      props.navigation.navigate('SignIn');
    },
  });

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => {
          signUp({
            variables: {
              email: values.email,
              password: values.password,
            },
          });
        }}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <TextInput
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <TextInput
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            <Button onPress={handleSubmit} title="Submit" />
            <Button
              onPress={() => props.navigation.navigate('SignIn')}
              title="Go to SignIn"
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignUpScreen;
