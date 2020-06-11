import React from 'react';
import {Button, View, Text, TextInput} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import gql from 'graphql-tag';
import {useMutation, useQuery} from '@apollo/react-hooks';
import {Formik} from 'formik';

import styles from '../stlyes';

const SIGN_IN = gql`
  mutation Login($email: String!, $password: String!) {
    Login(email: $email, password: $password)
  }
`;

const SignInScreen = props => {
  const [signin] = useMutation(SIGN_IN, {
    onCompleted(data) {
      AsyncStorage.setItem('userToken', data.Login);
      props.navigation.navigate('App');
    },
  });

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => {
          signin({
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
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignInScreen;
