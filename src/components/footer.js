import "./footer.css"
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSkype } from "react-icons/fa6";
const Footer = () =>{
    
    return(
        <>
  <div className="footer pt-5">
    <div className="container">
        <div className="row">
            <div className="col-sm-8 py-3">
                <h3 className=" shadow footer-logo">S<span className="fs-6">UMIT</span></h3>
                <h6>Web designer and front-end developer</h6>
            </div>
            <div className="col-sm-4 py-3">
           
            <div className="row ">
            <h4 className="">Media</h4>
            <div className="col-3   fs-2 pb-3"><a href="https://www.linkedin.com/in/sumit-srivastav-9b21bb2b6"><FaLinkedin /></a></div>
               <div className="col-3 fs-2 pb-3"><a href="https://www.instagram.com/sumit_srivasta_v?igsh=ZXl0bnB5b2lxNXFu&utm_source=qr"><FaInstagram /></a></div>
               <div className="col-3  fs-2 pb-3"><a href="https://github.com/Sumit-Srivastav/"><FaGithub /></a></div>
               <div className="col-3  fs-2 pb-3"><a href="https://join.skype.com/invite/r8RIIRVxeosO"><FaSkype /></a></div>
            </div>
        </div>
        <h6 className="text-center pt-4">© Copyright 2025. Made by Sumit Srivastav
</h6>
        </div>
    </div>
  </div>
        </>
    )
}
export default Footer