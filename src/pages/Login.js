import { signInWithEmailAndPassword } from "firebase/auth";
import { Formik } from "formik";
import { useState } from "react";
import { Form, Row } from "react-bootstrap";
import * as Yup from "yup";
import ButtonWithLoading from "../components/ButtonWithLoading";
import FormGroup from "../components/forms/FormGroup";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Email is invalid").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = async (values) => {
    const { email, password } = values;
    setLoading(true);
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
    } catch (error) {
      setError(error.code);
      setLoading(false);
    }
  };

  return (
    <Row className="vh-100 justify-content-center align-items-center g-0">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="login-wrapper">
            <FormGroup label="Email" name="email" type="email" />
            <FormGroup label="Password" name="password" type="password" />
            <ButtonWithLoading buttonText="Login" loading={loading} />
            <div className="error-message mt-2 text-center">{error}</div>
            <div className="d-inline-flex">
              <p>Don't have an account?</p>
              <Link to={"/register"} className="ps-2 text-decoration-none">
                Sign Up
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </Row>
  );
}
