import { Container } from "react-bootstrap"
import portfolioSc from "../img/portfolioSc.png"
import GadgetsSc from "../img/gadgetsSc.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GadgetsSc2 from "../img/gadgetsSc2.png"
import GadgetsSc3 from "../img/gadgetsSc3.png"
import "./projects.css"
import React from "react";
import Slider from "react-slick";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger)
const Projects=()=>{
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
      };
     
  useGSAP(()=>{
    const tl12=gsap.timeline()
    tl12.from(".project-h",{
   y:100,
   opacity:0,
   duration:0.7,
      scrollTrigger:{
        trigger:".project-h",
        scroll:"body",
        scrub:2,
        start:"top 95%",
        end:"top 80%"
      },
    }) 
    tl12.from(".project-line",{
        x:100,
        opacity:0,
        duration:0.7,
           scrollTrigger:{
             trigger:".project-line",
             scroll:"body",
             scrub:2,
             start:"top 95%",
             end:"top 80%"
           },
         }) 
         tl12.from(".project-left",{
            width:0,
            opacity:0,
            duration:0.7,
               scrollTrigger:{
                 trigger:".project-left",
                 scroll:"body",
                 scrub:2,
                 start:"top 60%",
                 end:"top 70%"
               },
             }) 
             tl12.from(".project-right",{
               y:-100,
                opacity:0,
                duration:0.7,
                   scrollTrigger:{
                     trigger:".project-right",
                     scroll:"body",
                     scrub:2,
                     start:"top 60%",
                     end:"top 70%"
                   },
                 }) 
                 tl12.from(".sumit-portfolio",{
                    width:0,
                    opacity:0,
                    duration:0.7,
                       scrollTrigger:{
                         trigger:".sumit-portfolio",
                         scroll:"body",
                         scrub:2,
                         start:"top 60%",
                         end:"top 70%"
                       },
                     }) 
                     tl12.from(".visit",{
                       x:100,
                        opacity:0,
                        duration:0.7,
                           scrollTrigger:{
                             trigger:".visit",
                             scroll:"body",
                             scrub:2,
                             start:"top 60%",
                             end:"top 70%"
                           },
                         }) 
             tl12.from(".project-btn",{
               scale:2,
                opacity:0,
                duration:0.7,
                   scrollTrigger:{
                     trigger:".project-btn",
                     scroll:"body",
                     scrub:2,
                     start:"top 60%",
                     end:"top 70%"
                   },
                 }) 
})

    return(<>
        <section className="projects-section py-5">
        <div className="container">
          <div className=" d-flex">
            <div className="fs-3 project-h">
              P<span className="fs-5">ROJECTS</span>
            </div>
            <div className="line project-line "></div>
          </div>
          <div className="row gap-4 py-5">
            <div className="col-sm-5 project-container py-3 mx-auto ">
                <div className="py-3"><img className="w-100 project-left" src={portfolioSc}/></div>
                <div className="text-center sumit-portfolio">Portfolio</div>
                <div className="text-center visit mt-3"><a href="" className="button text-decoration-none text-light fw-bold">Visit</a></div>
            </div>


            <div className="col-sm-5 project-container py-3 mx-auto ">
                <div className="py-2">
                <div className="slider-container project-right py-1">
          <Slider {...settings}>
            <div>
              <img className="w-100" src={GadgetsSc}/>
            </div>
            <div>
              <img className="w-100" src={GadgetsSc2} />
            </div>
            <div>
              <img className="w-100" src={GadgetsSc3} />
            </div>
          </Slider>
        </div>
                
                </div>
                <div className="text-center sumit-portfolio">Gadgets</div>
                <div className="text-center visit mt-3"><a href="" className="button text-decoration-none text-light fw-bold">Visit</a></div>
            </div>
            
          </div>
          <Link to="/projects"> <button className=" button project-btn ">More Projects <GoArrowRight /></button></Link>
          </div>
     </section>
    </>)
}
export default Projects