import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function useGoBack() {
    const navigate = useNavigate()
    return () => navigate(-1)
}

export function useSmoothScrollToTop(apiError: string | null) {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [location.pathname, apiError])
}

export function formatCurrency(amount: number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0, //see decimals
        maximumFractionDigits: 0
    }).format(amount).replace('$', '$ ') //add space
}

