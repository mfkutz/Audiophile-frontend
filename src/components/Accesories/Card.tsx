import { Link } from "react-router-dom"
import ButtonShop from "../ui/ButtonShop"

type CardProps = {
    element: string
    image: string
    move?: string
    isLarge?: boolean
}

export default function Card({ element, image, move, isLarge }: CardProps) {
    const link = `/${element}`
    return (
        <div
            className="flex flex-col  bg-white-ec rounded-lg w-full text-center h-[160px] sps:h-[200px] justify-end py-7 items-center relative max-w-[350px]"
        >
            <div className=" bg-black w-[140px] h-[20px] rounded-full blur-xl absolute top-[35%]"></div>
            <img
                src={image}
                alt="icon"
                className={`absolute top-[-30%] sps:top-[-${move}] ${isLarge ? "w-[100px]" : "w-[88px]"}  sps:w-[122.95px]`}
            />
            <p className="uppercase font-bold text-[15px] sps:text-[18px] mb-[5px] tracking-wider ">{element}</p>

            <Link to={link}>
                <ButtonShop />
            </Link>
        </div>
    )
}
