import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '778572ca3052464a9c4c8a45007c43df'
    }
})