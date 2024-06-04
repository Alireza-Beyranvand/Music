import axios from "axios";

const URL = "http://localhost:9000";



export const AllMusic = () => {
    const url = `${URL}/music`;
    return axios.get(url)
};