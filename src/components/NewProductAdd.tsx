import { Button } from "./ui/button";
import { ProductData } from "@/types";
import { formatCurrency, useGoBack } from "@/hooks/utils";
import { useCartStore } from "@/store/store";
import { useState } from "react";

type NewProductAddProps = {
    products: ProductData[],
    model?: string
}

export default function NewProductAdd({ products, model }: NewProductAddProps) {

    const prod = products.find(findId => findId._id === model)

    const goBack = useGoBack()

    const addToCart = useCartStore((state) => state.addToCart)

    const [quantity, setQuantity] = useState(1)

    const handleAddCart = () => {
        if (prod) {
            addToCart(prod, quantity)
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }

    return (
        <>
            <div className="max-w-screen-mk mx-auto flex flex-col md:flex-row justify-between gap-5 mt-[63px] sps:mt-[120px] md:mt-[160px] relative ">
                <div
                    className="absolute hover:underline hover:text-more-ec left-0 sps:top-[-60px] top-[-50px] md:top-[-78px] text-gray-text-prod text-[15px] hover:cursor-pointer"
                    onClick={goBack}
                >
                    Go Back
                </div>

                <div className="relative w-full h-[350px] md:h-auto rounded-lg">
                    <img
                        src={prod?.categoryImage.tablet}
                        alt={prod?.name}
                        className="w-full h-full object-cover rounded-lg md:hidden"
                    />
                    <img
                        src={prod?.categoryImage.desktop}
                        alt={prod?.name}
                        className="hidden md:block w-full h-full object-cover rounded-lg"
                    />
                </div>

                <div className=" rounded-lg flex justify-center text-left sps:text-center md:text-left md:justify-end w-full">

                    <div className=" max-w-[562px] md:max-w-[445px] mb-[78px] flex flex-col sps:items-center md:items-start  ">
                        <p className="font-normal text-[14px] leading-[19px] tracking-[10px] uppercase text-more-ec mt-[10px] sps:mt-[32px] md:mt-[78px]">new product</p>
                        <h2 className="mt-[27px] sps:mt-[15px] leading-[39px] sps:leading-[45px] max-w-[350px] text-[28px] sps:text-[40px]">{prod?.name}</h2>
                        <p className="mt-[22px] sps:mt-[33px] text-[15px] leading-[24.5px] mb-[23px] sps:mb-[32px] text-gray-text-prod ">
                            {prod?.description}
                        </p>

                        <div className="font-bold text-[18px]">
                            {prod?.price !== undefined ? formatCurrency(prod.price) : "Not available"}
                        </div>

                        <div className="flex items-center gap-4 mt-[42px]">
                            <div className="w-[120px] h-[48px] bg-white-ec flex flex-row items-center justify-between px-5">
                                <button
                                    className="hover:text-more-ec cursor-pointer px-2 text-[16px] font-bold text-black-cc opacity-40 hover:opacity-100"
                                    onClick={() => setQuantity((q) => q - 1)}
                                    disabled={quantity <= 1}
                                >-</button>
                                <div className="text-[13px] font-bold">{quantity}</div>
                                <button
                                    className="hover:text-more-ec cursor-pointer px-2 text-[16px] pt-[1px] font-bold text-black-cc opacity-40 hover:opacity-100"
                                    onClick={() => setQuantity((q) => q + 1)}
                                >+</button>
                            </div>
                            <Button
                                onClick={handleAddCart}
                                variant="default"
                            >
                                Add to Cart
                            </Button>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
