import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";


const social_icons = () => {
    return (
        <div className="social-icons">
            <a href="https://github.com/MukeshKaranam" className="social-icon"> <FaGithub/> </a>
            <a href="https://www.linkedin.com/in/mukesh-chowdary-karanam/" className="social-icon"> <FaLinkedinIn/> </a>


        </div>
    );
}
export default social_icons;