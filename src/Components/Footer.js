import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class ThirdRow extends Component {
  render() {
    return (
        <div>
            <Container>
                <Row className="md-4">
                    <Col sm={{ size: 6, order: 2, offset: -1 }}>
                    Copyright © Santren Koding 2018. All rights reserved.
                    <br/>
                    <br/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
  }
}

export default ThirdRow;
