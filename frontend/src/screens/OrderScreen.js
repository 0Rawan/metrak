import React, { useState, useEffect } from "react";
import axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import { useHistory, useParams, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import {
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  Button,
  Container,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";

import {
  getOrderDetails,
  payOrder,
  deliverOrder,
  updatePricesOrder,
} from "../actions/orderActions";
import {
  ORDER_PAY_RESET,
  ORDER_DELIVER_RESET,
} from "../constants/orderConstants";

const OrderScreen = () => {
  const history = useHistory();
  const { id: orderId } = useParams();

  const [price, setPrice] = useState("");
  const [shippingPrice, setShippingPrice] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [shippingAdress, setShippingAdress] = useState("");

  const [sdkReady, setSdkReady] = useState(false);

  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPrices = useSelector((state) => state.orderPrices);
  const {
    loading: loadingUpdate,
    success: successUpdate,
    error: errorUpdate,
  } = orderPrices;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver;

  const orderShippingAdress = useSelector((state) => state.orderShippingAdress);
  const { loading: loadingAddress, success: successAddress } =
    orderShippingAdress;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }

    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (
      !order ||
      successPay ||
      successDeliver ||
      successUpdate ||
      successAddress ||
      order._id !== orderId
    ) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [
    dispatch,
    orderId,
    successPay,
    successDeliver,
    order,
    history,
    userInfo,
  ]);

  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(orderId, paymentResult));
  };

  const deliverHandler = () => {
    dispatch(deliverOrder(order));
  };

  const updateHandler = () => {
    dispatch(
      updatePricesOrder({
        _id: orderId,
        itemsPrice: price,
        shippingPrice: shippingPrice,
        totalPrice: totalPrice,
      })
    );
  };

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Container className="form__container">
      <h2>رقم الطلب {order._id}</h2>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>طلباتك</h2>
              <p>
                <strong>الاسم: </strong> {order.user.name}
              </p>
              <p>
                <strong>الايميل: </strong>{" "}
                <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
              </p>
              <p>
                <strong>العنوان:</strong>
              </p>
              {order.shippingAddress ? (
                <p>order.shippingAddress</p>
              ) : (
                <LinkContainer className="link" to={`/shipping/${orderId}`}>
                  <p>عدل عنوان الشحن</p>
                </LinkContainer>
              )}

              {order.isDelivered ? (
                <Message variant="success">
                  Delivered on {order.deliveredAt}
                </Message>
              ) : (
                <Message variant="danger">لم يتم التوصيل بعد</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>طريقة الدفع</h2>
              <p>
                <strong>الطريقة: </strong>
                {order.paymentMethod
                  ? order.paymentMethod
                  : "لم يتم تحديد طريقة الدفع بعد"}
                :
              </p>
              {order.isPaid ? (
                <Message variant="success">Paid on {order.paidAt}</Message>
              ) : (
                <Message variant="danger">لم يتم الدفع</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>

              {order.orderItems.length === 0 ? (
                <Message>ليس هناك طلبات</Message>
              ) : (
                <ListGroup variant="flush">
                  {order.orderItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col>{item.comp}</Col>
                        <Col>{item.desc}</Col>
                        <Col md={1}>{item.qty}</Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>مجموع طلباتك</h2>
              </ListGroup.Item>
              {userInfo && userInfo.isAdmin && (
                <ListGroup.Item>
                  <Row>
                    <h5> حدث الاسعار</h5>
                    <input
                      name="سعر المنتجات"
                      type="number"
                      placeholder="items price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="margin-ud"
                    />
                    <input
                      name="سعر المنتجات"
                      type="number"
                      placeholder="shipping price"
                      value={shippingPrice}
                      onChange={(e) => setShippingPrice(e.target.value)}
                      className="margin-ud"
                    />

                    <input
                      name="سعر المنتجات"
                      type="number"
                      placeholder="total price"
                      value={totalPrice}
                      onChange={(e) => setTotalPrice(e.target.value)}
                      className="margin-ud"
                    />

                    <Button
                      type="button"
                      className="btn-block"
                      onClick={updateHandler}
                    >
                      حدث الان
                    </Button>
                  </Row>
                </ListGroup.Item>
              )}

              {order.itemsPrice === 0 ? (
                <ListGroup.Item>
                  <Row>
                    <Col>لم يتم تحديد السعر بعد...</Col>
                  </Row>
                </ListGroup.Item>
              ) : (
                <>
                  {" "}
                  <ListGroup.Item>
                    <Row>
                      <Col>المنتجات</Col>
                      <Col>${order.itemsPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>الشحن</Col>
                      <Col>${order.shippingPrice}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>المجموع</Col>
                      <Col>${order.totalPrice}</Col>
                    </Row>
                  </ListGroup.Item>{" "}
                </>
              )}

              {!order.isPaid && order.itemsPrice !== 0 && (
                <ListGroup.Item>
                  {loadingPay && <Loader />}
                  {!sdkReady ? (
                    <Loader />
                  ) : (
                    <PayPalButton
                      amount={order.totalPrice}
                      onSuccess={successPaymentHandler}
                    />
                  )}
                </ListGroup.Item>
              )}
              {loadingDeliver && <Loader />}
              {userInfo &&
                userInfo.isAdmin &&
                order.isPaid &&
                !order.isDelivered && (
                  <ListGroup.Item>
                    <Button
                      type="button"
                      className="btn btn-block"
                      onClick={deliverHandler}
                    >
                      Mark As Delivered
                    </Button>
                  </ListGroup.Item>
                )}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderScreen;

