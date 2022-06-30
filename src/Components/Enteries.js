import {Card, CardBody, CardImg, CardText, CardHeader, Row, Col, Nav, NavItem, Breadcrumb, BreadcrumbItem} from "reactstrap"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Enteries(){
    return(
        <div className="container">
        <Breadcrumb>
            <BreadcrumbItem><NavLink to="/home">Home</NavLink></BreadcrumbItem>
            <BreadcrumbItem active>Enteries</BreadcrumbItem>
        </Breadcrumb>
        <div className="mx-auto col-6 text-center my-5">
            <Nav navbar>
                <Row>
                    <Col sm={4}>
                        <NavItem>
                            <NavLink className="nav-link" to ='/appertizers'>
                                <FontAwesomeIcon icon="fa-solid fa-croissant" /> Appertizers
                            </NavLink>
                        </NavItem>
                    </Col>
                    <Col sm={4}>
                        <NavItem>
                            <NavLink className="nav-link text-danger" to ='/enteries'>
                                <FontAwesomeIcon icon="fa-solid fa-croissant" /> <strong>Enteries</strong>
                        </NavLink>
                        </NavItem>
                    </Col>
                    <Col sm={4}>
                        <NavItem>
                            <NavLink className="nav-link" to ='/dessert'>
                                <FontAwesomeIcon icon="fa-solid fa-croissant" /> Desserts
                            </NavLink>
                        </NavItem>
                    </Col>
                </Row>
                
            </Nav>
        </div>
            <Card className="my-4">
                <Row className='g-0'>
                    <Col className="col-sm-3 my-2">
                        <CardImg src="images/steak.png" className="col-6"/>
                    </Col>                        
                    <Col>
                        <CardBody className="col-auto">
                        <CardHeader>
                            <h4>Prime Rib Roast</h4>
                        </CardHeader>
                            <CardText>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien bibendum ac pharetra neque, hendrerit urna, enim, neque. Turpis dolor quisque vel risus convallis. Mattis sagittis pro</p>
                            </CardText>
                        </CardBody>
                    </Col>
                 </Row>
            </Card>

            <Card className="my-4">
                <Row className='g-0'>
                    <Col className="col-sm-3 my-2">
                        <CardImg src="images/steak.png" className="col-6"/>
                    </Col>                        
                    <Col>
                        <CardBody className="col-auto">
                        <CardHeader>
                            <h4>Prime Rib Roast</h4>
                        </CardHeader>
                            <CardText>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien bibendum ac pharetra neque, hendrerit urna, enim, neque. Turpis dolor quisque vel risus convallis. Mattis sagittis pro</p>
                            </CardText>
                        </CardBody>
                    </Col>
                 </Row>
            </Card>

            <Card className="my-4">
                <Row className='g-0'>
                    <Col className="col-sm-3 my-2">
                        <CardImg src="images/steak.png" className="col-6"/>
                    </Col>                        
                    <Col>
                        <CardBody className="col-auto">
                        <CardHeader>
                            <h4>Prime Rib Roast</h4>
                        </CardHeader>
                            <CardText>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien bibendum ac pharetra neque, hendrerit urna, enim, neque. Turpis dolor quisque vel risus convallis. Mattis sagittis pro</p>
                            </CardText>
                        </CardBody>
                    </Col>
                 </Row>
            </Card>

            
        </div>
    )

}