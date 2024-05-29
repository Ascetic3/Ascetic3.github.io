import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from 'react-bootstrap/Image';

function ContactPage() {
  return (
    <section id="contact" className="block contact-block">
      <Container className='contact-page'>
        <Row >
          <Col sm={12} md={6}>
            <Container fluid>
              <div className="title-holder">
                <h2>Contact us</h2>
                <div className="subtitle">get connected with us</div>
              </div>
              <Form className="contact-form">
                <Row>
                  <Col sm={12}>
                    <Form.Control
                      type="text"
                      placeholder="Enter your full name"
                      required
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email address"
                      required
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <Form.Control
                      type="tel"
                      placeholder="Enter your contact number"
                      required
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <Form.Control
                      as="textarea"
                      placeholder="Enter your contact message"
                      required
                    />
                  </Col>
                </Row>
                <div className="btn-holder">
                  <Button type="submit">Submit</Button>
                </div>
              </Form>
            </Container>
          </Col>
          <Col md={6}  className='form-foto' > <Image src={require('../assets/images/contact-foto.jpg')} fluid alt="oops....."  /> </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactPage;