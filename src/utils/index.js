import { writeCookie } from "../common";

export const getRecipiesFromApi = async (url) => {
	try {
		console.log("starting getRecipiesFromApi \nurl paramater = ", url);
		let response = await fetch(url);
		console.log(response);
		const data = await response.json();
		console.log("returning data = ", data);
		return data;
	} catch (e) {
		console.error("Error getRecipiesFromApi(url)", url);
	}
};

//copied code

//obj passed in preformated to match required api createuser
export const createUser = async (obj) => {
	try {
		const response = await fetch(
			`${process.env.REACT_APP_REST_API_URL}/createuser`,
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(obj)
			}
		);
		return await response.json();
	} catch (error) {
		console.log(error);
	}
};

//obj passed in preformated to match required api updateuser
export const updateUser = async (obj, token) => {
	try {
		console.log("update called", obj);
		const response = await fetch(
			`${process.env.REACT_APP_REST_API_URL}/updateUser`,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${token}`
				},
				body: JSON.stringify(obj)
			}
		);
		return await response.json();
	} catch (error) {
		console.log(error);
	}
};

//obj passed in preformated to match required api deleteuser
export const deleteUser = async (obj,jwtToken) => {
	try {
		console.log("delete user jwt",jwtToken,obj)
		const response = await fetch(
			`${process.env.REACT_APP_REST_API_URL}/deleteUser`,
			{
				method: "DELETE",
				headers: { "Content-Type": "application/json","Authorization": `Bearer ${jwtToken}` },
				body: JSON.stringify(obj)
			}
		);
		let res=  await response.json();
		console.log(res);
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const authCheck = async (jwtToken) => {
	console.log("authCheck", jwtToken);
	try {
		const response = await fetch(
			`${process.env.REACT_APP_REST_API_URL}/authCheck`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${jwtToken}`
				}
			}
		);
		const data = await response.json();
		console.log("data", data);
		const callResponse = await readUser(jwtToken, data.username);
		console.log("the callResponse found is:", callResponse);
		if (callResponse.users.length === 1) {
			return callResponse.users[0];
		}
		// return data.username;
	} catch (error) {
		console.log(error);
	}
};

export const loginUser = async (obj, setJWT, setter) => {
	try {
		console.log(obj);
		console.log(process.env.REACT_APP_REST_API_URL);
		const response = await fetch(
			`${process.env.REACT_APP_REST_API_URL}/loginuser`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(obj)
			}
		);
		const data = await response.json();
		console.log("tokendata", data);
		setJWT(data.token);
		const callResponse = await readUser(data.token, data.username);
		console.log("the callResponse found is:", callResponse);
		if (callResponse.users.length === 1) {
			setter(callResponse.users[0]);
			writeCookie("jwt_token", data.token, 7);
		}
	} catch (error) {
		console.log(error);
	}
};

export const readUser = async (token, user) => {
	try {
		const response = await fetch(
			`${process.env.REACT_APP_REST_API_URL}/readUser`,
			{
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${token}`
				},
				method: "POST",
				body: JSON.stringify({
					"username": user
				})
			}
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};
