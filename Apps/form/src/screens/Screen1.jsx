import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React from 'react';

import {useFormik} from 'formik';

export default function Screen1() {
  const validate = values => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Maximum 15 characters allowed';
    }

    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (values.firstName.length > 25) {
      errors.firstName = 'Maximum 25 characters allowed';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
    },
    onSubmit: () => {
      console.log('Submitted');
    },
    validate: validate,
  });
  return (
    <View>
      <Text>Screen1</Text>

      <View style={styles.form}>
        <Text style={styles.fieldName}>First Name</Text>
        <TextInput
          style={styles.textInput}
          value={formik.values.firstName}
          onChangeText={formik.handleChange('firstName')}
          onBlur={formik.handleBlur('firstName')}
          selectionColor={'#ef476f'}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <Text style={styles.errorMsg}>*{formik.errors.firstName}</Text>
        ) : null}

        <Text style={styles.fieldName}>Last Name</Text>
        <TextInput
          style={styles.textInput}
          value={formik.values.lastName}
          onChangeText={formik.handleChange('lastName')}
          onBlur={formik.handleBlur('lastName')}
          selectionColor={'#ef476f'}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <Text style={styles.errorMsg}>*{formik.errors.lastName}</Text>
        ) : null}

        <Text style={styles.fieldName}>Email</Text>
        <TextInput
          style={styles.textInput}
          value={formik.values.email}
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          selectionColor={'#ef476f'}
        />
        {formik.touched.email && formik.errors.email ? (
          <Text style={styles.errorMsg}>*{formik.errors.email}</Text>
        ) : null}
        <Button
          style={{padding: 20, margin: 10}}
          onPress={formik.handleSubmit}
          title="Submit"
          disabled={formik.isSubmitting}
          color={'#38b000'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: '#463f3a',
    margin: 15,
    padding: 10,
  },
  fieldName: {
    color: '#e0e1dd',
    marginBottom: 3,
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',
  },
  textInput: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    backgroundColor: '#8a817c',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#e0e1dd',
  },
  errorMsg: {
    color: '#e5383b',
    fontWeight: '500',
  },
});
