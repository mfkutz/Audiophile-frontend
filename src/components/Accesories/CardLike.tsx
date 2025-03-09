import { Link } from "react-router-dom";
import { Button } from "../ui/button";

type ImageType = {
    mobile: string,
    tablet: string,
    desktop: string,
}

type CardLikeProps = {
    itemId: string,
    name: string
    image: ImageType
}

export default function CardLike({ itemId, name, image }: CardLikeProps) {
    return (
        <div className="max-w-[350px] flex flex-col w-full justify-center items-center">
            <div
                className="relative rounded-md w-full flex h-[119px] sps:h-[318px]"
            >
                <img
                    src={image.mobile}
                    alt={`Image of ${name}`}
                    className="w-full h-full object-cover rounded-md sps:hidden  "
                />
                <img
                    src={image.tablet}
                    alt={`Image of ${name}`}
                    className="w-full h-full object-cover rounded-md hidden sps:block md:hidden  "
                />
                <img
                    src={image.desktop}
                    alt={`Image of ${name}`}
                    className="w-full h-full object-cover rounded-md hidden md:block    "
                />

            </div>

            <h5 className="sps:mt-[42px] mt-[32px] sps:mb-[33px] mb-[32px] text-[18px] md:text-[24px] ">{name}</h5>
            <Button
                asChild
                variant="default"
            >
                <Link to={`/${itemId}`}>see product</Link>
            </Button>
        </div>
    )
}
