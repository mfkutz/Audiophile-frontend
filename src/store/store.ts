import { create } from "zustand";
import { persist } from "zustand/middleware";
import { MinimalProductData, ProductData } from "@/types";

type CartItem = {
    product: MinimalProductData;
    quantity: number;
};

type CartState = {
    cart: CartItem[];
    addToCart: (product: ProductData, quantity?: number) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
    getTotalProducts: () => number
    getTotalPrice: () => number
    updateQuantity: (id: string, quantity: number) => void
};

// Store with persist
export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            cart: [],

            // Add to cart
            addToCart: (product, quantity = 1) => {
                set((state) => {
                    const existingItem = state.cart.find((item) => item.product._id === product._id);
                    if (existingItem) {
                        return {
                            cart: state.cart.map((item) =>
                                item.product._id === product._id
                                    ? { ...item, quantity: item.quantity + quantity }
                                    : item
                            ),
                        };
                    }
                    //save minimal
                    const minimalProduct: MinimalProductData = {
                        _id: product._id,
                        name: product.name,
                        price: product.price,
                        image: product.image
                    }
                    return { cart: [...state.cart, { product: minimalProduct, quantity }] };
                });
            },

            // Delete by ID
            removeFromCart: (id) => {
                set((state) => ({
                    cart: state.cart.filter((item) => item.product._id !== id),
                }));
            },

            // Empty cart
            clearCart: () => set({ cart: [] }),

            //get total quantity in the cart
            getTotalProducts: () => {
                return get().cart.reduce((acc, item) => acc + item.quantity, 0)
            },

            getTotalPrice: () => {
                return get().cart.reduce((acc, item) => acc + (item.quantity * (item.product.price)), 0)
            },

            //update quantity from + or -
            updateQuantity: (id, quantity) => {
                set((state) => ({
                    cart: state.cart
                        .map((item) =>
                            item.product._id === id
                                ? { ...item, quantity: Math.max(item.quantity + quantity, 0) }
                                : item
                        )
                        .filter((item) => item.quantity > 0),
                }));
            },
        }),
        {
            name: "cart-storage",
        }
    )
);


