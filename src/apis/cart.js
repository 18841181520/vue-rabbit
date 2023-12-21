import http from "@/utils/http.js";

export const insertCartAPI = ({skuId, count}) => {
    return http({
        url: '/member/cart',
        method: 'POST',
        data: {
            skuId,
            count
        }
    })
}

export const delCartAPI = (ids) => {
    return http({
        url: '/member/cart',
        method: 'DELETE',
        data: {
            ids
        }
    })
}

export const findCartListAPI = () => {
    return http({
        url: '/member/cart'
    })
}

export const mergeCartAPI = (data) => {
    return http({
        url: 'member/cart/merge',
        method: 'POST',
        data
    })
}