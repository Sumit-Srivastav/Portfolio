import './ContactPage.css'
import Header from "../components/header";
import Footer from "../components/footer";
import Contact from "../components/contact";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSkype } from "react-icons/fa6";

import InstaQR from "../img/QR/instaQR.jpg"
import SkypeQR from "../img/QR/skypeQR.jpg"
import LinkedInQR from "../img/QR/LinkedInQR.svg"
import GitHubQr from "../img/QR/GitHub.svg"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)

const ContactPage = () => {

  useGSAP(()=>{
    const tl11=gsap.timeline()
    tl11.from(".contactPage-h",{
   y:100,
   opacity:0,
   duration:0.7,
      scrollTrigger:{
        trigger:".contactPage-h",
        scroll:"body",
        scrub:2,
        start:"top 95%",
        end:"top 80%"
      },
    }) 

    tl11.from(".skype, .insta, .git, .linkedIn",{
      y:50,
      opacity:0,
      duration:1,
         scrollTrigger:{
           trigger:".skype",
           scroll:"body",
           scrub:2,
           start:"top 90%",
           end:"top 70%"
         },
         stagger:1
       }) 
       tl11.from(".skype-h, .insta-h, .git-h, .linkedIn-h",{
        x:100,
        opacity:0,
        duration:1,
           scrollTrigger:{
             trigger:".skype-h",
             scroll:"body",
             scrub:2,
             start:"top 80%",
             end:"top 70%"
           },
           stagger:1
         }) 
         tl11.from(".skype-qr, .insta-qr, .git-qr, .linkedIn-qr ",{
          width:0,
          opacity:0,
          duration:1,
             scrollTrigger:{
               trigger:".skype-qr",
               scroll:"body",
               scrub:2,
               start:"top 55%",
               end:"top 70%"
             },
             stagger:1
           }) 
           tl11.from(".skype-scan, .insta-scan, .git-scan, .linkedIn-scan",{
           y:80,
            opacity:0,
            duration:1,
               scrollTrigger:{
                 trigger:".skype-scan",
                 scroll:"body",
                 scrub:2,
                 start:"top 85%",
                 end:"top 70%"
               },
               stagger:1
             }) 
  })
  return (
    <>
      <Header />
      <Contact />
      <div className="container">
        <div className="row pb-5">
          <h4 className="text-center contactPage-h">Media</h4>
          <div className="col-sm-6 col-xxl-3 col-md-6 col-lg-3   ">
            <div className="p-5">
              <div className="fs-2 text-center">
                <a href="https://join.skype.com/invite/r8RIIRVxeosO">
                <FaSkype className='skype'/>
                </a>
                <h5 className='skype-h'>Skype</h5>
              </div>
              <div className="QR">
                <img className="QR-img skype-qr w-100 pt-3" src={SkypeQR} />
              </div>
              <h5 className="text-center pt-3 skype-scan"> SCAN ME </h5>
            </div>
          </div>

          <div className="col-sm-6 col-xxl-3 col-md-6 col-lg-3 ">
            <div className="p-5">
              <div className="fs-2 text-center">
                <a href="https://www.instagram.com/sumit_srivasta_v?igsh=ZXl0bnB5b2lxNXFu&utm_source=qr" >
                  <FaInstagram className='insta' />
                </a>
                <h5 className='insta-h'>Instagram</h5>
              </div>
              <div className="QR">
                <img className="QR-img insta-qr w-100 pt-3" src={InstaQR} />
              </div>
              <h5 className="text-center pt-3 insta-scan"> SCAN ME </h5>
            </div>
          </div>

          <div className="col-sm-6 col-xxl-3 col-md-6 col-lg-3  ">
            <div className="p-5">
              <div className="fs-2 text-center">
                <a href="https://github.com/Sumit-Srivastav/">
                 
                  <FaGithub  className='git' />
                </a>
                <h5 className='git-h'>GitHub</h5>
              </div>
              <div className="QR">
                <img className='QR-img git-qr w-100 pt-3 text-center' src={GitHubQr} />
              </div>
              <h5 className="text-center  git-scan pt-3"> SCAN ME </h5>
            </div>
          </div>

          <div className="col-sm-6 col-xxl-3 col-md-6 col-lg-3  ">
            <div className="p-5">
              <div className="fs-2 text-center">
                <a href="https://www.linkedin.com/in/sumit-srivastav-9b21bb2b6" >
                  <FaLinkedin className='linkedIn'/>
                </a>
                <h5 className='linkedIn-h'>LinkedIn</h5>
              </div>
              <div className="QR text-center">
                <img className="QR-img linkedIn-qr w-100 pt-3" src={LinkedInQR} />
              </div>
              <h5 className="text-center linkedIn-scan pt-3"> SCAN ME </h5>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ContactPage;
