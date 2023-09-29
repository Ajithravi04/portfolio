
import { FaRegCalendarAlt, FaRegUser,FaLink } from "react-icons/fa";
import blog1 from "./blog7.webp";
import blog2 from "./blog6.webp";
import blog3 from "./blog5.webp";
import blog5 from "./blog2.jpeg";
import { useEffect } from "react";

function Blogs(){
     
       useEffect(()=>{
         window.scrollTo(0,0)
       },[]);
   
    return(
      
  <div className="blogs">
               <h1 className="heading"><span>MY</span>BLOGS</h1>
       <div className="box-conta">

               <div className="box">
                    <div className="image">
                      <img src={blog1} alt="blog1"/>
                    </div>
                       <div className="content">
                           <div className="icons">
                               <a href="#"><i><FaRegCalendarAlt/></i> 25 april, 2023</a>
                               <a href="#"><i><FaRegUser/></i>By Admin</a>
                           </div>
                        </div>
                            <h3>blog title goes here.</h3>
                            <p>"London is the capital and largest city of England and the United Kingdom</p>
      
                </div>

           <div className="box">
                    <div className="image">
                         <img src={blog2} alt="blog1"/>
                    </div>
                 <div className="content">
                    <div className="icons">
                          <a href="#"><i><FaRegCalendarAlt/></i> 25 april, 2023</a>
                          <a href="#"><i><FaRegUser/></i>By Admin</a>
                    </div>
                 </div>
                   <h3>blog title goes here.</h3>
                   <p>"A road trip, sometimes spelled roadtrip, is a long-distance journey traveled.</p>
            
            </div>

             <div className="box">
                   <div className="image">
                       <img src={blog3} alt="blog1"/>
                   </div>
                     <div className="content">
                         <div className="icons">
                            <a href="#"><i><FaRegCalendarAlt/></i> 25 april, 2023</a>
                            <a href="#"><i><FaRegUser/></i>By Admin</a>
                         </div>
                     </div>
                           <h3>blog title goes here.</h3>
                           <p>"Tokyo is the largest urban economy in the world by gross domestic product</p>
           
              </div>         

            <div className="box">
                 <div className="image">
                        <img src={blog5} alt="blog1"/>
                 </div>
                 <div className="content">
                      <div className="icons">
                            <a href="#"><i><FaRegCalendarAlt/></i> 25 april, 2023</a>
                            <a href="#"><i><FaRegUser/></i>By Admin</a>
                      </div>
                 </div>
                        <h3>blog title goes here.</h3>
                        <p>"London is the capital and largest city of England and the United Kingdom</p>
           
             </div>


           
      </div>      
  </div>  
    )
}

export default Blogs;