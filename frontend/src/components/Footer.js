import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import "./svg-css/footer.css";

const Footer = () => {
  return (
    <div className="one">
      <section className="container-fluid sec-footer">
        <Container>
          <Row>
            <Col md={12} lg={4}>
              <Card.Body>
                <Card.Title>مٍطراق</Card.Title>
                <Card.Text>
                  خيارك الامثل للتسوق من تركيا وانت في العراق, نعمل بكامل طاقتنا
                  لننال رضاكم, نطور خدماتنا دوماً للوصل الى تجربة المستخدم
                  الامثل لراحتكم.
                </Card.Text>
              </Card.Body>
            </Col>
            <Col md={12} lg={4}>
              <Card.Body>
                <Card.Title>تواصل معنا</Card.Title>
                <Card.Text>
                  <Row>
                    <Col>
                      <i className="fas fa-phone ml-3"></i>
                      <span>05377070480</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <i className="fas fa-map-marker ml-3"></i>
                      <span>ميزتلي- مرسين -تركيا</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <i className="fas fa-envelope-open ml-3"></i>
                      <span>metrak61@gmail.com</span>
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Col>
            <Col md={12} lg={4}>
              <Card.Body>
                <Card.Title> حسابتنا على مواقع التواصل الاجتماعي</Card.Title>
                <Card.Text >
                  <Row > 
                    {/*
<a href="#" className="snip1472"><i className="fab fa-linkedin-in"></i></a>
*/}
                    <a
                      href="https://www.instagram.com/me.trak/"
                      
                    >
                      <span className="snip1472">insta</span>
                    </a>
                    {/*
<a href="#" className="snip1472"><i className="fab fa-telegram-plane"></i></a>
<a href="#" className="snip1472"><i className="fab fa-google-plus-g"></i></a>
*/}
                  </Row>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="container-fluid sec-sub-footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <span>حميع الحقوق محفوظة مٍطراق 2022</span>
            </div>
            {/*
<div className="col text-left">
<a href="http://mihanmedia.ir" className="f-light text-dark">طراحی و توسعه:</a>
<a href="http://mihanmedia.ir" className="f-light text-dark">میهن مدیا</a>
</div>
*/}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;

