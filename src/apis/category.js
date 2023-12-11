import http from "@/utils/http.js";

export const getTopCategoryAPI = (id) => {
    return http({
        url: '/category',
        params: {
            id
        }
    })
}