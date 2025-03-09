

export default function NoticeSection() {
    return (
        <div className="max-w-screen-mk mx-auto flex flex-col-reverse md:flex-row acc:gap-6 gap-[30px] md:mb-[45px] md:mt-[200px] mt-[96px]">

            <div
                className=" h-full w-full "
            >
                <div className="px-[0px] md:px-[0px] acc:mb-[00px] mb-[39px] items-center flex flex-col md:items-start  ">

                    <h2 className=" max-w-[600px] md:max-w-[400px] md:mt-[148px] sps:mt-[42px] mt-[14px] text-center md:text-start text-[28px] sps:text-[40px] leading-8 sps:leading-[44px]">
                        Bringing you the <span className="text-more-ec">best</span> audio gear
                    </h2>
                    <p className="mt-[35px] max-w-[573px] md:max-w-[445px] mb-[155px] text-gray-600 text-center text-[15px] md:text-start tracking-[0.1px] leading-[25px] md:leading-[23px]">
                        Located at the heart of New York City, Audiophile is the premier store for high end headphones,
                        earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration
                        rooms available for you to browse and experience a wide range of our products. Stop by our store
                        to meet some of the fantastic people who make Audiophile the best place to buy your portable
                        audio equipment.
                    </p>
                </div>
            </div>

            <div
                className=" flex w-full rounded-lg bg-[url('/assets/shared/mobile/image-best-gear-mobile.jpg')] sps:bg-[url('/assets/shared/tablet/image-best-gear-tablet.jpg')] md:bg-[url('/assets/shared/desktop/image-best-gear-desktop.jpg')]  bg-no-repeat bg-cover bg-center  h-[300px] md:h-auto"
            >

            </div>

        </div>
    )
}
