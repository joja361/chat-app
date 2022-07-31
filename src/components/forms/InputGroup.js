import { ErrorMessage, Field } from "formik";
import { Form, InputGroup } from "react-bootstrap";

export default function Input({ name, type, ...rest }) {
  return (
    <InputGroup hasValidation>
      <Field name={name}>
        {({ field, meta }) => {
          return (
            <Form.Control
              type={type}
              isInvalid={meta.error && meta.touched}
              {...field}
              {...rest}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name}>
        {(errMsg) => {
          return (
            <Form.Control.Feedback className="invalid" type="invalid">
              {errMsg}
            </Form.Control.Feedback>
          );
        }}
      </ErrorMessage>
    </InputGroup>
  );
}
