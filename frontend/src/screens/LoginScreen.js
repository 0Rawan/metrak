import React, { useState, useEffect } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { login } from '../actions/userActions'


const LoginScreen = ({ isHome }) => {

  // Router hooks
  const location = useLocation()
  const history = useHistory()
  // Redux
  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const { loading, error, userInfo } = userLogin
  // Component state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [userInfo, history, redirect])

  const submitHandler = e => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
     <Container className={"form__container " + (isHome? 'hero' : '')}>
      <Row className={!isHome? 'justify-content-md-center' : ''}>
        <Col xs={12} md={6}>
      <h1>تسجيل الدخول</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>البريد الاكتروني</Form.Label>
          <Form.Control
            type='email'
            placeholder='بريدك الالكتروني'
            value={email}
            onChange={e => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>كلمة المرور</Form.Label>
          <Form.Control
            type='password'
            placeholder='كلمة المرور'
            value={password}
            onChange={e => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary'> ادخل
        </Button>
      </Form>

      <Row className='py-3' style={{display: !isHome? "block" : "none"}}>
        <Col>
          ليس لديك حساب؟{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            سجل هنا
          </Link>
        </Col>
      </Row>
    </Col>
      </Row>
    </Container>
  )
}

export default LoginScreen
