import React from 'react'
import { Container , Row ,Col} from 'react-bootstrap'

function Footer() {
  return (
    <footer>
       <Container>
        <footer>
            <Row>
                <Col className='text-center py-3'>
                Copyright &copy; 2023
                </Col>
            </Row>
        </footer>
       </Container>

    </footer>
  )
}

export default Footer