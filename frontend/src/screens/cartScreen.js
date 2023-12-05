import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../components/Message";
import { addToCard } from "../actions/cartActions";

function cartScreen({ match, location, history }) {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { catItem } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCard(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return (
    <div>
      <Cart>
        <Row>
          <Col md={8}>
            <h1>shopping Cart</h1>
            {cartItems.length === 0 ? (
              <Message variant="info">
                Your cart is empty <Link to="/" Go back></Link>
              </Message>
            ) : (
              <ListGroup variant="flush">
                {cartItems.map((item) => (
                  <ListGroup key={item.product}>
                    <Row>
                      <Col md={2}>
                        <Image src={item.image} alt={item.name} fluid rounded />
                      </Col>
                      <Col md={3}>
                        <Link to={`/product/${product.id}`}> {item.name}</Link>
                      </Col>
                      <Col md={2}>${item.price}</Col>
                    </Row>
                    <Col md={3}></Col>
                  </ListGroup>
                ))}
              </ListGroup>
            )}
          </Col>
          <Col md={4}></Col>
        </Row>
      </Cart>
    </div>
  );
}

export default cartScreen;
