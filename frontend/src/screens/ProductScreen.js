import React from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Rating from "../components/Rating";
import products from "../products";

function ProductScreen() {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);
  return (
    <div>
      <Link to="/">
        <Button variant="dark">Go Back</Button>
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews}`}
                  color={"#f8e825"}
                />
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Link>
    </div>
  );
}

export default ProductScreen;
