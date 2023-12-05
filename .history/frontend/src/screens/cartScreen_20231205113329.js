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
import { Message } from "../components/Message";
import { addToCard } from "../actions/cartActions";

function cartScreen({ match, location, history }) {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  return (
    <div>
      <Cart></Cart>
    </div>
  );
}

export default cartScreen;
