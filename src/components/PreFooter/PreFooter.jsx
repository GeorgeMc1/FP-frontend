import React from "react";
import { PreFooterContainer } from "./PreFooter.styles";
// import ImageStrapLine from "./ImageStrapLine";
import PreFooterLeft from "./PreFooterLeft";
import PreFooterRight from "./PreFooterRight";
import SocialsStrap from "./SocialsStrap";


const PreFooter = () => {


    return (

        <PreFooterContainer>
            {/* <ImageStrapLine /> */}
            <div id="column">
                <PreFooterLeft />
                <PreFooterRight />
            </div>
            <SocialsStrap />
        </PreFooterContainer>)
}

export default PreFooter