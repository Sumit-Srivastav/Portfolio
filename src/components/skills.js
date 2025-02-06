import "./skills.css";
import boy from "../img/788b5beyahnmg7fdej9i19d2ouel.png"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)
const Skills = () => {
useGSAP(()=>{
  const tl4=gsap.timeline()
  const  scrollTriggerConfig={
    trigger:".skills-section",
    scroll:"body",
    scrub:2,
    start:"top 80%",
    end:"top 70%"
  }
 tl4.from(".skills-section",{
y:100,
opacity:0,
duration:0.7,
  scrollTrigger:scrollTriggerConfig,
 })
 tl4.from(".skill",{
  x:100,
  opacity:0,
  duration:0.7,
  scrollTrigger:scrollTriggerConfig,
   })
 tl4.from(".skill-line",{
  x:-100,
  opacity:0,
  duration:0.7,
  scrollTrigger:scrollTriggerConfig,
   })
   tl4.from(".boy",{
    x:100,
    opacity:0,
    duration:0.7,
    scrollTrigger:{
      trigger:".boy",
      scroll:"body",
      scrub:2,
      start:"top 70%",
      end:"top 70%"
    },
     })
     const tl5=gsap.timeline()
           tl5.from(".skills-box",{
      x:-100,
      opacity:0,
      duration:1,
      scrollTrigger:{
        trigger:".skills-box",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 70%"
      },
          stagger:1
       })
})
  return (
    <>
      <section className="skills-section pt-5">
        <div className="container">
          <div className=" d-flex">
            <div className="fs-3 skill">
              S<span className="fs-5">KILLS</span>
            </div>
            <div className="line skill-line"></div>
          </div>

          <div className="row pt-5">
            <div className="col-md-4  ">
                <img className="boy" src={boy}/>
            </div>

            <div className="col-md-8 py-5">

              <div className="row">

                <div className="col-md-4 ">
                  <div className="skills-box px-3">
                    <h5 className="py-2 skills-title ">Languages</h5>
                    <p className="">HTML , CSS , Java Script</p>
                  </div>
                </div>

                <div className="col-md-4 ">
                  <div className="skills-box px-3">
                    <h5 className="py-2 skills-title ">Databases</h5>
                    <p className="">SQL</p>
                  </div>
                  <br></br>
                  <div className="skills-box px-3">
                    <h5 className="py-2 skills-title ">Libraries</h5>
                    <p className="">React, Redux, FontAwesome, GSAP </p>
                  </div>
                </div>

                
                <div className="col-md-4 ">
                <div className="skills-box px-3">
                    <h5 className="py-2 skills-title  ">Frameworks</h5>
                    <p className="">Bootstrap, Tailwind CSS</p>
                  </div>
                  <br></br>
                  <div className="skills-box px-3">
                    <h5 className="py-2 skills-title ">Tools</h5>
                    <p className="">VSCode , Font Awesome , Git , Toast  </p>
                  </div>
                
               
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Skills;
