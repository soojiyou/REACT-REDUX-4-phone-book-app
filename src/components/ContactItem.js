import React from 'react'
import { Row, Col } from 'react-bootstrap'

const ContactItem = ({ item }) => {
    return (
        <Row>
            <Col lg={1}>
                <img width={50} src="https://global-uploads.webflow.com/620c0d2e51cac37f5958848f/620c0d2e51cac3d40e588bb2_AdobeStock_346839683%2520%255BConverted%255D-p-800.jpeg" />
            </Col>
            <Col lg={11}>
                <div>{item.name}</div>
                <div>{item.phonenum}</div>
            </Col>
        </Row>
    )
}

export default ContactItem

