import {Card, CardBody, CardImg, CardText, CardHeader, Row, Col, Breadcrumb, BreadcrumbItem, NavItem, Nav} from "reactstrap"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { auto } from "@popperjs/core"


function RenderDessert(props){
    return(
        <Card className="my-4">
                <Row className='g-0'>
                    <Col className="col-xs-3 my-2">
                        <CardImg src={props.item.img} className="col-6"/>
                    </Col>                        
                    <Col>
                        <CardBody className="col-auto">
                        <h5> {props.item.name}, {props.item.price}</h5>
                            <CardText>
                               {props.item.description}
                            </CardText>
                        </CardBody>
                    </Col>
                 </Row>
            </Card>
    )
}


export default function Dessert(props){
    console.log(props.dessert)
    const listDessert= props.dessert.map( item =>{
        return(
            <RenderDessert key={item.id} item={item}/>
        )
    })
    return(
        <div className="container">
            <Breadcrumb>
                <BreadcrumbItem><NavLink to="/home">Home</NavLink></BreadcrumbItem>
                <BreadcrumbItem active>Dessert</BreadcrumbItem>
            </Breadcrumb>
        <div className="mx-auto col-10 text-center my-4">

            <Nav navbar>
                <Row>
                    <Col xs={4}>
                        <NavItem>
                            <NavLink  className="nav-link " to ='/appertizers'>
                                Appertizers
                            </NavLink>
                        </NavItem>
                    </Col>
                    <Col xs={4}>
                        <NavItem>
                            <NavLink className="nav-link" to ='/enteries'>
                                 Enteries
                        </NavLink>
                        </NavItem>
                    </Col>
                    <Col xs={4}>
                        <NavItem>
                            <NavLink className="nav-link text-danger" to ='/dessert'>
                                 <strong>Desserts</strong>
                            </NavLink>
                        </NavItem>
                    </Col>
                </Row>
                
            </Nav>
        </div>
        <div>
        {listDessert}
        </div>
            

            
        </div>
    )

}