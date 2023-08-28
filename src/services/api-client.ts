import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f9de817d80f64773a8060d9c15278817'
    }
})