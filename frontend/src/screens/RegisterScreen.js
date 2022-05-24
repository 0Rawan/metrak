import React, { useState, useEffect } from "react";
import { Link, useLocation, useHistory } from 'react-router-dom'
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { register } from "../actions/userActions";

const RegisterScreen = ({ isHome }) => {
  // Router hooks
  const location = useLocation()
  const history = useHistory()
  // Component state	
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
 // Redux	
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
   
      dispatch(register(name, email, password));
    
  };

  return (
    <Container className={"form__container " + (isHome? 'hero' : '')}>
      <Row className={!isHome? 'justify-content-md-center' : ''}>
        <Col xs={12} md={6}>
      <h1>حساب جديد</h1>
      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>الاسم</Form.Label>
          <Form.Control
            type="name"
            placeholder="الاسم"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>البريد الالكتروني</Form.Label>
          <Form.Control
            type="email"
            placeholder="البريد الالكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>كلمة المرور</Form.Label>
          <Form.Control
            type="password"
            placeholder="كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>


        <Button type="submit" variant="primary">
          Register
        </Button>
      </Form>

      <Row className="py-3" style={{display: !isHome? "block" : "none"}}>
        <Col>
          Have an Account?{" "}
          <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
            Login
          </Link>
        </Col>
      </Row>
      </Col>
      </Row>
    </Container>
  );
};

export default RegisterScreen;
