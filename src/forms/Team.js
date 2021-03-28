import React from "react";
import { Formik, Form } from "formik";
import TextField from "../components/TextField";
import * as Yup from "yup";

function Team() {
  const validate = Yup.object({
    empName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),

    depart: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),

    desig: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),

    salary: Yup.number()
      .max(50000, "Salary must be less or equal to 50000")
      .min(100, "Salary must be greater or equal to 100")
      .required("Required"),
  });

  return (
    <div className="team">
      <Formik
        initialValues={{
          empName: "",
          depart: "",
          desig: "",
          salary: 0,
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          //console.log(values);
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {(formik) => (
          <div>
            <h3>Team Members: </h3>
            {console.log(formik.values)}
            <Form>
              <TextField label="Employee Name" name="empName" type="text" />
              <TextField label="Department" name="depart" type="text" />
              <TextField label="Designation" name="desig" type="text" />
              <TextField label="Salary" name="salary" type="number" />

              <button type="submit">Save</button>
              <button type="reset">Reset</button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default Team;

/*
import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

export const Signup = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
          <Form>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="last Name" name="lastName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            <TextField label="Confirm Password" name="confirmPassword" type="password" />
            <button className="btn btn-dark mt-3" type="submit">Register</button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}
*/
