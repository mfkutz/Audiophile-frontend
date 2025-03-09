import { Helmet } from "react-helmet-async";

export default function HeadphonesSEO() {
    return (
        <Helmet>
            <title>Headphones - Premium Audio at Audiophile</title>
            <meta
                name="description"
                content="Explore our collection of high-fidelity headphones. Find the best sound quality at Audiophile."
            />
            <meta
                name="keywords"
                content="headphones, audio, high fidelity, premium sound, music, audiophile, XX99 Mark II Headphones, XX99 Mark I Headphones, XX59 Headphones "
            />

            <meta property="og:title" content="Headphones - Premium Audio at Audiophile" />
            <meta
                property="og:description"
                content="Discover the best quality headphones with immersive sound. Audiophile is your go-to audio store."
            />
            <meta property="og:image" content="URL_OF_IMAGE" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://audiophile.com/headphones" />
        </Helmet>
    );
}