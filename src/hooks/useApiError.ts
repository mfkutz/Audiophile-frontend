import { useState } from "react";

export function useApiError() {
    const [apiError, setApiError] = useState<string | null>(null)

    const handleApiError = (error: Error & { status?: number }) => {
        if (error.status === 429) {
            setApiError("You've made too many requests. Please wait and try again later.");
        } else {
            setApiError(error.message || "An unexpected error occurred.");
        }
    }

    return { apiError, setApiError, handleApiError }
}