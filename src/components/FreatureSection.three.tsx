import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function FreatureSectionThree() {
    return (
        <div className="max-w-screen-mk mx-auto flex flex-col acc:flex-row acc:gap-6 gap-[30px] md:mb-[45px] ">
            <div
                className=" flex w-full rounded-lg bg-[url('/assets/product-yx1-earphones/mobile/earphones-yx1-mobile.jpg')] sps:bg-[url('/assets/product-yx1-earphones/tablet/earphones-yx1-tablet.jpg')] md:bg-[url('/assets/product-yx1-earphones/desktop/earphones-yx1-desktop.jpg')]  bg-no-repeat bg-cover bg-center h-[200px] acc:h-auto  "
            >
            </div>
            <div
                className="bg-white-ec flex flex-col items-start justify-center h-full w-full rounded-lg"
            >
                <div className="px-[43px] md:px-[97px] acc:mb-[100px] mb-[39px]">
                    <h4 className="mb-[34px] acc:mt-[100px] mt-[39px]">yx1 earphones</h4>
                    <Button
                        asChild
                        variant="secondary" >
                        <Link to="/67aba52906c03bc37b566acb">
                            see product
                        </Link>
                    </Button >
                </div>
            </div>
        </div>
    )
}
