export const writeCookie = (key,value,days=1)=>{
    let expireDate = new Date();
    expireDate.setDate(expireDate.getDate()+days);
    let cookie = document.cookie = key + "=" + value + "; expires="+expireDate.toGMTString() +"; paths=/"
    return cookie;
}

export const getCookie = (cookieName) =>{
    const re = new RegExp(`(?<=${cookieName}=)[^;]*`)
    try {
        let cookie=document.cookie.match(re)[0];
        return cookie;
    } catch (error) {
        console.log("cookie not found");
        return false
    }

}