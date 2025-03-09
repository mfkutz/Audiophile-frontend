import { getProduct } from "@/api/ProductsApi";
import Accesories from "@/components/Accesories";
import Footer from "@/components/Footer";
import HeroTitle from "@/components/Hero/Hero.title";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import NewProduct from "@/components/NewProduct";
import NoticeSection from "@/components/Notice.section";
import ProductDescription from "@/components/ProductDescription";
import ProductDescriptionTwo from "@/components/ProductDescriptionTwo";
import { useSmoothScrollToTop } from "@/hooks/utils";
import HeadphonesSEO from "@/SEO/HeadphonesSEO";
import { useQuery } from "@tanstack/react-query";

export default function Headphones() {

    useSmoothScrollToTop(null)

    const { data: products, isLoading, error } = useQuery({
        queryKey: ["products"],
        queryFn: getProduct,
        // staleTime: 0, //fresh data
    })

    const model = "67aba58a216fbbfa583ce268"
    const model2 = "67aba571216fbbfa583ce256"
    const model3 = "67aba53806c03bc37b566ade"

    if (isLoading) return <LoadingSpinner />

    if (error) return <div className="flex bg-black-ec text-white h-screen justify-center items-center">
        <div>
            Ups...something it's wrong
        </div>
    </div>

    return (
        <>
            {/* SEO */}
            <HeadphonesSEO />

            <section className="flex-1 bg-black-esp" >
                <HeroTitle />
            </section>
            <section className="px-5">
                <NewProduct products={products ?? []} model={model} />
            </section>
            <section className="px-5">
                <ProductDescription products={products ?? []} model={model2} />
            </section>
            <section className="px-5 md:mb-[240px]">
                <ProductDescriptionTwo products={products ?? []} model={model3} />
            </section>
            <section className="flex-1 px-5" >
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
