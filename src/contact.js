
import { BiLogoGmail,BiSolidLocationPlus, BiLogoFacebookSquare,
  BiLogoInstagram, BiLogoLinkedinSquare} from "react-icons/bi";
import { FcCallback } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";


export default function Contact(){
        
    return(

     <>
         
        <div className="box">
           <p><i><BiSolidLocationPlus/></i>Arakkonam, Ranipet District, Pin-632510, Tamil Nadu, India</p>
           <p><i><BiLogoGmail/></i>alluajithak7@gmail.com</p>
           <p><i><FcCallback/></i>+91-994-423-1207</p>
         </div>
           
           <div className="inputbox">
             <input type="text" placeholder="name"/><br/>
             <input type="text" placeholder="number"/><br/>
             <input type="email" placeholder="mail"/>
          </div>
             <div className="shareicon">
                      <a href="https://instagram.com/black_spidy_x"><BiLogoInstagram/></a>
                      <a href="https://www.linkedin.com/in/ajith-r-2ba196286"><BiLogoLinkedinSquare/></a>
                      <a href="github.com/Ajithravi04"><BsGithub/></a>
                      <a href="#"><BiLogoFacebookSquare/></a>
             </div>
          <div className="inputbox2">
              <input type="text" placeholder="your message"/>
          </div>

           <button className="sendbtn" id="sendmail">Send </button>
         </>
    )
}