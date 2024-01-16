import Api from "./axios";

export const signup = async (data)=>{
    try {
        const response = await Api.post("register", data)
        return response
    } catch (error) {
        console.log(error);
    }
}
export const login = async (data) => {
    try {
        const response = await Api.post("login", data)
        return response
    } catch (error) {
        console.log(error);
    }
}

export const logout = async () => {
    try {
        const response = await Api.post("logout")
        return response
    } catch (error) {
        console.log(error);
    }
}

export const savePassword = async (data) => {
    try {
        const response = await Api.post("passwords",data)
        return response
    } catch (error) {
        console.log(error);
    }
}