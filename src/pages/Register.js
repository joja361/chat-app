import { createUserWithEmailAndPassword } from "firebase/auth";
import { Formik } from "formik";
import { useState } from "react";
import { Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import ButtonWithLoading from "../components/ButtonWithLoading";
import FormGroup from "../components/forms/FormGroup";
import { auth } from "../firebase";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Email is invalid").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Required"),
  });

  const onSubmit = async (values) => {
    const { email, password, name } = values;
    setError("");
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setLoading(false);
      navigate("/");
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
        {({ handleSubmit, isValid }) => (
          <Form onSubmit={handleSubmit} className="login-wrapper">
            <FormGroup label="Email" name="email" type="email" />
            <FormGroup label="Password" name="password" type="password" />
            <FormGroup
              label="Confirm password"
              name="confirmPassword"
              type="password"
            />
            <ButtonWithLoading buttonText="Sign Up" loading={loading} />
            <div className="error-message mt-2 text-center">{error}</div>
            <div className="d-inline-flex">
              <p>Already have account?</p>
              <Link to={"/login"} className="ps-2 text-decoration-none">
                Login
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </Row>
  );
}
