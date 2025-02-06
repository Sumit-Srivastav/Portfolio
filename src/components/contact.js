import "./contact.css"
import { GoArrowRight } from "react-icons/go";
import { FaSkype } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import {Link } from "react-router-dom"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)
const Contact = ()=>{
    const scrollTriggerConfig={
        trigger:".contact-heading",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 70%"
      }
      const tl7=gsap.timeline()
      useGSAP(()=>{
        const tl6=gsap.timeline()
        tl7.from(".contact-heading",{
       y:-100,
       opacity:0,
       duration:0.7,
          scrollTrigger:scrollTriggerConfig,
        })
        tl7.from(".contact-line",{
            x:-200,
            width:20,
            opacity:0,
            duration:2,
               scrollTrigger:{
                trigger:".contact-heading",
                scroll:"body",
                scrub:2,
                start:"top 40%",
                end:"top 70%"
              },
             })
             tl7.from(".contact-p",{
                y:100,
                opacity:0,
                duration:1,
                   scrollTrigger:{
                    trigger:".contact-p",
                    scroll:"body",
                    scrub:2,
                    start:"top 70%",
                    end:"top 70%"
                  },
                 })
                 tl7.from(".contact-btn",{
                  rotate:360,
                    opacity:0,
                    duration:1,
                       scrollTrigger:{
                        trigger:".contact-btn",
                        scroll:"body",
                        scrub:2,
                        start:"top 80%",
                        end:"top 70%"
                      },
                     })
                     tl7.from(".right-contact ",{
                        y:-100,
                          opacity:0,
                          duration:1,
                             scrollTrigger:{
                              trigger:".right-contact",
                              scroll:"body",
                              scrub:2,
                              start:"top 80%",
                              end:"top 70%",
                            },
                           })
                           tl7.from(".contact-h ",{
                            x:-100,
                              opacity:0,
                              duration:1,
                                 scrollTrigger:{
                                  trigger:".contact-h",
                                  scroll:"body",
                                  scrub:2,
                                  start:"top 45%",
                                  end:"top 70%",
                                },
                               })
                               tl7.from(".contact-p1 ",{
                                y:100,
                                  opacity:0,
                                  duration:1,
                                     scrollTrigger:{
                                      trigger:".contact-p1",
                                      scroll:"body",
                                      scrub:2,
                                      start:"top 50%",
                                      end:"top 70%",
                                    },
                                   })
                                   tl7.from(".contact-p2 ",{
                                    x:50,
                                      opacity:0,
                                      duration:1,
                                         scrollTrigger:{
                                          trigger:".contact-p2",
                                          scroll:"body",
                                          scrub:2,
                                          start:"top 45%",
                                          end:"top 70%",
                                        },
                                       })
    })
      
return(<>
    <section className="contact py-5">
        <div className="container">
        <div className=" d-flex">
            <div className="fs-3 contact-heading">
              C<span className="fs-5">ONTACT</span>
            </div>
            <div className="line contact-line"></div>
          </div>

            <div className="row">
<div className="col-md-6">
<p className="py-4 line-height contact-p">I’m interested in web development. However, if you have any other requests or questions, don’t hesitate to contact me. </p>
<Link to="/contact"> <button className=" button mb-5 contact-btn">Contact me <GoArrowRight /></button></Link>
</div>
<div className="col-md-6">
    <div className="right-contact col-xl-7 p-3">
        <h5 className="contact-h">Message me here</h5>
        <div className="d-flex contact-p1"><div className="fs-2"><FaSkype /> </div><p className="pt-3 ">live:.cid.485a679306ca9af7</p></div>
        <div className="d-flex contact-p2"><div className="fs-2"><MdEmail /></div><p className="pt-3 ">er.sumit.srivastav.002@gmail.com</p></div>
    </div>
</div>

            </div>
        </div>
    </section>
</>)
}
export default Contact 