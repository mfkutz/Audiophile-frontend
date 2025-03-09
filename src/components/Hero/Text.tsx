import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function Text() {
  return (
    <div className="text-center sp:text-left sps:mb-40 mb-24">
      <p className=" text-white sps:text-[14px] text-[13px] leading-[19px] tracking-[10px] uppercase sps:mt-[130px] mt-[80px]">New product</p>
      <h1 className="text-white mt-[27px]">XX99 Mark II</h1>
      <h2 className="text-white sps:text-[56px] text-[36px] mt-[5px]">Headphones</h2>
      <p className="text-white sps:text-[14px] text-[14px] mt-[33px] tracking-[1px] max-w-[380px] sp:mx-0 mx-auto mb-[43px] ">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>

      <Button
        variant="default"
        asChild
      >
        <Link to={`/67aba58a216fbbfa583ce268`}>see product</Link>
      </Button>

    </div>
  )
}
