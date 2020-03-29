import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID V67IuiYLTlYS1zOrOQzUz1W-5Ix9hFNi06Fb2TvOlH0'
    }
});