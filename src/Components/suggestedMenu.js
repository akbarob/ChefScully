import { auto } from "@popperjs/core";
import { Badge, Card, CardBody, CardHeader, CardImg, CardImgOverlay, CardText,Col,Row } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Suggested(){
    return(
        <div className='container '>
            <Row>
            <Card className="col-md-5 my-2">
                <Row >
                    <Col xs={4}>
                        <CardImg src="images/lobster.png" className="position-relative"/>
                        <CardImgOverlay>
                            <Badge className="bg-danger position-absolute top-1 start-100  badge rounded-pill border border-light">
                                HOT <FontAwesomeIcon icon="fa-solid fa-info" />
                            </Badge>
                        </CardImgOverlay>
                    </Col>
                    <Col xs={8}>
                        <CardBody>
                            <CardText>
                            <h6 className="">PRIME RIB TOATS</h6>
                                <p>This Food is sweet</p>
                            </CardText>
                        </CardBody>

                    </Col>
                </Row>
            </Card>

            <Card className="col-md-5 my-2">
                <Row>
                    <Col xs={4}>
                        <CardImg src="images/lobster.png" className="position-relative"/>
                        <CardImgOverlay>
                            <Badge className="bg-danger position-absolute top-5 start-100  badge rounded-pill border border-light">
                                HOT <FontAwesomeIcon icon="fa-solid fa-info" />
                            </Badge>
                        </CardImgOverlay>
                    </Col>
                    <Col xs={8}>
                        <CardBody>
                            <CardText>
                            <h6>PRIME RIB TOATS</h6>
                                <p>This Food is sweet</p>
                            </CardText>
                        </CardBody>

                    </Col>
                </Row>
            </Card>

            <Card className="col-md-5 my-2">
                <Row>
                    <Col xs={4}>
                        <CardImg src="images/lobster.png" className="position-relative"/>
                        <CardImgOverlay>
                            <Badge className="bg-danger position-absolute top-5 start-100  badge rounded-pill border border-light">
                                HOT <FontAwesomeIcon icon="fa-solid fa-info" />
                            </Badge>
                        </CardImgOverlay>
                    </Col>
                    <Col xs={8}>
                        <CardBody>
                            <CardText>
                            <h6>PRIME RIB TOATS</h6>
                                <p>This Food is sweet</p>
                            </CardText>
                        </CardBody>

                    </Col>
                </Row>
            </Card>

            <Card className="col-md-5 my-2">
                <Row>
                    <Col xs={4}>
                        <CardImg src="images/lobster.png" className="position-relative"/>
                        <CardImgOverlay>
                            <Badge className="bg-danger position-absolute top-5 start-100  badge rounded-pill border border-light">
                                HOT <FontAwesomeIcon icon="fa-solid fa-info" />
                            </Badge>
                        </CardImgOverlay>
                    </Col>
                    <Col xs={8}>
                        <CardBody>
                            <CardText>
                            <h6>PRIME RIB TOATS</h6>
                                <p>This Food is sweet</p>
                            </CardText>
                        </CardBody>

                    </Col>
                </Row>
            </Card>

            <Card className="col-md-5 my-2 ">
                <Row>
                    <Col xs={4}>
                        <CardImg src="images/lobster.png" className="position-relative"/>
                        <CardImgOverlay>
                            <Badge className="bg-danger position-absolute top-5 start-100  badge rounded-pill border border-light">
                                HOT <FontAwesomeIcon icon="fa-solid fa-info" />
                            </Badge>
                        </CardImgOverlay>
                    </Col>
                    <Col xs={8}>
                        <CardBody>
                            <CardText>
                            <h6>PRIME RIB TOATS</h6>
                                <p>This Food is sweet</p>
                            </CardText>
                        </CardBody>

                    </Col>
                </Row>
            </Card>

            <Card className="col-md-5 my-2 ">
                <Row>
                    <Col xs={4}>
                        <CardImg src="images/lobster.png" className="position-relative"/>
                        <CardImgOverlay>
                            <Badge className="bg-danger position-absolute top-5 start-100  badge rounded-pill border border-light">
                                HOT <FontAwesomeIcon icon="fa-solid fa-info" />
                            </Badge>
                        </CardImgOverlay>
                    </Col>
                    <Col xs={8}>
                        <CardBody>
                            <CardText>
                            <h6>PRIME RIB TOATS</h6>
                                <p>This Food is sweet</p>
                            </CardText>
                        </CardBody>

                    </Col>
                </Row>
            </Card>

            </Row>
            
        </div>
    )
}