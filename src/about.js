import React from "react";

import { FcGraduationCap,FcMultipleDevices } from "react-icons/fc";
import html from'./html.png';
import css from'./css.png';
import bootstrap from'./bootstrap.png';
import javascript from'./javascript.png';
import react from'./react.png';



function About(){
    return(
     <div className="Aboutmain">
      
          <h1 className="heading">ABOUT <span>ME</span></h1>
       
      <div className="row">
       <div className="details">
         <h1>PERSONAL INFO</h1>
      <div className="box-container">
         <div className="box12">
             <h3><span>Name:</span> Ajith</h3>
             <h3><span>Age:</span> 23</h3>
             <h3><span>Email:</span> ajithjsx@gmail.com</h3>
             <h3><span>Address:</span> Arakkonam,Ranipet District,Pin-632510</h3>
      
         </div><br/>
         <div className="box12">
             <h3><span>Freelance :</span> Available</h3>
             <h3><span>Skill :</span> Front-End Developer</h3>
             <h3><span>Language :</span> Tamil, English</h3>
    
         </div>
       </div>
       </div>
       </div>
       <section className="skills">
             <h1 className="heading"><span>My</span> Skills</h1>
          <div className="box-container2">
             <div className="box">
                <img src={html} alt="htmlicon"/>
                <h3>HTML</h3>
             </div>
             <div className="box">
                <img src={css} alt="CSSicon"/>
                <h3>CSS</h3>
             </div>
             <div className="box">
                <img src={javascript} alt="JAVASCRIPTicon"/>
                <h3>JAVASCRIPT</h3>
             </div>
             <div className="box">
                <img src={react} alt="reacticon"/>
                <h3>REACT</h3>
             </div>
             <div className="box">
                <img src={bootstrap}alt="BOOTSTRAPicon"/>
                <h3>BOOTSTRAP</h3>
             </div>
          </div>
       </section>
       <section className="education">
            <h1 className="heading">My<span> Education</span></h1>
         <div className="box-container3">
            <div className="box">
               <i><FcGraduationCap/></i>
               <span>Jun 2015 - Apr 2017</span>
               <h3>Higher Secondary 12TH</h3>
               <p>I scored 55% on higher secondary board exam. And I am very much interested in computers, so I have taken the BCA degree at College</p>

           </div>
           <div className="box">
               <i><FcGraduationCap/></i>
               <span>Jun 2017 - Apr 2020</span>
               <h3>BCA </h3>
               <p>I have completed my BCA degree with 5.273 CGPA in Thiruvalluvar University,Vellore,Tmail Nadu, India.</p>

           </div>
           <div className="box">
               <i><FcMultipleDevices/></i>
               <span>Mar2023 - Aug 2023</span>
               <h3>Front-End Developer </h3>
               <p>I desingned some front-end templates. And I worked with CSS and BOOTSTRAP for designing UI.<br/>Then I am also worked in front-end fremeworks like
                React Js. I have done some small projects.</p>

           </div>

         </div>
       </section>
      </div>
    )
}

export default About;