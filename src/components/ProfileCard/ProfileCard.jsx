
import React, { useState } from "react";
import { Container } from "../../css/common-styles.js";
import cogImg from "../../assets/images/OptionsCog.png"
import redCrossImg from "../../assets/images/redCross.png"
import { updateUser, deleteUser } from "../../utils"
import SaveImg from "../../assets/images/SaveImg.png"

const UserProfilePage = ({ loggedInUser, setLoggedInUser, jwt, setJWT }) => {
   
    const [updateKey, setUpdateKey] = useState();
    const [editing, setEditing] = useState();
    const [errMsg, setErrorMsg] = useState();
    const userEdits = { ...loggedInUser };
    if (!loggedInUser) {
        window.location.replace('/login');
        return;
    }

    const onDeleteHandler = async (e) => {
        try {
            let obj = {
                username: loggedInUser.username
            }
            console.log("ondeletehandler", obj, jwt)
            let res = await deleteUser(obj, jwt);
            console.log("passed to here", res)
            if (res.success) {
                setJWT();
                setLoggedInUser();
                console.log("passest set states")
                //window.location.replace("/")
            }
            console.log(res)
        } catch (error) {
            setErrorMsg(error)
        }

    }
    const onSaveEdit = async (element) => {
        try {
            //format obj from element(user key) clicked using userEdits state value
            let obj = {
                "username": loggedInUser.username,
                "key": element,
                "value": userEdits[element]
            }
            //try update
            let res = await updateUser(obj, jwt);
            console.debug("save changes res ", res)
            //if message sent
            if (res.message) {
                //dynamically chance loggedInUsers data
                //this updates loggedInUser too!!!
                let temp = loggedInUser;
                temp[element] = userEdits[element]
                //clear any outstanding state error messages
                setErrorMsg()
            }
            //if error form update attempt set state error message
            if (res.error) {
                console.log("res error", res.error)
                setErrorMsg(res.error)
            }

            //update was attempted so close edit icons
            setEditing(false)
            //clear the states memory of what cog - field was requested to edit
            setUpdateKey();
        } catch (error) {
            //set state error message
            setErrorMsg(error)
            console.log(error)
            return (
                <p>res.error</p>
            )
        }
    }

    const onCogClick = (element) => {
        console.log("cog click",element)
        setEditing(true);
        setUpdateKey(element);
    }

    const onCancelEdit = (element) => {
        setEditing(false);
        setUpdateKey();
        userEdits[element] = loggedInUser[element]
    }

    return (
        <Container>
            {/* display any error messages form failed update using state variable */}
            <div className="error"> {errMsg}</div>
            <Container id="userProfileCard">
                {
                    //map user objects
                    Object.keys(loggedInUser).map((element, index) => {
                        //ignore keys with starting _
                        if (element.charAt(0) === "_" || element === "favRecipes" || element === "books") {
                            return null
                        } else {
                            //if the currentent element being mapped is the same as the one saved by edit cogs onclick
                            if (updateKey === element) {
                                return (
                                    <div key={index} className="cardRow">
                                        {/* display emelemnts key */}
                                        <p >{element.charAt(0).toUpperCase() + element.slice(1)}</p>
                                        {/* //display elements value if not password */}
                                        <input type="text" defaultValue={(element === "password") ? null : loggedInUser[element]}
                                            onChange={(event) => {
                                                userEdits[element] = event.target.value
                                            }} 
                                            
                                            />
                                        {/* if state has editing true */}
                                        {editing
                                            ?
                                            //display save and cancel icons
                                            <div id="icons">
                                            <button className="noButtonShow" type="submit">  <img src={SaveImg} alt="save edit" onClick={(e) => { onSaveEdit(element) }} /></button>  
                                            <button className="noButtonShow"type="submit">  <img src={redCrossImg} alt="cancel edit cog" onClick={(e) => { onCancelEdit(element) }} /></button>
                                            </div>
                                            :
                                            // else display edit cog icons
                                            <div id="icons">
                                            <button className="noButtonShow" type="submit">  <img id="cogIcon" src={cogImg} alt="editCog" onClick={(e) => { onCogClick(element) }} /></button>
                                            </div>
                                        }
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={index} className="cardRow">
                                        {/* display currently mapped items key */}
                                        <p >{element.charAt(0).toUpperCase() + element.slice(1)}</p>
                                        {
                                            // if current element in map is password display empty <P> else keys state saved value
                                            (element === "password") ? <p onClick={(e) => { onCogClick(element) }}></p> : <p onClick={(e) => { onCogClick(element) }}>{loggedInUser[element]}</p>
                                        }

                                        {/* if somethings being eddited - icons will be displayed according to icon sets above 

                                        if editing */}
                                        {editing
                                            ?
                                            //dont display icons
                                            null
                                            :
                                            //else display editcog icon
                                            <div id="icons">
                                            <button className="noButtonShow" type="submit"> <img id="cogIcon" src={cogImg} alt="editCog" onClick={(e) => { onCogClick(element) }} /></button>
                                            </div>
                                        }
                                    </div>
                                )
                            }
                        }
                    })
                }
                <div className="deleteButton" onClick={(e) => onDeleteHandler()}>Delete Account</div>
            </Container>

           

        </Container>
    );
};
export default UserProfilePage;