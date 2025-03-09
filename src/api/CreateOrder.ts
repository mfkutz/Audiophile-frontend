import api from "../lib/axios"
import { isAxiosError } from "axios"
import { orderSchema, OrderType } from "@/types"
import { useRateLimitStore } from "@/store/useButtonStore"

const baseURL = import.meta.env.VITE_API_URL

export async function createOrder(formData: OrderType) {

    const { disableButton } = useRateLimitStore.getState()
    //validate data before send to backend
    const parsedOrder = orderSchema.safeParse(formData)
    if (!parsedOrder.success) {
        console.error("Error data", parsedOrder.error.format())
        throw new Error("Invalid data in form")
    }
    try {
        const { data } = await api.post(`${baseURL}/order`, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            if (isAxiosError(error) && error.response) {
                if (error.response.status === 429) {
                    disableButton(6 * 60 * 1000); // whait for 6 minutes
                }
                const customError = new Error(error.response.data.error) as Error & { status: number };
                customError.status = error.response.status;
                throw customError;
            }
            throw new Error("Failed to create order");
        }
    }
}

export async function getOrderById({ orderId }: { orderId: string }) {
    try {
        const { data } = await api(`${baseURL}/order/${orderId}`)
        const response = orderSchema.safeParse(data)
        if (response.success) {
            return response.data
        }
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            const customError = new Error(error.response.data.error) as Error & { status: number };
            customError.status = error.response.status;
            throw customError;
        }
        throw new Error("Failed to create order");
    }
}



