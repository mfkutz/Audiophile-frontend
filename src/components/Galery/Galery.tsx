import { ProductData } from "@/types";

type GalleryProps = {
    products: ProductData[],
    model?: string
}

export default function Gallery({ products, model }: GalleryProps) {
    const prod = products.find(findId => findId._id === model)
    return (
        <div className="flex flex-col acc:flex-row   max-w-screen-mk mx-auto sp:gap-7 gap-5">
            <div className=" flex flex-col justify-between gap-5 sp:gap-7">
                <img
                    src={prod?.gallery.first.desktop}
                    alt={`Product ${prod?.name}`}
                    className="rounded-lg h-auto hidden acc:block"
                />
                <img
                    src={prod?.gallery.first.mobile}
                    alt={`Product ${prod?.name}`}
                    className="rounded-lg h-auto acc:hidden"
                />
                <img
                    src={prod?.gallery.second.desktop}
                    alt={`Product ${prod?.name}`}
                    className="rounded-lg h-auto hidden acc:block "
                />
                <img
                    src={prod?.gallery.second.mobile}
                    alt={`Product ${prod?.name}`}
                    className="rounded-lg h-auto acc:hidden"
                />
            </div>
            <div>
                <img
                    src={prod?.gallery.third.desktop}
                    alt=""
                    className="rounded-lg h-full hidden acc:block "
                />
                <img
                    src={prod?.gallery.third.mobile}
                    alt=""
                    className="rounded-lg h-full acc:hidden  "
                />
            </div>
        </div>
    );
}






