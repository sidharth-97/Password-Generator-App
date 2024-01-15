import Api from "./axios";

export const Signup = async (data)=>{
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