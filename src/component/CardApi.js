import React, { Component } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

export class CardApi extends Component {
  render() {
    return (
      <>
        <Row xs={1} md={3} className="g-4">
          {this.props.dataApi.map((obj) => {
            return (
              <>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={obj.strDrinkThumb} />
                    <Card.Body>
                      <Card.Title>{obj.strDrink}</Card.Title>
                      <Card.Text>{obj.idDrink}</Card.Text>
                      <Button
                        variant="primary"
                        onClick={(e) => {
                          this.props.addtofav(obj);
                        }}
                      >
                        Add to faveroite
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            );
          })}
        </Row>
      </>
    );
  }
}

export default CardApi;
