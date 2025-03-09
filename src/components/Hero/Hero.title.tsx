import { useLocation } from "react-router-dom"

export default function HeroTitle() {

    const { pathname } = useLocation()
    const title = pathname.split("/")[1]

    return (
        <h2
            className="text-center text-white py-[45px] sps:py-[96px] text-[28px] sps:text-[40px]"
        >
            {title}
        </h2>
    )
}
