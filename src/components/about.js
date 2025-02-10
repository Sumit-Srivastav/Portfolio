import "./about.css";
import dp2 from "../img/6uICaPG1fN-no-background.png";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const tl6=gsap.timeline()
  useGSAP(()=>{
    const tl6=gsap.timeline()
    tl6.from(".about-title",{
   y:100,
   opacity:0,
   duration:0.7,
      scrollTrigger:{
        trigger:".about-title",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 70%"
      },
    })
    tl6.from(".about-line",{
      y:-100,
      opacity:0,
      duration:1,
         scrollTrigger:{
          trigger:".about-line",
          scroll:"body",
          scrub:2,
          start:"top 80%",
          end:"top 70%"
        }
       })
    tl6.from(".about-heading",{
      x:-100,
      opacity:0,
      duration:1,
      scrollTrigger:{
        trigger:".about-heading",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 70%"
      },
       })
       tl6.from(".about-p",{
        y:100,
        opacity:0,
        duration:1,
        scrollTrigger:{
          trigger:".about-p",
          scroll:"body",
          scrub:2,
          start:"top 80%",
          end:"top 70%"
        },
         })
         tl6.from(".about-btn",{
          scale:2,
          opacity:0,
          duration:1,
          scrollTrigger:{
            trigger:".about-btn",
            scroll:"body",
            scrub:2,
            start:"top 99%",
            end:"top 90%"
          },
      })
      tl6.from(".dp2",{
        
        // width:20,
        opacity:0,
        duration:1,
        scrollTrigger:{
          trigger:".dp2",
          scroll:"body",
          scrub:2,
          start:"top 80%",
          end:"top 70%"
        },
    })

  })
  return (
    <>
      <section className="about-section py-5">
        <div className="container">
          <div className=" d-flex">
            <div className="fs-3 about-title">
              A<span className="fs-5 ">BOUTS</span>
            </div>
            <div className="line about-line"></div>
          </div>
          <div className="row py-5 ">
            <div className="col-sm-12 about-ist col-md-7 order-2 order-md-1 ">
              <h5 className="pb-2 about-heading"> Welcome to my portfolio! </h5>
              <p className="line-height about-p">
                I’m Sumit Srivastav, a versatile and passionate web developer
                who thrives on solving complex problems through creative and
                efficient solutions. With a background in both design and
                development, I’ve developed a unique approach that blends
                aesthetics with functionality. I specialize in building custom,
                responsive websites using modern front-end technologies like
                React , Bootstrap , and Tailwind CSS. My aim is to not only
                deliver websites that are visually appealing but also perform
                optimally and provide seamless user experiences across devices.
                I understand the importance of clean code, performance,
                scalability, and security, and these principles guide my work in
                every project I undertake. In addition to my technical skills,
                I’m always eager to learn from other developers and stay updated
                with the latest trends to ensure my solutions are innovative and
                future-proof.
              </p>
              <Link to="/about">
                <button className="button about-btn ">
                  Read More <GoArrowRight />{" "}
                </button>
              </Link>
            </div>
            <div className="justify-content-center d-flex align-items-center col-sm-12 col-md-5 order-1 order-md-2  ">
              <img className="dp2 " src={dp2} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
