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