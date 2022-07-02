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
                            <p className="">PRIME RIB TOATS</p>
                                This Food is sweet
                            </CardText>
                        </CardBody>

                    </Col>
                </Row>
            </Card>

           
            </Row>
            
        </div>
    )
}