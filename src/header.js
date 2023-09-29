import React from "react";
import { Link } from "react-router-dom";
import { FcPortraitMode,FcBusinessman,FcHome,FcDribbble,
              FcPhoneAndroid,FcDeployment} from "react-icons/fc";

export default function Header () {

        return(
          
    <nav className="navbar2">
          
         <div className="submenu">
            
            <Link to="/" ><h3><i><FcHome/></i>HOME</h3></Link>
            <Link to="/about"><h3><i><FcBusinessman/></i>ABOUT</h3></Link>
            <Link to="/portfolio"><h3><i><FcDribbble/></i>PROJECTS</h3></Link>
            <Link to="/blogs"><h3><i><FcDeployment/></i>BLOGS</h3></Link>
            <Link to="/contact"><h3><i><FcPhoneAndroid/></i>CONTACT</h3></Link>
            
         </div>
    </nav>


        )
    }
