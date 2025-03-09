
import { productSchema } from "@/types"
import api from "axios"
import { isAxiosError } from "axios"

export async function getProduct() {

    const baseURL = import.meta.env.VITE_API_URL

    try {
        const { data } = await api(`${baseURL}/product`)
        const response = productSchema.safeParse(data)
        if (response.success) {
            return response.data
        } else {
            throw new Error("Invalid data")
        }
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}