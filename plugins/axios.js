import axios from "axios"

const httpRequest = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/videos?part=id,snippet&id='
})

export default httpRequest