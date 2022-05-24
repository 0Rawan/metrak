import React, { useState, useEffect } from "react";
import {useSelector } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import Todo from '../components/Todo'

import { register } from "../actions/userActions";

const NewOrderScreen = () => {


 const history = useHistory()
 
 const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin 

 
 
   useEffect(() => {
    if (!userInfo) {
      history.push("/login");
      }
 
  }, [history, userInfo])
  
  
  return (
  <Container className="form__container ">
  <Row>
 
   <Todo  contentInfo={{ isVisible: true}} />
  </Row>
  </Container>
  );
};

export default NewOrderScreen;
