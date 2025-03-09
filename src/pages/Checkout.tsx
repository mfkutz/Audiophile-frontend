import Buying from '@/components/Buying/Buying'
import Footer from '@/components/Footer'
import { useSmoothScrollToTop } from '@/hooks/utils'

export default function Checkout() {
    useSmoothScrollToTop(null)
    return (
        <>
            <section className=' bg-gray-100 md:pt-[150px] pt-[66px] sps:pt-[90px] pb-[120px]'>
                <Buying />
            </section>
            <section className='flex-1 bg-black-esp px-5'>
                <Footer />
            </section>
        </>
    )
}
