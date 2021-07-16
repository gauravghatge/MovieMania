import React from 'react'
import {Navbar,Form,FormControl,Button,Nav, NavbarBrand} from 'react-bootstrap'

function Navigate() {
    return (
        
         <Navbar collapseOnSelect expand="lg" style={{color:"white",backgroundColor:"black",}}>
            <NavbarBrand style={{fontSize:"2.7rem",fontFamily:"fantasy",textDecoration: "underline",color:"white"}} >MOVIEMANIA <span style={{fontSize:"1rem",textDecoration:"none"}}>with</span>
            <img className="ml-2" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"   
                    width="45"
                    height="45"
                    alt="logo"
                ></img></NavbarBrand>
            <Navbar.Toggle style={{borderColor:"black",backgroundColor:"white"}} aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
          
            <Nav className="NavLinkParent"style={{width:"100%",fontSize:"1.7rem"}} >
            <Nav.Link className="NavLink" style={{color:"white",margin:"auto 20px"}} href="/"> HOME</Nav.Link>
            <Nav.Link className="NavLink" style={{color:"white",margin:"auto 20px"}} href="/About"> About</Nav.Link>
            <Nav.Link className="NavLink" style={{color:"white",margin:"auto 20px"}} href="/Recommandations">Recommandations</Nav.Link>
            </Nav>
            <Button className="NavBut" style={{fontSize:"1.7rem"}} variant="outline-light " className="ml-auto">Login</Button>
            </Navbar.Collapse>
         </Navbar>
    )
}

export default Navigate
