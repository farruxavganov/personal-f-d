import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TransactionList from "../TransactionList";
import Summary from "../Summary";
import Charts from "../Charts";
import ExchangeRetes from "../ExchangeRates";
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <Container className="dashboard">
            <Row>
                <Col lg={8}>
                  <Row className="flex-column">
                      <Col>
                         <Charts />
                      </Col>

                      <Col>
                        <Row>
                            <Col md={6}>
                                <Summary />
                            </Col>
                            <Col md={6}>
                                <ExchangeRetes />
                            </Col>
                        </Row>
                      </Col>
                  </Row>
                </Col>
                <Col lg={4}>
                  <TransactionList />
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
