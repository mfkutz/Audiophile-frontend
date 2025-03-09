import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import Hamburguer from "./Hamburguer";
import Checkout from "./Checkout/Checkout";
import { useEffect, useState } from "react";
import { useCartStore } from "@/store/store";
import { motion } from "framer-motion"

export default function Header() {
    const [cartView, setCartView] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)
    const [viewCircle, setViewCircle] = useState(false)
    const { cart, removeFromCart, clearCart, getTotalProducts } = useCartStore()
    const [isOpen, setIsOpen] = useState(false)

    const cantProd = getTotalProducts()
    const location = useLocation()

    const handleMenu = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        if (cart.length > 0) {
            setViewCircle(true)
            setIsAnimating(true)
        } else {
            setViewCircle(false)
            setIsAnimating(false)
        }

        const timer = setTimeout(() => {
            setIsAnimating(false)
        }, 300);

        return () => clearTimeout(timer)

    }, [cart, removeFromCart, clearCart])


    useEffect(() => { //close menu when path change
        setIsOpen(false)
    }, [location.pathname])

    const closeMenu = () => setIsOpen(false)

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden "
                    onClick={() => setIsOpen(!isOpen)}
                ></div>
            )}
            {/* Menu Mobile */}
            <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: isOpen ? "0%" : "-100%" }}
                exit={{ x: "-100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className={` fixed top-0 left-0 z-40 w-[250px] md:hidden  `}>

                <div className={` bg-white-ec h-screen flex justify-between w-full p-4 `}>
                    <div className="flex justify-between w-full">
                        <ul className="flex flex-col mt-14 gap-6 font-semibold tracking-[2px]">
                            <Link to="/" onClick={closeMenu}>Home</Link>
                            <Link to="/headphones" onClick={closeMenu}>Headphones</Link>
                            <Link to="/speakers" onClick={closeMenu}>Speakers</Link>
                            <Link to="/earphones" onClick={closeMenu}>Earphones</Link>
                        </ul>
                        <div
                            className="text-[20px]"
                            onClick={() => setIsOpen(!isOpen)}
                        >x</div>
                    </div>
                </div>
            </motion.div>

            <header className="   max-w-screen-mk flex items-center justify-between mx-auto py-[38px]  xl:px-0 border-b border-b-neutral-700 px-5 sps:px-0 relative ">
                <div
                    className={`absolute top-[90px] left-0 sps:left-auto right-0   z-50 ${cartView ? "" : "hidden"} mx-3 sps:mx-0  `}>
                    <Checkout onClose={() => setCartView(false)} />
                </div>
                <div className="flex items-center lg:max-w-[768px] w-[78%] lg:flex-1 md:justify-between gap-10  ">
                    <div
                        className="hover:cursor-pointer md:hidden "
                        onClick={handleMenu}>
                        <Hamburguer />
                    </div>
                    <Logo />
                    <nav className="text-white hidden md:flex uppercase space-x-8">
                        <Link to="/" className=" tracking-[2px] font-bold text-[13px] cursor-pointer hover:text-more-ec transition-colors duration-200 ">Home</Link>
                        <Link to="/headphones" className=" tracking-[2px] font-bold text-[13px] hover:text-more-ec transition-colors duration-200">Headphones</Link >
                        <Link to="/speakers" className=" tracking-[2px] font-bold text-[13px] hover:text-more-ec transition-colors duration-200">Speakers</Link >
                        <Link to="/earphones" className=" tracking-[2px] font-bold text-[13px] hover:text-more-ec transition-colors duration-200">Earphones</Link >
                    </nav>
                </div>
                <div className="relative ">
                    <div>
                        <img
                            src="./assets/shared/desktop/icon-cart.svg"
                            alt="cart logo"
                            className="cursor-pointer"
                            onClick={() => setCartView(!cartView)}
                        >
                        </img>
                        <div
                            className={`absolute cursor-pointer top-[-16px] right-[-16px] w-6 h-6 flex items-center justify-center bg-red-500 text-white rounded-full text-xs font-semibold transition-transform duration-200 ease-out ${isAnimating ? " scale-125" : "scale-100"} ${viewCircle ? "" : "hidden"}`}
                            onClick={() => setCartView(!cartView)}
                        >
                            {cantProd > 9 ? "+9" : cantProd}
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
