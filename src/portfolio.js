import { useEffect } from "react";
import { FaRedo } from "react-icons/fa";
import londan from"./buslondon.jpeg";
import light from'./light-city.jpeg';
import street from "./street.jpeg";
import mountain from "./mountain.jpeg";
import fish from "./fish.jpeg";
import gitar from "./gitar.webp";


function Portfolio(){

       useEffect(() =>{
        window.scrollTo(0,0)
       },[]);

        return(
  <section className="portfolio">

               <h1 className="heading"><span>MY</span> WORK</h1>
          <div className="box-container">


               <div className="box">
                    <div className="subbox1">
                          <img src={light} alt="light"/>
                        <div className="content">
                            <h3>Project 01</h3>
                            <p>lorem dummy text industry</p>
                             <a href="#">Read more</a>
                        </div>
                    </div>
                </div>

                <div className="box">
                      <div className="subbox2">
                           <img src={street} alt="street"/>
                        <div className="content">
                           <h3>Project 02</h3>
                           <p>lorem typesetting industry</p>
                           <a href="#">Read more</a>
                        </div>
                     </div>
               </div>
                
                <div className="box">
                     <div className="subbox3">
                        <img src={mountain} alt="mountain"/>
                        <div className="content">
                             <h3>Project 03</h3>
                             <p>simply typesetting industry</p>
                             <a href="#">Read more</a>
                       </div>
                     </div>
                </div>


                <div className="box">
                     <div className="subbox5">
                          <img src={gitar} alt="gitar"/>
                        <div className="content">
                           <h3>Project 04</h3>
                           <p>printing typesetting info</p>
                           <a href="#">Read more</a>
                        </div>
                      </div>
                </div>
                    
          </div>
               
            
    </section>
            
        )
}

export default Portfolio;