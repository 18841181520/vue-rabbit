import http from "@/utils/http.js";

export const loginAPI = ({account, password}) => {
    return http({
        url: "/login",
        method: "POST",
        data: {
            account,
            password
        }
    })
}