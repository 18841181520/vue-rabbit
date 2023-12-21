import http from "@/utils/http.js";

export const getCheckoutAPI = () => {
    return http({
        url: '/member/order/pre'
    })
}

export const createOrderAPI = (data) => {
    return http({
        url: '/member/order',
        method: 'POST',
        data
    })
}