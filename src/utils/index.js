
import {writeCookie} from "../common"
export const getRecipiesFromApi = async (url) => {
    try {
        console.debug("starting getRecipiesFromApi \nurl paramater = ", url);
        let response = await fetch(url);
        console.debug(response)
        const data = await response.json();
        console.debug("returning data = ", data)
        return data;
    } catch (e) {
        console.error("Error getRecipiesFromApi(url)", url)
    }
}


//copied code

//obj passed in preformated to match required api createuser
export const createUser = async (obj) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/createuser`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj)
        });
        return await response.json();
    } catch (error) {
        console.log(error)
    }
}

//obj passed in preformated to match required api updateuser
export const updateUser = async (obj) => {
    try {
        console.log("update called",obj)
        const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/updateUser`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj)
        });
        return await response.json();
    } catch (error) {
        console.log(error)
    }
}

//obj passed in preformated to match required api deleteuser
export const deleteUser = async (obj) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/deleteUser`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj)
        });
        return await response.json();
    } catch (error) {
        console.log(error)
    }
}


export const authCheck = async (jwtToken) => {
    console.log("authCheck",jwtToken)
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/authCheck`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwtToken}`
            }
        })
        const data = await response.json();
        console.log("data",data);
        return data.username
    } catch (error) {
        console.log(error);
    }
}

export const loginUser = async (obj, setter,setJWT) => {
    try {
        console.log(obj)
        const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/loginuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        const data = await response.json()
        console.log("tokendata",data)
        setJWT(data.token)
        setter(data.username)
        writeCookie("jwt_token", data.token, 7)
    } catch (error) {
        console.log(error)
    }
}

