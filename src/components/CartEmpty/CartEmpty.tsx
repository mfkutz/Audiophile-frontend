
export default function CartEmpty() {
    return (
        <div className="flex flex-col justify-center items-center">
            <p className="pt-4">Your cart is empty</p>
            <img
                src={"./assets/shopping-bag.png"}
                alt="cart"
                className="w-[40px] mt-2"
            />
        </div>

    )
}
