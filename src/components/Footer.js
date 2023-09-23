import React from "react";
import { AiFillTwitterCircle } from 'react-icons/ai';
import { TfiYoutube } from 'react-icons/tfi';
import {FaFacebook } from 'react-icons/fa';
import "../styles/footer.css";
import { Link } from "react-router-dom";



const Footer =()=>{
    return(
        <div>
            
            <h6 id="footer">Footer</h6>
            <h2 id="fllow">𝐅𝐨𝐥𝐥𝐨𝐰 𝐮𝐬</h2>
           <Link to="https://twitter.com/"> <h2 id="twiter"><AiFillTwitterCircle/></h2></Link>
           <Link to="https://www.youtube.com/" ><h2 id="yout"><TfiYoutube /></h2></Link> 
            <Link to="https://www.facebook.com/"> <h2 id="faceb">< FaFacebook/></h2></Link>
        </div>
    )
}
export default Footer;