import FreatureSectionThree from "@/components/FreatureSection.three";
import Accesories from "../components/Accesories";
import FeatureSection from "../components/Feature.section";
import FeatureSectionTwo from "../components/Feature.section.two";
import Hero from "../components/Hero/Hero";
import NoticeSection from "@/components/Notice.section";
import Footer from "@/components/Footer";
import { useSmoothScrollToTop } from "@/hooks/utils";
import PrincipalSEO from "@/SEO/PrincipalSEO";

export default function Home() {
    useSmoothScrollToTop(null)

    return (
        <>
            {/* SEO */}
            <PrincipalSEO />

            <section className="flex-1 bg-black-esp px-1 sp:px-5">
                <Hero />
            </section>
            <section className="px-5">
                <Accesories />
            </section>
            <section className="px-5">
                <FeatureSection />
            </section>
            <section className="px-5">
                <FeatureSectionTwo />
            </section>
            <section className="px-5">
                <FreatureSectionThree />
            </section>
            <section className="px-5 mb-[-90px] md:mb-[200px]">
                <NoticeSection />
            </section>
            <section className="flex-1 bg-black-esp px-5">
                <Footer />
            </section>
        </>
    )
}
