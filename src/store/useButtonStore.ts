import { create } from "zustand";
import { persist } from "zustand/middleware";

type Store = {
    isButtonDisabled: boolean;
    expirationTime: number | null
    disableButton: (timeout: number) => void;
    checkIfExpired: () => void
};

export const useRateLimitStore = create<Store>()(
    persist(
        (set, get) => ({
            isButtonDisabled: false,
            expirationTime: null,
            disableButton: (timeout) => {
                const expirationTime = Date.now() + timeout //save future time
                set({ isButtonDisabled: true, expirationTime })
                setTimeout(() => {
                    set({ isButtonDisabled: false, expirationTime: null })
                }, timeout)
            },
            checkIfExpired: () => {
                const { expirationTime } = get()
                if (expirationTime && Date.now() > expirationTime) {
                    set({ isButtonDisabled: false, expirationTime: null })
                }
            }
        }),
        {
            name: "rate-limit-store"
        }
    )
)
