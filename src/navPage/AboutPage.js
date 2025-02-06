import Header from "../components/header";
import Footer from "../components/footer";
import About from "../components/about";
import Skills from "../components/skills";
import laugh from "../img/3d-cute-boy-laughing-png.webp"
import design from "../img/Logo.svg"
import "./AboutPage.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)

const AboutPage = () =>{
  const tl6=gsap.timeline()
  useGSAP(()=>{
    const tl10=gsap.timeline()
    tl10.from(".aboutPage-h",{
  y:100,
   opacity:0,
   duration:0.7,
      scrollTrigger:{
        trigger:".aboutPage-h",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 70%"}})
      
        tl10.from(".aboutPage-line",{
          x:100,
           opacity:0,
           duration:0.7,
              scrollTrigger:{
                trigger:".aboutPage-line",
                scroll:"body",
                scrub:2,
                start:"top 80%",
                end:"top 70%"}})

                
        tl10.from(".laughImg",{
        width:20,
       
           opacity:0,
           duration:0.7,
              scrollTrigger:{
                trigger:".laughImg",
                scroll:"body",
                scrub:2,
                start:"top 80%",
                end:"top 70%"}})
      
                tl10.from(".funfacts li",{
                y:-100,
                     opacity:0,
                     duration:1,
                        scrollTrigger:{
                          trigger:".funfacts",
                          scroll:"body",
                          scrub:2,
                          start:"top 70%",
                          end:"top 70%"},
                        stagger:1})        
                        
                        tl10.from(".design",{
                        rotate:360,
                        // width:0,
                               opacity:0,
                               duration:1,
                                  scrollTrigger:{
                                    trigger:".design",
                                    scroll:"body",
                                    scrub:2,
                                    start:"top 70%",
                                    end:"top 70%"},
                                  })  
      })
      
      
    return(<>
<Header/>
<About/>
<Skills/>
<div className="aboutPage pt-5">
<div className="container">
          <div className=" d-flex">
            <div className="fs-3 aboutPage-h">
              M<span className="fs-5">Y</span> - F<span className="fs-5">UN</span> - F<span className="fs-5">ACTS</span>
            </div>
            <div className="line aboutPage-line" id="line"></div>
          </div> 

          <div className="row">
          <div className="col-md-4 col-sm-6 col-12 laughImg ">
            <img className="w-100" src={laugh}/>
          </div>
            <div className="col-md-6 col-sm-6 col-12 py-4">
            <div className="mt-5 postition-relative funfacts">
                <li>I like winter more than summer</li>
                <li>I often bike with my friends</li>
                <li>I like pizza and maggi</li>
                <li>I don't have any siblings</li>
             
<img className="mt-5 design" src={design}/>
              
            </div>
            <div className=" dots"></div>
            </div>
            <div className="dots"></div>
          </div>
          </div>
</div>

<Footer/>
    </>)
}
export default AboutPage