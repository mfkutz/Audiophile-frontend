import { getProduct } from "@/api/ProductsApi";
import Accesories from "@/components/Accesories";
import Footer from "@/components/Footer";
import HeroTitle from "@/components/Hero/Hero.title";
import NewProduct from "@/components/NewProduct";
import NoticeSection from "@/components/Notice.section";
import { useSmoothScrollToTop } from "@/hooks/utils";
import { useQuery } from "@tanstack/react-query";
import EarphonesSEO from "@/SEO/EarphonesSEO";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";

export default function Earphones() {
    useSmoothScrollToTop(null)

    const { data: products, isLoading, error } = useQuery({
        queryKey: ["products"],
        queryFn: getProduct,
        // staleTime: 0,
    })

    const model = "67aba52906c03bc37b566acb"

    if (isLoading) return <LoadingSpinner />

    if (error) return <div className="flex bg-black-ec text-white h-screen justify-center items-center">
        <div>
            Ups...something it's wrong
        </div>
    </div>

    return (
        <>
            {/* SEO */}
            <EarphonesSEO />

            <section className="flex-1 bg-black-esp">
                <HeroTitle />
            </section>

            <section className="px-5">
                <NewProduct products={products ?? []} model={model} />
            </section>

            <section className="flex-1 px-5 mt-[-32px] sps:mt-[-156px] md:mt-[240px]" >
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
