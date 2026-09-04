import axios from "axios";

export const api_jsonfake = axios.create(
    {
        baseURL: "https://jsonplaceholder.typicode.com",
        timeout: 5000, 
    }
);

export const api_auth = axios.create(
    {
        baseURL: "http://localhost:3001/api",
        timeout: 5000
    }
);

api_auth.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem("@CatalogoPessoas:token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error)=>{
        return Promise.reject(error);
    }
);