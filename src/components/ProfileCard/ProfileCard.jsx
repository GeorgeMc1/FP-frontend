
import React, { useState } from "react";
import { Container } from "../../css/common-styles.js";
import cogImg from "../../assets/images/OptionsCog.png"
import redCrossImg from "../../assets/images/redCross.png"

import SaveImg from "../../assets/images/SaveImg.png"
import "../../css/profilePage.css"
const UserProfilePage = ({ loggedInUser, setLoggedInUser, jwt, setJWT }) => {

    const [updateKey, setUpdateKey] = useState();
    const [userChanges, setUserChanges] = useState(loggedInUser);

    const userEdits = loggedInUser;
    const [editing, setEditing] = useState();

    console.log(loggedInUser);

    const onCogClick = (element) => {
        setEditing(true);
        console.log("element clciked", element);
        setUpdateKey(element);
    }

    const onCancelEdit = () => {
        setEditing(false);
        setUpdateKey();
    }
    console.log(userEdits)
    return (
        <Container id="userProfileCard">

            {
                Object.keys(loggedInUser).map((element, index) => {
                    { console.log(element) }

                    {
                        if (element.charAt(0) === "_" || element === "password") {
                            return null
                        } else {
                            if (updateKey === element) {
                                return (
                                    <div key={index} className="cardRow">
                                        <p>{element.charAt(0).toUpperCase() + element.slice(1)}</p>
                                        <input type="text" defaultValue={loggedInUser[element]}
                                            onChange={(event) => {

                                                userEdits[element] = event.target.value
                                            }} />
                                        {editing
                                            ?
                                            <div id="icons">
                                                <img src={SaveImg} alt="save edit" onClick={(e) => { onCancelEdit(element) }} />
                                                <img src={redCrossImg} alt="cancel edit cog" onClick={(e) => { onCancelEdit(element) }} />
                                            </div>
                                            :
                                            <div id="icons">
                                                <img src={cogImg} alt="editCog" onClick={(e) => { onCogClick(element) }} />
                                            </div>
                                        }
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={index} className="cardRow">
                                        <p>{element.charAt(0).toUpperCase() + element.slice(1)}</p>
                                        <p>{loggedInUser[element]}</p>
                                        {editing
                                            ?
                                            <div id="icons">

                                            </div>
                                             :
                                            <div id="icons">
                                                <img src={cogImg} alt="editCog" onClick={(e) => { onCogClick(element) }} />
                                            </div>
                                        }
                                    </div>
                                )
                            }
                        }

                    }

                })
            }
            <div id="underLine"></div>
            <button>Change Password</button>


        </Container>
    );
};
export default UserProfilePage;