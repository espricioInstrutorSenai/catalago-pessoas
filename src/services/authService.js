import { api_auth } from "./api";

export async function loginRequest(email, password) {
    const response = await api_auth.post("/auth/login", {email, password});
    return response.data;
}

export async function getMeRequest() {
    const response = await api_auth.get("/auth/me");
    return response.data;
}