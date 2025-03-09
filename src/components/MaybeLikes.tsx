import { ProductData } from "@/types";
import CardLike from "./Accesories/CardLike";

type MaybeLikesProps = {
    products: ProductData[],
    model?: string
}

export default function MaybeLikes({ products, model }: MaybeLikesProps) {

    const prod = products.find(findId => findId._id === model)

    return (
        <div className="max-w-screen-mk mx-auto flex flex-col ">
            <h3 className="flex justify-center sps:mb-[60px] mb-[39px] text-[25px] sps:text-[36px]">you may also like</h3>
            <div className="flex flex-col acc:flex-row justify-between gap-14 sps:gap-28 acc:gap-6 items-center">
                {
                    prod?.others.map(item => (
                        <CardLike key={item._id} itemId={item._id} name={item.name} image={item.image} />
                    ))
                }
            </div>
        </div>
    )
}
