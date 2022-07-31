import { Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";

export default function Chat() {
  return (
    <Row>
      <Col xs="auto">
        <Sidebar />
      </Col>
      <Col>
        <div style={{ backgroundColor: "red" }}>MESSAGING</div>
      </Col>
    </Row>
  );
}
