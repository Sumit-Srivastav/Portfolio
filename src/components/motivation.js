import './motivation.css'
import quotes from '../img/quotes.svg'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

const Motivation = () =>{
    const tl3=gsap.timeline()
    useGSAP(()=>{
        const tl3=gsap.timeline()
        tl3.from(".motivation-div",{
            y:100,
            duration:1,
            opacity:0,
        })
        tl3.from(".author",{
            y:100,
            duration:1,
            opacity:0
        })
        tl3.from(".quote",{
            x:-100,
            duration:1,
            opacity:0
        })
        tl3.from(".quote2",{
            x:100,
            duration:1,
            opacity:0
        })
    })
    
return(
    <>
    <div className='container'>
        <div className='row'>
            <div className='col-sm-8 mx-auto text-center'>
           <div className='motivation-div '> Your most unhappy customers are your greatest source of learning.
           <div className='quote'><img  className="w-100" src={quotes}/></div>
           <div className='quote2'><img  className="w-100" src={quotes}/></div></div>
           <div className='author'>Bill Gates</div>
          
            </div>
        </div>
        </div>
    </>
)
}
export default Motivation