import axios from "axios";

const requets = axios.create({
    baseURL:'https://tiktok.fullstack.edu.vn/api/'
})

export const get = async (path , option={}) =>{
    const  reponse = await requets.get(path,option)
    return reponse.data
}
export default requets