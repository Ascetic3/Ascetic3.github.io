import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';

import img1 from '../assets/images/img1.jpg';

function AppArticle() {

  return (

    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Article title</h2>
          <div className="subtitle">subtitle</div>
        </div>
        <Row>
          <Col md={6} sm={12}>
            <Image src={img1} />
          </Col>
          <Col md={6} sm={12}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dicta veritatis sint quidem asperiores magni eaque praesentium temporibus, magnam, eveniet consequatur possimus nihil? Nemo deserunt repudiandae soluta neque doloribus, quo!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae alias ex error distinctio laudantium recusandae, iure. Vel nisi soluta, minus consectetur reiciendis laborum, laudantium perspiciatis quos molestias quam eum.</p>
          </Col>
        </Row>
      </Container>
    </section>
    
  );
}

export default AppArticle;