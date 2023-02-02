import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../products'

function HomeScreen() {
  return (
    <>
      <h1>Latest Product</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <h3>{product.name}</h3>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen