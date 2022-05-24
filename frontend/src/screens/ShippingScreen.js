import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector, } from 'react-redux'
import { LinkContainer } from "react-router-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import FormContainer from '../components/FormContainer'
import { updateShippingAdressOrder,
} from '../actions/orderActions'

const ShippingScreen = () => {
   
  const history = useHistory()
  const { id: orderId } = useParams();

  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
      dispatch(updateShippingAdressOrder({
        _id: orderId,
  address: address,
  city: city,
  country: country}))
  }

  return (
    <FormContainer>
  
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='address'>
          <Form.Label>عنوان التوصيل</Form.Label>
          <Form.Control
            type='text'
            placeholder='العنوان'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='city'>
          <Form.Label>المدينة</Form.Label>
          <Form.Control
            type='text'
            placeholder='المدينة'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='country'>
          <Form.Label>القضاء</Form.Label>
          <Form.Control
            type='text'
            placeholder='القضاء'
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          تحديث العنوان
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingScreen
