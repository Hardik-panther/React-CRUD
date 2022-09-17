import axios from 'axios'

async function axios_API(method, url, data, option) {

    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("token")

    switch (method) {
        case "get":
            return axios.get(url,data,option)
        case "post":
            return axios.post(url, data, option)
    }
}

export default {
    get:(url, data =[], option = {}) =>{
        return axios_API('post', url,data,option)
    },
    post: (url, data = [], option = {}) => {
        return axios_API('post', url, data, option)
    }
}