import React from "react";
import { useFormik } from "formik";

function Signup() {
  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "First Name is Required field.";
    } else if (values.firstName.length < 3) {
      errors.firstName = "Must be 4 character or more.";
    }

    if (!values.password) {
      errors.password = "Password is Required field.";
    } else if (values.password.length < 8) {
      errors.password = "Must be 8 character or more.";
    } else if (values.password === "12345678") {
      errors.password = "Must not be 12345678 !!!";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Password is Required field.";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Password doesn't match.";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <h3>Signup/Register Form: </h3>
      <div className="signup">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={formik.handleChange}
            value={formik.values.firstName}
            onBlur={formik.handleBlur}
            id="firstName"
            name="firstName"
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="error">{formik.errors.firstName}</div>
          ) : null}

          <label htmlFor="lastName">Last Name</label>
          <input
            onChange={formik.handleChange}
            value={formik.values.lastName}
            onBlur={formik.handleBlur}
            id="lastName"
            name="lastName"
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="error">{formik.errors.lastName}</div>
          ) : null}

          <label htmlFor="email">Email Address</label>
          <input
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            id="email"
            name="email"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}

          <label htmlFor="password">Password</label>
          <input
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            id="password"
            name="password"
            type="password"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            onBlur={formik.handleBlur}
            id="confirmPassword"
            name="confirmPassword"
            type="password"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="error">{formik.errors.confirmPassword}</div>
          ) : null}

          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
}

export default Signup;
