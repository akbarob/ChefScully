import { useState } from "react"
import { Navbar, NavbarBrand, NavItem, NavbarToggler, Nav, Button,Collapse,Modal, ModalHeader, ModalBody,ModalFooter,Form,Row,Col, Label,Input,FormGroup  } from "reactstrap"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Header(){

    const[open, setOpen] = useState(false)
    function toggleNav(){
        setOpen(prevstate => !prevstate)
    }

    const[ModalOpen,  setModalOpen]=useState(false)
    function toggleModal(){
        setModalOpen(prevState => !prevState)
    }

    function handleSubmit(value){
        alert(value.username + "welcome")
        toggleModal()
    }
    return(
        <>
        <Navbar dark className="chef shadow " expand ="md">
            <NavbarBrand href="/">
                <img src="images/chefScullyLogo.png" width={35} height={35} alt="chef Scully logo"/>
            </NavbarBrand>

            <NavbarToggler onClick={toggleNav}/>

            <Collapse isOpen={open} navbar className='ml-auto'>
                <Nav navbar className='ml-auto'>
                    <NavItem >
                       <NavLink className="nav-link" to='/home'>
                       <FontAwesomeIcon icon="fa-solid fa-home " /> Home
                      </NavLink>
                   </NavItem>
                   <NavItem>
                       <NavLink className="nav-link" to='/about'>
                            <FontAwesomeIcon icon='fa-solid fa-info '/> About
                       </NavLink>
                   </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to='/menu'>
                            <FontAwesomeIcon icon="fa-solid fa-bars" /> Menu
                            </NavLink>
                           </NavItem>
                           <NavItem>
                               <NavLink className="nav-link" to='/contact'>
                               <FontAwesomeIcon icon="fa-solid fa-address-book" /> Contact
                               </NavLink>
                           </NavItem>
                    </Nav>
                    
                    <Nav className='ms-auto'>
                        <NavItem>
                            <Button  block outline onClick={toggleModal}>
                                <FontAwesomeIcon icon='fa-solid fa-sign-in'/> LOGIN
                            </Button>
                        </NavItem>

                    </Nav>
                    </Collapse>

                    <Modal isOpen={ModalOpen}>
                        <ModalHeader>
                                <h4>L O G I N</h4>
                        

                        </ModalHeader>
                        <ModalBody>
                            <Form onSubmit={()=> handleSubmit()}>
                                <FormGroup>
                                    <Label for="username"> Username
                                    <Input type="text"/>
                                    </Label>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password"> Password
                                    <Input type="password"/>
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check for="agree"> 
                                    <Input type="checkbox" className="col-10"/> Keep Me Signed-in?
                                    </Label>
                                </FormGroup>
                                <hr/>

                            </Form>
                        </ModalBody>
                            <Row>
                            <Button  type="submit" className="col-3 offset-4 bg-success"> Login</Button>
                            <Button type="close" className="col-3 offset-1 bg-danger outline" onClick={toggleModal}>Cancel</Button>

                            </Row>
                    </Modal>

        </Navbar>

        
    </>
    )
    

}