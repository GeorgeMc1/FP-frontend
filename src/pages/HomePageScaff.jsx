
import "../css/homepage.css"
import { PageContainer } from "../css/common-styles"

import homepage from "../assets/images/Home-Page_scaf.png"
const HomepageScaff = () => {


    return (
        <PageContainer id="homepage">


            <div>
                <img className="temp" alt="temp" src={homepage} width="100%" position="absolute" top="0" />
            </div>

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
                        <img alt=""/>
                        <div >
                            text
                        </div>
                    </div>
                    <div  >
                        <img alt=""/>
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
                        <img alt=""/>
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
                            <div social icons>
                                <img alt=""/>
                                <img alt=""/>
                                <img alt=""/>
                                <img alt=""/>
                            </div>
                        </div>
                        <div  >
                            <div >
                                <p>text</p>
                            </div>
                            <div >
                                <img alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </PageContainer>

    );
};
export default HomepageScaff;