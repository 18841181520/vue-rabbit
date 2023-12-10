import http from "@/utils/http.js";

export function getBannerAPI(){
    return http({
        url:"home/banner"
    })
}


export const findNewAPI = () => {
    return http({
        url:'/home/new'
    })
}

export const getHotAPI = () => {
    return http({
        url:'/home/hot'
    })
}