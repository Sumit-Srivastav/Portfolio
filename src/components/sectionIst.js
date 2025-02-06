import "./sectionIst.css";
import dp from "../img/Image.svg"
import { GoArrowRight } from "react-icons/go";
import {Link } from "react-router-dom"
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
const SectionIst = () => {
  useGSAP(()=>{
    const tl1=gsap.timeline();
    tl1.from(".line1",
      {
        y:100,
        duration:1,
        opacity:0,
        stagger:1
      })
      tl1.from(".line2",
        {
          y:100,
          duration:1,
          opacity:0,
          stagger:1
        })
        tl1.from(".line3",
          {
            y:50,
            duration:0.7,
            opacity:0,
            stagger:1
          })
          tl1.from(".section1st-btn",
            {
              y:50,
              duration:0.7,
              opacity:0,
              stagger:1
            })
let tl2=gsap.timeline()
tl2.from(".section1-right",
  {
    x:50,
    duration:0.7,
    opacity:0,
    stagger:1
  })
            tl2.from(".dp",
              
              {
                x:-100,
                duration:0.7,
                opacity:0,
                stagger:1
              })
              tl2.from(".dots",
                {
                  x:-100,
                  duration:0.7,
                  opacity:0,
                  stagger:1
                })
                tl2.from(".nameLable",
                  {
                    x:100,
                    duration:0.7,
                    opacity:0,
                    stagger:1
                  })
                 
  })
  return (
    <>
      <div className="container">
        <div className="row py-5">
          <div className="section-1st-left col-sm-12 col-md-6  order-2 order-md-1  py-5">
          <h1 className="h3 line1">Hi , I'm <span className="shadow-effect h2">S<span className="fs-5">UMIT</span></span><span className="shadow-effect h2"> S<span className="fs-5">RIVASTAV</span></span></h1>


            <h2 className="heading line2">
           I am a
              <span className="subColor">  W<span className="subHeight subColor">EB</span> D
                <span className="subHeight subColor">ESIGNER</span>
              </span> and  <span className="subColor">F<span className="subHeight subColor">RONT</span></span>-<span className="subColor">E<span className="subHeight subColor">ND</span>
              <span className="subColor"> D<span className="subHeight subColor">EVELOPER</span></span></span>
            </h2>
            <p className="line3">To occupy a challenging position where I can successively contribute my skills as a professional and I would like to grow with the organization utilizing the best of my abilities.</p>
        
        <Link to="/contact"> <button className=" button section1st-btn">Contact me <GoArrowRight /></button></Link>

          </div>
          <div className="section1-right col-sm-12 col-md-6 order-1 order-md-2 text-center">
            <img className="dp" src={dp}/>
            <div className="dots"></div>
            <div className="nameLable">Sumit Srivastav</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SectionIst;
