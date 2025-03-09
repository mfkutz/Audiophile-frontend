import { Helmet } from "react-helmet-async";

export default function EarphonesSEO() {
    return (
        <Helmet>
            <title>Earphones - Premium Sound Quality at Audiophile</title>
            <meta
                name="description"
                content="Browse our collection of high-quality earphones designed for audiophiles. Experience crisp sound and comfort."
            />
            <meta
                name="keywords"
                content="earphones, audio, high fidelity, premium sound, music, audiophile, YX1 Wireless Earphones, wireless earphones"
            />

            <meta property="og:title" content="Earphones - Premium Sound Quality at Audiophile" />
            <meta
                property="og:description"
                content="Find the best earphones for superior sound quality. Audiophile offers top-tier earphones for audiophiles."
            />
            <meta property="og:image" content="https://audiophile.com/images/earphones.jpg" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://audiophile.com/earphones" />
        </Helmet>
    );
}
