import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
const Header = () =>{

useGSAP(()=>{
  let tl=gsap.timeline()
  tl.from(".logo",{
    y:-100,
    duration:0.7,
    opacity:0,

  })
  tl.from(".nav-right",{
    y:-100,
    duration:0.7,
    opacity:0,
    stagger:1
  })  
})

    return(
        <>
<div className='container-fluid'>

<Navbar collapseOnSelect expand="lg" className="">
<Container>
        <Navbar.Brand href="#home" className='logo'>
        <div className='box-animation'>S<span>UMIT</span> S<span>RIVASTAV</span></div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='icon mt-3'  />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="nav-right ms-auto pt-3"> 
        <Link to="/" className='nav-container text-dec'><div className='nav-element' id="home">Home</div></Link>
           <Link to="/projects" className=' nav-container text-dec'><div className='nav-element' id="project">Projects</div></Link>
         <Link to="/skills" className='nav-container  text-dec'><div className='nav-element ' id="skill">Skills</div></Link>
      <Link to="/about" className='nav-container  text-dec'> <div className='nav-element' id="about">About</div></Link>
       <Link to="/contact" className=' nav-container text-dec'> <div className='nav-element' id="contact">Contact</div></Link>
  
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    
     
</div>

        </>
    )
}
export default Header
