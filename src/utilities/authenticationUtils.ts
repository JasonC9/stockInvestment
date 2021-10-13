export const isAuthenticated = async ():Promise<Boolean> => {

    let response = fetch("/auth/isAuthenticated", {method:"GET", credentials:"include"});

    let result = (await response).text();

    // console.log(await result);

    if (await result === "true"){
        return true;
    } 

    return false;
} 

export const logout = async ():Promise<Boolean> => {
    let response = fetch("/auth/logout", {method:"GET", credentials:"include"});

    let result = (await response).text();

    console.log(await result);

    if (await result === "true") {
        return true;
    }

    return false;
}