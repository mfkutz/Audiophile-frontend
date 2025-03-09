import { Helmet } from "react-helmet-async";

export default function SpeakersSEO() {
    return (
        <Helmet>
            <title>Speakers - Premium Sound at Audiophile</title>
            <meta
                name="description"
                content="Explore our premium speakers for exceptional sound quality. Featuring the ZX9 and ZX7 models at Audiophile."
            />
            <meta
                name="keywords"
                content="speakers, audio, premium sound, high fidelity, music, audiophile, ZX9 Speaker, ZX7 Speaker, wireless speakers, home audio"
            />

            <meta property="og:title" content="Speakers - Premium Sound at Audiophile" />
            <meta
                property="og:description"
                content="Discover our top-of-the-line speakers including the ZX9 and ZX7 models. Unmatched sound quality for audiophiles."
            />
            <meta property="og:image" content="https://audiophile.com/images/speakers.jpg" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://audiophile.com/speakers" />
        </Helmet>
    );
}