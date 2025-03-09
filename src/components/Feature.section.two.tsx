import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function FeatureSectionTwo() {
    return (
        <div className="max-w-screen-mk mx-auto bg-[url('/assets/product-zx9-speaker/mobile/speaker-zx7-mobile.jpg')] acc:bg-[url('/assets/product-zx9-speaker/tablet/speaker-zx7-tablet.jpg')] md:bg-[url('/assets/product-zx9-speaker/desktop/speaker-zx7-desktop.jpg')] rounded-lg bg-no-repeat bg-cover md:mb-[45px] mb-[30px]">
            <div className="flex flex-col items-start justify-center h-full py-24 px-[25px] acc:px-[64px] md:px-[98px]">
                <h4 className="mb-[34px] mt-[5px]">zx7 speaker</h4>
                <Button
                    asChild
                    variant="secondary" >
                    <Link to="/67aba599216fbbfa583ce27b">
                        see product
                    </Link>
                </Button >
            </div>
            <div>
            </div>
        </div>
    )
}
