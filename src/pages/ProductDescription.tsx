import { getProduct } from "@/api/ProductsApi";
import Accesories from "@/components/Accesories";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Gallery from "@/components/Galery/Galery";
import MaybeLikes from "@/components/MaybeLikes";
import NewProductAdd from "@/components/NewProductAdd";
import NoticeSection from "@/components/Notice.section";
import { useSmoothScrollToTop } from "@/hooks/utils";
import { useQuery } from "@tanstack/react-query";
import { Navigate, useParams } from "react-router-dom";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";

export default function ProductDescription() {

    useSmoothScrollToTop(null)

    const { id } = useParams()

    const { data: products, isLoading, error } = useQuery({
        queryKey: ["productDetail"],
        queryFn: getProduct
    })

    if (isLoading) return <LoadingSpinner />

    if (error) return <div className="flex bg-black-ec text-white h-screen justify-center items-center">
        <div>
            Ups...something it's wrong
        </div>
    </div>


    const product = products?.find((p) => p._id === id)
    if (!product) return <Navigate to="/404" replace />

    return (
        <>
            <section className="px-5 mb-[18px] sps:mb-[50px] md:mb-[124px] sp:mb-[153px]">
                <NewProductAdd products={products ?? []} model={id} />
            </section>

            <section className="px-5 mb-[180px] sps:mb-[280px] md:mb-[0px]">
                <Features products={products ?? []} model={id} />
            </section>

            <section className="px-5 mt-[-100px] sps:mt-[-180px] acc:mt-[-190px] md:mt-[100px] sp:mt-[160px] mb-[200px] acc:mb-[240px] md:mb-[-1px]">
                <Gallery products={products ?? []} model={id} />
            </section>

            <section className="px-5 md:mt-[166px] mt-[-130px] flex-1 ">
                <MaybeLikes products={products ?? []} model={id} />
            </section>

            <section className="flex-1 px-5 mt-[170px] sps:mt-[-30px] md:mt-[240px] " >
                <Accesories />
            </section>

            <section className="px-5 mt-[120px] sps:mt-[-40px] md:mb-[160px] mb-[-90px]">
                <NoticeSection />
            </section>

            <section className="flex-1 bg-black-esp px-5">
                <Footer />
            </section>
        </>
    )
}
