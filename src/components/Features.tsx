import { ProductData } from "@/types"

type FeaturesProps = {
    products: ProductData[],
    model?: string
}

export default function Features({ products, model }: FeaturesProps) {

    const prod = products.find(findId => findId._id === model)

    if (!model) return <div className="flex text-black bg-red-400 justify-center items-center">
        <div>
            Ups...something it's wrong
        </div>
    </div>

    return (
        <div className="flex sp:flex-row flex-col max-w-screen-mk mx-auto justify-between gap-5 ">

            <div className="sp:max-w-[625px] flex flex-col">
                <h3 className="text-[24px] sps:text-[32px]">Features</h3>

                <p className="text-[15px] text-gray-text-prod mt-[35px]">
                    {prod?.features?.split('\n')[0]}
                </p>

                <p className="text-[15px] text-gray-text-prod mt-[30px]">
                    {prod?.features?.split('\n').filter(line => line.trim() !== "")[1]}
                </p>
            </div>

            <div className=" w-full sp:max-w-[350px] flex flex-col sps:flex-row sp:flex-col mt-[65px] md:mt-[100px] sp:mt-0 ">
                <h3 className="mb-[30px] w-full text-[24px] sps:text-[32px]">In the box</h3>
                <div className="w-full ">
                    {prod?.includes.map(item => (
                        <div className=" flex gap-5 text-[15px] font-medium mb-[10px]" key={item._id}>
                            <div className="text-more-ec font-bold ">{item.quantity}x</div>
                            <div className="text-gray-text-prod font-medium">{item.item}</div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
