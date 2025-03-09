import { Helmet } from 'react-helmet-async'

export default function PrincipalSEO() {
    return (
        <Helmet>
            <title>Audiophile | Premium Headphones, Speakers & Earphones</title>
            <meta
                name="description"
                content="Discover the best quality headphones, speakers, and earphones. Explore our high-fidelity audio products at Audiophile."
            />
            <meta
                name="keywords"
                content="headphones, earphones, speakers, audio, sound, high fidelity, headphones, speakers, earphones, audiophile, XX99 Mark II, zx9, zx7 speaker,yx1 earphones, XX99 Mark 1, XX59, YX1 Wireless   "
            />

            {/* Open Graph (social media) */}
            <meta property="og:title" content="Audiophile - The Best Audio Experience" />
            <meta
                property="og:description"
                content="Explore high-quality headphones, speakers, and earphones. Find the perfect audio equipment at Audiophile."
            />
            <meta property="og:image" content="https://yourwebsite.com/images/headphones.jpg" /> //TODO change this later
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://audiophile.com" /> //TODO change this later
        </Helmet>
    )
}
