import { Form } from "react-bootstrap";
import Input from "./InputGroup";

export default function FormGroup({ label, type, name }) {
  return (
    <Form.Group className="mb-3">
      <Form.Label htmlFor={name} className="mb-0">
        {label}
      </Form.Label>
      <Input name={name} type={type} />
    </Form.Group>
  );
}
