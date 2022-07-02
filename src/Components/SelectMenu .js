import { Nav, NavItem,  Row,Col, Navbar } from "reactstrap";
import { NavLink } from "react-router-dom";

export default function SelectMenu(){
    return(
        <div className=" mx-auto col-9 text-center my-4">
            <Nav navbar>
                <Row>
                    <Col xs={4}>
                        <NavItem>
                            <NavLink className="nav-link" to ='/appertizers'>
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
                            <NavLink className="nav-link" to ='/dessert'>
                                Desserts
                            </NavLink>
                        </NavItem>
                    </Col>
                </Row>
                
            </Nav>
        </div>
    )
}