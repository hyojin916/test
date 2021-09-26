import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

function App() {
  return (
    <div className="App">
      <div>nav</div>
      <style type="text/css">
        {`
    .btn-flat {
      background-color: purple;
      color: orange;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    .col {
      background-color: yellow;
    }
    `}
      </style>

      <Button variant="flat" size="xxl">
        flat button
      </Button>
      <Button type="button" variant="primary">
        Button #1
      </Button>
      <Button variant="secondary" className="mx-2">
        Button #2
      </Button>
      <Button variant="success">Button #3</Button>
      <Alert dismissible variant="danger">
        <Alert.Heading>
          Oh snap! You got an error! ㅋㅋ 아 놀리네?
        </Alert.Heading>
        <p>Change this and that and try again.</p>
      </Alert>

      {/* 컨테이너 */}
      <Container>
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>

      <Container fluid>
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>

      <Container fluid="lg">
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
