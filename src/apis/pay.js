import http from "@/utils/http.js";

export const getOrderAPI = (id) => {
    return http({
        url: `/member/order/${id}`
    })
}