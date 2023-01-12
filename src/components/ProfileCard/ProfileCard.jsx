
import React, { useState } from "react";
import { Container } from "../../css/common-styles.js";
import cogImg from "../../assets/images/OptionsCog.png"
import redCrossImg from "../../assets/images/redCross.png"
import { updateUser } from "../../utils"
import SaveImg from "../../assets/images/SaveImg.png"
import "../../css/profilePage.css"
const UserProfilePage = ({ loggedInUser, setLoggedInUser, jwt, setJWT }) => {

    const [updateKey, setUpdateKey] = useState();
    const [editing, setEditing] = useState();

    const userEdits = { ...loggedInUser };

    const onSaveEdit = async (element) => {
        try {
            let obj = {
                "username": loggedInUser.username,
                "key": element,
                "value": userEdits[element]
            }
            let res = await updateUser(obj, jwt);
            console.debug("save changes res ",res)
            let temp = loggedInUser;
            temp[element] = userEdits[element]
            setEditing(false)
            setUpdateKey();
        } catch (error) {

            console.log(error)
            return (
                <p>res.error</p>
            )
        }
    }

    const onCogClick = (element) => {
        setEditing(true);
        setUpdateKey(element);
    }

    const onCancelEdit = (element) => {
        setEditing(false);
        setUpdateKey();
        userEdits[element] = loggedInUser[element]
    }

    return (
        <Container id="userProfileCard">

            {
                Object.keys(loggedInUser).map((element, index) => {
                    console.log(element)
                    if (element.charAt(0) === "_") {
                        return null
                    } else {
                        if (updateKey === element) {
                            return (
                                <div key={index} className="cardRow">
                                    <p>{element.charAt(0).toUpperCase() + element.slice(1)}</p>
                                    <input type="text" defaultValue={(element === "password") ? null : loggedInUser[element]}
                                        onChange={(event) => {
                                            userEdits[element] = event.target.value
                                        }} />
                                    {editing
                                        ?
                                        <div id="icons">
                                            <img src={SaveImg} alt="save edit" onClick={(e) => { onSaveEdit(element) }} />
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
                                    {
                                        (element === "password") ? <p></p> : <p>{loggedInUser[element]}</p>
                                    }

                                    {editing
                                        ?
                                        null
                                        :
                                        <div id="icons">
                                            <img src={cogImg} alt="editCog" onClick={(e) => { onCogClick(element) }} />
                                        </div>
                                    }
                                </div>
                            )
                        }
                    }

                })
            }
            <button>Change Password</button>


        </Container>
    );
};
export default UserProfilePage;