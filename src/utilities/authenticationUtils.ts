export const isAuthenticated = async ():Promise<Boolean> => {

    let response = fetch("/auth/isAuthenticated", {method:"GET", credentials:"include"});

    let result = (await response).text();

    if (await result === "true"){
        return true;
    } 

    return false;
} 