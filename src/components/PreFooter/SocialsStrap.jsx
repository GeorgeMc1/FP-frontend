import React from "react";
import fb from "../../assets/images/fb-icon.png"
import insta from "../../assets/images/instagram-icon.png"
import pint from "../../assets/images/pinterest-icon.png"
import youtube from "../../assets/images/youtube.png"
import "../../css/common.css"
const SocialsStrap = () => {


    return (
        <div className="socials" >
            <p id="v_center_text"> FOLLOW US! </p>
            <img alt="facebook" src={fb} />
            <img alt="instagram" src={insta} />
            <img alt="pinterest" src={pint} />
            <img alt="youtube" src={youtube} />          
        </div>

    )
}

export default SocialsStrap;