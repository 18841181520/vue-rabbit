import { ref, onMounted } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import { getTopCategoryAPI } from "@/apis/category.js";

export function useCategory() {
  const route = useRoute()
  const categoryData = ref({})
  const getCategory = async (id = route.params.id) => {
    const res = await getTopCategoryAPI(id)
    categoryData.value = res.result
  }

  onMounted(() => getCategory())

  onBeforeRouteUpdate((to) => {
    getCategory(to.params.id)
  })

  return {
    categoryData
  }

}