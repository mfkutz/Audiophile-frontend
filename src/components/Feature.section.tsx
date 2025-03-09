import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function FeatureSection() {
    return (
        <div className="flex-col md:flex md:flex-row max-w-screen-mk bg-more-ec mx-auto justify-normal rounded-lg overflow-hidden md:mb-[45px] mb-[30px] ">
            <div className="relative  md:w-[600px] mt-14 md:mt-0  ">
                <div className="sps:w-[472px] sps:h-[472px] w-[280px] h-[280px]    md:bottom-[-125px] md:left-[88px] absolute border border-white-cc rounded-full z-0 opacity-20 |  translate-x-[-50%] md:translate-x-[-0%] translate-y-[-50%] md:translate-y-[-00%] top-[50%] md:top-[38%] left-[50%] " />
                <div className="sps:w-[542px] sps:h-[542px] w-[320px] h-[320px] bottom-[-160px] md:left-[52px] absolute border border-white-cc rounded-full z-0  opacity-20 |  translate-x-[-50%] md:translate-x-[-0%] translate-y-[-50%] md:translate-y-[-00%] top-[50%] md:top-[32%] left-[50%] " />
                <div className="sps:w-[944px] sps:h-[944px] w-[558px] h-[558px]  bottom-[-350px] md:left-[-158px] absolute border border-white-cc rounded-full z-0  opacity-20 |  translate-x-[-50%] md:translate-x-[-0%] translate-y-[-50%] md:translate-y-[-00%] top-[50%] md:top-[-10%] left-[50%]" />
                <div className=" flex md:absolute md:bottom-0 md:left-[115px] justify-center  text-white  ">
                    <div className="md:max-w-[410px] sps:max-w-[197px] max-w-[172px]">
                        <img
                            src={"./assets/home/image-zx9.png"}
                            alt="zx9"
                        />
                    </div>
                </div>
            </div>
            <div className="md:max-w-[450px] md:mx-[60px] mx-[30px] z-10  text-center md:text-left" >
                <h2 className="flex flex-col text-white-ec  ">
                    <span className="md:mt-[142px] mt-14 text-white-ec text-[36px] sps:text-[56px] ">zx9</span>
                    <span className="md:mt-3 sps:mt-5 mt-11 text-white-ec text-[36px] sps:text-[56px]">speaker</span>
                </h2>
                <p className=" text-white-cc opacity-75 mt-8 md:max-w-[350px] font-extralight tracking-[0.44px] text-[15px]">
                    Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                </p>
                <div className="mb-[123px] mt-[43px]">
                    <Button
                        asChild
                        variant="primary"
                    >
                        <Link to="/67aba5a8216fbbfa583ce28e">see product</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
