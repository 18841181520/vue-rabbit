import {defineStore} from "pinia";
import {ref, computed} from 'vue'
import {useUserStore} from './userStore.js'
import {insertCartAPI, findCartListAPI, delCartAPI} from "@/apis/cart.js";

export const useCartStore = defineStore("cart", () => {
        const cartList = ref([])
        const userStore = useUserStore()
        const isLogin = computed(() => userStore.userInfo.token)
        const addCart = async (goods) => {
            if (isLogin.value) {
                const {skuId, count} = goods
                await insertCartAPI({skuId, count})
                await getCartList()
            } else {
                const item = cartList.value.find((item) => goods.skuId === item.skuId)
                if (item) {
                    item.count += goods.count
                } else {
                    cartList.value.push(goods)
                }
            }

        }
        const delCart = async (skuId) => {
            if (isLogin.value) {
                await delCartAPI([skuId])
                await getCartList()
            } else {
                cartList.value = cartList.value.filter((item) => item.skuId !== skuId)
            }

        }
        const clearCart = () => {
            cartList.value = []
        }

        const getCartList = async () => {
            const res = await findCartListAPI()
            cartList.value = res.result
        }
        const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
        const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))
        const isAll = computed(() => cartList.value.every((item) => item.selected))

        const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
        const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))

        return {
            cartList,
            allCount,
            allPrice,
            isAll,
            selectedCount,
            selectedPrice,
            addCart,
            delCart,
            clearCart,
            getCartList
        }
    },
    {
        persist: true
    }
)