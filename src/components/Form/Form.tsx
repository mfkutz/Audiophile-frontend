
import { OrderType, UserRegistrationForm } from "@/types"
import { useForm } from "react-hook-form"
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import Order from "../Order/Order"
import { useCartStore } from "@/store/store"
import { formatCurrency, useGoBack, useSmoothScrollToTop } from "@/hooks/utils"
import { useMutation } from "@tanstack/react-query"
import { createOrder } from "@/api/CreateOrder"
import CartEmpty from "../CartEmpty/CartEmpty"
import { useRateLimitStore } from "@/store/useButtonStore"
import { Link } from "react-router-dom"
import { useApiError } from "@/hooks/useApiError"

export default function Form() {

    const [selectedMethod, setSelectedMethod] = useState("eMoney")
    const [orderView, setOrderView] = useState(false)
    const [orderId, setOrderId] = useState("")

    const initialValues: UserRegistrationForm = {
        name: '',
        email: '',
        phoneNumber: '',
        address: '',
        zipCode: '',
        city: '',
        country: '',
        eMoneyNumber: '',
        eMoneyPin: ''
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm<UserRegistrationForm>({ defaultValues: initialValues })

    const { apiError, setApiError, handleApiError } = useApiError()
    useSmoothScrollToTop(apiError)

    const { mutate, } = useMutation({

        mutationFn: createOrder,
        onError: handleApiError,
        onSuccess: (data) => {
            setOrderId(data.order._id)
            reset()
            setOrderView(!orderView)
            clearCart()
            setApiError(null)
        }
    })

    const handleRegister = (formData: OrderType["customer"] & OrderType["payment"]) => {

        const SHIPPING_COST = 50

        const formattedCart = cart.map(item => ({
            productId: item.product._id,
            name: item.product.name,
            unitPrice: item.product.price,
            imageUrl: item.product.image.mobile,
            quantity: item.quantity
        })) as OrderType["orderItems"]

        const formattedOrder = {
            customer: {
                name: formData.name,
                email: formData.email,
                phoneNumber: formData.phoneNumber,
                address: formData.address,
                zipCode: formData.zipCode,
                city: formData.city,
                country: formData.country
            },
            payment: {
                eMoneyNumber: formData.eMoneyNumber,
                eMoneyPin: formData.eMoneyPin
            },
            orderItems: formattedCart,
            totalAmount: totalPrice + SHIPPING_COST,
            shippingCost: SHIPPING_COST
        }

        mutate(formattedOrder)
    }

    const handleMethod = (method: string) => {
        setSelectedMethod(method)
    }

    const { cart, getTotalPrice, clearCart } = useCartStore()
    const totalPrice = getTotalPrice()
    const goBack = useGoBack()
    const { isButtonDisabled, checkIfExpired } = useRateLimitStore()

    useEffect(() => {
        checkIfExpired()
    }, [])


    if (apiError) {
        return (
            <div className=" mx-4 relative ">
                <div className=" flex mx-auto bg-black-esp max-w-[400px]  justify-center items-center p-11 rounded-lg z-50">
                    <div className="flex flex-col items-center gap-3">
                        <div className="text-white-ec text-center">{apiError}</div>
                        <Button variant="default" asChild>
                            <Link to={`/`}>Home</Link>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    return (

        <div className="flex gap-[30px]  mx-3 md:mx-0">
            <div className="flex flex-col mk:flex-row gap-[30px] w-full items-center mk:items-start  justify-center ">
                {/* / FORM *****************************/}
                <div className="bg-white md:max-w-[730px] rounded-lg py-[60px] mk:px-[48px] md:px-[50px] px-[25px] w-full relative">
                    <div
                        className=" absolute flex w-full max-w-[730px] hover:underline hover:text-more-ec left-0 sps:top-[-60px] top-[-50px] md:top-[-78px] text-gray-text-prod text-[15px] hover:cursor-pointer"
                        onClick={goBack}
                    >Go Back</div>
                    <h3>checkout</h3>
                    <div className="subtitle mt-[41px] ">Billing details</div>
                    <form
                        onSubmit={handleSubmit(handleRegister)}
                        className=""
                        noValidate
                        id="mainForm"
                    >
                        <div className="flex flex-col md:flex-row gap-4 ">
                            <div className="w-full flex flex-col  ">
                                <div className="flex justify-between mt-8 items-center md:w-[309px] ">
                                    <label
                                        className=" font-bold text-[12px]  "
                                        htmlFor="name"
                                    >Name</label>
                                    {errors.name && (
                                        <ErrorMessage>{errors.name.message}</ErrorMessage>
                                    )}
                                </div>
                                <input
                                    id="name"
                                    type="name"
                                    placeholder="Alexei Ward"
                                    className=" px-6 py-[17px] font-semibold text-[14px] border-gray-300 border rounded-lg mt-[6px] md:w-[309px]"
                                    {...register("name", {
                                        required: "Name is required",
                                    })}
                                />
                            </div>

                            <div className="w-full ">
                                <div className="flex justify-between mt-8 items-center md:w-[309px] ">
                                    <label
                                        className=" font-bold  text-[12px]"
                                        htmlFor="email"
                                    >Email Address</label>
                                    {errors.email && (
                                        <ErrorMessage>{errors.email.message}</ErrorMessage>
                                    )}
                                </div>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="alexei@gmail.com"
                                    className=" px-6 py-[17px] font-semibold text-[14px] border-gray-300 border rounded-lg mt-[6px] md:w-[309px] w-full"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: "Invalid E-mail",
                                        },
                                    })}
                                />
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-full">
                                <div className="flex justify-between mt-8 items-center md:w-[309px]">
                                    <label
                                        className=" font-bold  text-[12px]"
                                        htmlFor="phoneNumber"
                                    >Phone Number</label>
                                    {errors.phoneNumber && (
                                        <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>
                                    )}
                                </div>

                                <input
                                    id="phoneNumber"
                                    type="text"
                                    placeholder="+1 202-555-0136"
                                    className="px-6 py-[17px] font-semibold text-[14px] border-gray-300 border rounded-lg mt-[6px] md:w-[309px] w-full"
                                    {...register("phoneNumber", {
                                        required: "Phone number is required",
                                        pattern: {
                                            value: /^\+?[0-9\s-]*$/,
                                            message: "Invalid phone number",
                                        },
                                    })}
                                />
                            </div>

                        </div>

                        <div className="subtitle mt-[41px] mb-3">shipping info</div>

                        <div className="flex gap-4">
                            <div className="w-full">
                                <div className="flex justify-between mt-8 items-center">
                                    <label
                                        className=" font-bold text-[12px]  "
                                        htmlFor="name"
                                    >Address</label>
                                    {errors.address && (
                                        <ErrorMessage>{errors.address.message}</ErrorMessage>
                                    )}
                                </div>
                                <input
                                    id="address"
                                    type="text"
                                    placeholder="1137 Williams Avenue"
                                    className="w-full px-6 py-[17px] font-semibold text-[14px] border-gray-300 border rounded-lg mt-[6px] "
                                    {...register("address", {
                                        required: "Address is required",
                                    })}
                                />
                            </div>
                        </div>

                        <div className="flex gap-4 flex-col md:flex-row">
                            <div className="w-full">
                                <div className="flex justify-between mt-8 items-center md:w-[309px]">
                                    <label
                                        className=" font-bold  text-[12px]"
                                        htmlFor="phoneNumber"
                                    >Zip Code</label>
                                    {errors.zipCode && (
                                        <ErrorMessage>{errors.zipCode.message}</ErrorMessage>
                                    )}
                                </div>

                                <input
                                    id="zipCode"
                                    type="text"
                                    placeholder="10001"
                                    maxLength={5}
                                    className="px-6 py-[17px] font-semibold text-[14px] border-gray-300 border rounded-lg mt-[6px] md:w-[309px] w-full"
                                    {...register("zipCode", {
                                        required: "Zip code is required",
                                        pattern: {
                                            value: /^\d{4,5}$/,
                                            message: "Zip code must be between 4 and 5 digits",
                                        },
                                        maxLength: {
                                            value: 5,
                                            message: "Must be max 10 digits"
                                        }
                                    })}
                                />
                            </div>

                            <div className="w-full">
                                <div className="flex justify-between mt-8 items-center md:w-[309px]">
                                    <label
                                        className=" font-bold  text-[12px]"
                                        htmlFor="city"
                                    >City</label>
                                    {errors.city && (
                                        <ErrorMessage>{errors.city.message}</ErrorMessage>
                                    )}
                                </div>

                                <input
                                    id="city"
                                    type="text"
                                    placeholder="New York"
                                    className="px-6 py-[17px] font-semibold text-[14px] border-gray-300 border rounded-lg mt-[6px] md:w-[309px] w-full"
                                    {...register("city", {
                                        required: "City is required",
                                    })}
                                />
                            </div>

                        </div>

                        <div className="flex gap-4">
                            <div className="w-full">
                                <div className="flex justify-between mt-8 items-center md:w-[309px]">
                                    <label
                                        className=" font-bold  text-[12px]"
                                        htmlFor="phoneNumber"
                                    >Country</label>
                                    {errors.country && (
                                        <ErrorMessage>{errors.country.message}</ErrorMessage>
                                    )}
                                </div>

                                <input
                                    id="country"
                                    type="text"
                                    placeholder="United States"
                                    className="px-6 py-[17px] font-semibold text-[14px] border-gray-300 border rounded-lg mt-[6px] md:w-[309px] w-full"
                                    {...register("country", {
                                        required: "Country is required",
                                    })}
                                />
                            </div>

                        </div>

                        <div className="subtitle mt-[41px] mb-3">payments details</div>

                        <div className="flex w-full font-bold  text-[12px] justify-between flex-col md:flex-row  gap-4  ">

                            <span className="w-full ">Payment Method</span>

                            <div className="flex flex-col ">

                                <button
                                    type="button"
                                    onClick={() => handleMethod("eMoney")}
                                    className="relative px-6 py-[17px] font-bold text-[14px] border-gray-300 border rounded-lg mt-[6px] md:w-[309px] text-left pl-[53px]"
                                >
                                    <div className={` absolute top-1/2 -translate-y-1/2 left-[20px] w-[12px] h-[12px] ${selectedMethod === "eMoney" ? "bg-more-ec" : ""}  rounded-full`} />
                                    <div className=" absolute top-1/2 -translate-y-1/2 left-[15px] w-[22px] h-[22px] border rounded-full" />
                                    e-Money
                                </button>

                                <button
                                    type="button"
                                    onClick={() => handleMethod("cashOnDelivery")}
                                    className="relative px-6 py-[17px] font-bold text-[14px] border-gray-300 border rounded-lg mt-[16px] md:w-[309px] text-left pl-[53px]">
                                    <div className={` absolute top-1/2 -translate-y-1/2 left-[20px] w-[12px] h-[12px] ${selectedMethod === "cashOnDelivery" ? "bg-more-ec" : ""}  rounded-full`} />
                                    <div className=" absolute top-1/2 -translate-y-1/2 left-[15px] w-[22px] h-[22px] border rounded-full" />
                                    Cash on Delivery
                                </button>
                            </div>

                        </div>

                        {/* /////////////////// */}

                        {selectedMethod === "eMoney" &&

                            <div className="flex gap-4 hidd flex-col md:flex-row">
                                <div className="w-full">
                                    <div className="flex justify-between mt-8 items-center md:w-[309px]">
                                        <label
                                            className=" font-bold  text-[12px]"
                                            htmlFor="eMoneyNumber"
                                        >e-Money Number</label>
                                        {errors.eMoneyNumber && (
                                            <ErrorMessage>{errors.eMoneyNumber.message}</ErrorMessage>
                                        )}
                                    </div>

                                    <input
                                        id="eMoneyNumber"
                                        type="text"
                                        placeholder="238521993"
                                        maxLength={10}
                                        className="px-6 py-[17px] font-semibold text-[14px] border-gray-300 border rounded-lg mt-[6px] md:w-[309px] w-full"
                                        {...register("eMoneyNumber", {
                                            required: "e-Money Number is required",
                                            pattern: {
                                                value: /^\d+$/,
                                                message: "only numbers",
                                            },
                                            minLength: {
                                                value: 6,
                                                message: "Must be at least 6 digits"
                                            },
                                            maxLength: {
                                                value: 10,
                                                message: "Must be max 10 digits"
                                            }
                                        })}
                                    />
                                </div>

                                <div className="w-full">
                                    <div className="flex justify-between mt-8 items-center md:w-[309px]">
                                        <label
                                            className=" font-bold  text-[12px]"
                                            htmlFor="eMoneyPin"
                                        >e-Money PIN</label>
                                        {errors.eMoneyPin && (
                                            <ErrorMessage>{errors.eMoneyPin.message}</ErrorMessage>
                                        )}
                                    </div>

                                    <input
                                        id="eMoneyPin"
                                        type="text"
                                        placeholder="6891"
                                        maxLength={4}
                                        className="px-6 py-[17px] font-semibold text-[14px] border-gray-300 border rounded-lg mt-[6px] md:w-[309px] w-full"
                                        {...register("eMoneyPin", {
                                            required: "e-Money Pin is required",
                                            pattern: {
                                                value: /^\d{4}$/,
                                                message: "eMoneyPin must be a 4-digit number"
                                            }
                                        })}
                                    />
                                </div>

                            </div>
                        }
                        {/* //////////////////////// */}
                    </form>
                </div>

                {/* SUMARY VIEW ***************************** */}
                <div className="bg-white max-w-[730px] w-full mk:h-fit rounded-lg py-[60px] mk:px-[30px] md:px-[50px] px-[25px] ">

                    {cart.length > 0 ? <div>
                        <>
                            <div>
                                <h5 className="font-bold text-[18px] uppercase">
                                    Sumary

                                </h5>
                                <div className="mt-[20px]">
                                    {cart.map((item) => (
                                        <div className="flex justify-between items-center gap-4 mt-6" key={item.product._id}>
                                            <div className="w-[94px]  rounded-lg ">
                                                <img
                                                    src={item.product.image.mobile}
                                                    alt={item.product.name}
                                                    className="rounded-lg"
                                                />
                                            </div>
                                            <div className="flex justify-between w-full ">
                                                <div className="flex flex-col">
                                                    <span className="uppercase font-bold text-[15px]">
                                                        {(() => {
                                                            const words = item.product.name.split(" ")

                                                            const prodIndex = words.findIndex(word => word.toLowerCase() === "mark")
                                                            if (prodIndex !== -1) {
                                                                return words.slice(0, prodIndex + 2).join(" ")
                                                            }
                                                            return words[0]
                                                        })()}
                                                    </span>
                                                    <span className="text-[15px] font-bold text-gray-500 mt-[3px]">{formatCurrency(item.product.price)}</span>
                                                </div>
                                                <div className="text-[15px] font-bold text-gray-500">
                                                    x{item.quantity}
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </div>

                                <div className="uppercase mt-[40px]">
                                    <div className="flex justify-between">
                                        <div className="text-gray-500 font-medium">
                                            total
                                        </div>

                                        <div className="font-bold text-[18px]">
                                            {formatCurrency(totalPrice)}
                                        </div>
                                    </div>

                                    <div className="flex justify-between mt-[10px]">
                                        <div className="text-gray-500 font-medium">
                                            shipping
                                        </div>

                                        <div className="font-bold text-[18px]">
                                            $ 50
                                        </div>
                                    </div>

                                    <div className="flex justify-between mt-[25px] mb-[25px]">
                                        <div className="text-gray-500 font-medium">
                                            grand total
                                        </div>

                                        <div className="font-bold text-more-ec text-[18px]">
                                            {formatCurrency(totalPrice + 50)}
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    asChild
                                    variant="pay"
                                    disabled={isButtonDisabled}
                                >
                                    <button
                                        type="submit"
                                        form="mainForm"
                                    >continue & pay</button>
                                </Button>
                                <div className={`mt-2 text-[13px] text-center text-red-500 ${isButtonDisabled ? "" : "hidden"}`}>You can't buy now, try again in a few minutes</div>
                            </div>
                        </>
                    </div> : <CartEmpty />
                    }
                </div>
            </div>

            {/* //////// MODAL ////// */}
            {orderView && (
                <div className=" absolute top-[170px] acc:top-[190px]  inset-0 flex items-center justify-center z-50 mx-3">
                    <Order orderId={orderId} />
                </div>
            )}

        </div>
    )
}

