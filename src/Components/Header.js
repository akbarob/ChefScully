import { useState } from "react"
import { Navbar, NavbarBrand, NavItem, NavbarToggler, Nav, Button,Collapse  } from "reactstrap"
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

            

        </Navbar>

        
    </>
    )
    

}