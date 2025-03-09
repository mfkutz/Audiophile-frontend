import Card from "./Accesories/Card";

export default function Accesories() {
    return (
        <div className="mx-auto max-w-screen-mk flex flex-col acc:flex-row justify-between my-20 sps:my-32 acc:mt-[200px] acc:mb-[168px]  gap-20 sps:gap-28 acc:gap-6 items-center">

            <Card element="headphones" image="./assets/shared/desktop/image-removebg-preview(41).png" move="36%" />

            <Card element="speakers" image="./assets/shared/desktop/image-removebg-preview(38).png" move="36%" />

            <Card element="earphones" image="./assets/shared/desktop/image-removebg-preview(42).png" move="30%" isLarge={true} />
        </div>
    )
}
