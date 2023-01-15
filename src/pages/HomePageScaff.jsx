
import "../css/homepage.css"
import { PageContainer } from "../css/common-styles"

import homepage from "../assets/images/Home-Page_scaf.png"
import { useState } from "react";
const HomepageScaff = () => {
    const[togStatus,settogstatus] = useState(1);
    const ontoggle = () => {
        
      console.log(togStatus)  
        if (togStatus === 2) {
            settogstatus( 1)
        }else {
            settogstatus(togStatus+1)
        }
        return
    }

    return (
        <PageContainer id="homepage">

     
{/* add nothing above here */}      
{togStatus===1 ? 
            <div>
                <img className="temp" alt="temp" src={homepage} width="100%" position="absolute" top="0" />
            </div>
            :
            null}

{togStatus===2 ?
            <div id="demo">

                <div className="level1">
                    <div >
                        <div>
                            sign text
                        </div>
                        <div>
                            sign up button
                        </div>
                    </div >
                    <div >
                        <div>
                            sign text
                        </div>
                        <div>
                            sign up button
                        </div>
                    </div>
                </div>

                <div className="level1">
                    <p>most viewed</p>
                </div>

                <div className="level1">
                    <div >
                        <img alt="" />
                        <div >
                            text
                        </div>
                    </div>
                    <div  >
                        <img alt="" />
                        <div >
                            text
                        </div>
                    </div>
                    <div  >
                        <img alt="" />
                        <div >
                            text
                        </div>
                    </div>
                </div>

                <div className="level1">
                    spacer
                </div>

                <div className="level1">
                    <div >
                        <img alt="" />
                        <p> text</p>
                        <button />
                    </div>
                    <div >
                        <p> text</p>
                        <p> text</p>
                        <p> text</p>
                        <p> text</p>
                        <p> text</p>
                    </div>
                </div>
                <div className="level1">
                    <div >
                        <p> </p>
                        <div>
                            <div >
                                <img alt="" />
                                <img alt="" />
                                <img alt="" />
                                <img alt="" />
                            </div>
                        </div>
                        <div  >
                            <div >
                                <p>text</p>
                            </div>
                            <div >
                                <img alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
  :
  null}

{/* add nothing below here */}
<button onClick={ontoggle} >toggle</button>
        </PageContainer>

    );
};
export default HomepageScaff;