import axios from "axios";

const Api = axios.create({ baseURL:`${process.env.REACT_APP_AXIOS_URL}`,withCredentials:true });

export default Api;