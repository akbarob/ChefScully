import { Nav, NavItem,  Row,Col, Navbar } from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SelectMenu(){
    return(
        <div className="mx-auto col-8 text-center my-5">
            <Nav navbar>
                <Row>
                    <Col xs={4}>
                        <NavItem>
                            <NavLink className="nav-link" to ='/appertizers'>
                                <FontAwesomeIcon icon="fa-solid fa-croissant" /> Appertizers
                            </NavLink>
                        </NavItem>
                    </Col>
                    <Col xs={4}>
                        <NavItem>
                            <NavLink className="nav-link" to ='/enteries'>
                                <FontAwesomeIcon icon="fa-solid fa-croissant" /> Enteries
                        </NavLink>
                        </NavItem>
                    </Col>
                    <Col xs={4}>
                        <NavItem>
                            <NavLink className="nav-link" to ='/dessert'>
                                <FontAwesomeIcon icon="fa-solid fa-croissant" /> Desserts
                            </NavLink>
                        </NavItem>
                    </Col>
                </Row>
                
            </Nav>
        </div>
    )
}