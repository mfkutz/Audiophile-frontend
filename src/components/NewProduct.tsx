import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ProductData } from "@/types";

type HeroProps = {
    products: ProductData[]
    model: string
}

export default function NewProduct({ products, model }: HeroProps) {
    const prod = products.find(findId => findId._id === model)
    return (
        <div className="max-w-screen-mk mx-auto flex flex-col md:flex-row justify-between gap-5 mt-[63px] sps:mt-[120px] md:mt-[160px] ">

            <div className="relative w-full h-[350px] md:h-auto rounded-lg">
                <img
                    src={prod?.categoryImage.tablet}
                    alt="Product"
                    className="w-full h-full object-cover rounded-lg md:hidden"
                />
                <img
                    src={prod?.categoryImage.desktop}
                    alt="Product"
                    className="hidden md:block w-full h-full object-cover rounded-lg"
                />
            </div>

            <div className=" rounded-lg flex justify-center text-center md:text-left md:justify-end w-full">

                <div className=" max-w-[562px] md:max-w-[445px] mb-[105px] flex flex-col items-center md:items-start   ">
                    <p className="font-normal text-[14px] leading-[19px] tracking-[10px] uppercase text-more-ec mt-[10px] sps:mt-[32px] md:mt-[110px]">new product</p>
                    <h2 className="mt-[27px] sps:mt-[15px] leading-[39px] sps:leading-[45px] max-w-[350px] text-[28px] sps:text-[40px]">{prod?.name}</h2>
                    <p className="mt-[22px] sps:mt-[33px] text-[15px] leading-[24.5px] mb-[23px] sps:mb-[43px] text-gray-text-prod">
                        {prod?.description}
                    </p>
                    <Button
                        asChild
                        variant="default"
                    >
                        <Link to={`/${model}`}>see product</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
