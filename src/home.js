import { React, useEffect } from "react";
import ajith from"./20201231_162627.jpg";
// import{ Typewriter} from 'react-simple-typewriter';

export default function Home(){
    return(
       <section className="homemani">
        <div className="home">
             <img src={ajith} alt="profileimg" />
           <h2>Hi, I AM Ajith<br/><span>Front-End Developer</span></h2>
       
            <p>I have complet front-end developer course in real-time projects.<br/> 
                 Then I learned many things on myself in front-end.</p>
       
        </div>

        <button className="btn">About Me</button>
        {/* <div>
            <span><Typewriter word={['I\'m a front-end developer']} 
            loop={0}
            cursor
            typespeed={100}
            deletespeed={80}
            delayspeed={1000}
            /></span>
        </div> */}
       
       
       
       </section>

    )
}