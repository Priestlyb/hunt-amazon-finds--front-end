import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://huntamazonfinds.adaptable.app/"
})