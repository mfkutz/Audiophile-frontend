import { z } from "zod"

/* Auth & Users */
export const authSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    phoneNumber: z.string(),
    address: z.string(),
    zipCode: z.string(),
    city: z.string(),
    country: z.string(),
    eMoneyNumber: z.string(),
    eMoneyPin: z.string()
})

type Auth = z.infer<typeof authSchema>
export type UserRegistrationForm = Pick<Auth, "name" | "email" | "phoneNumber" | "address" | "zipCode" | "city" | "country" | "eMoneyNumber" | "eMoneyPin">

const imageSchema = z.object({
    mobile: z.string(),
    tablet: z.string(),
    desktop: z.string(),
    _id: z.string()
});

const includesItemSchema = z.object({
    quantity: z.number(),
    item: z.string(),
    _id: z.string()
});

const relatedProductSchema = z.object({
    slug: z.string(),
    name: z.string(),
    image: imageSchema,
    _id: z.string()
});

export const productSchema = z.array(
    z.object({
        _id: z.string(),
        slug: z.string(),
        name: z.string(),
        image: imageSchema,
        category: z.string(),
        categoryImage: imageSchema,
        new: z.boolean(),
        price: z.number().min(0),
        description: z.string(),
        features: z.string(),
        includes: z.array(includesItemSchema),
        gallery: z.object({
            first: imageSchema,
            second: imageSchema,
            third: imageSchema,
            _id: z.string()
        }),
        others: z.array(relatedProductSchema)
    })
);

export type Product = z.infer<typeof productSchema>[number]

export type ProductData = Pick<Product, "_id" | "slug" | "name" | "image" | "category" | "categoryImage" | "new" | "price" | "description" | "features" | "includes" | "gallery" | "others">

//Orders

//Product schema 
const orderItemSchema = z.object({
    productId: z.string(),
    name: z.string(),
    unitPrice: z.number(),
    imageUrl: z.string(),
    quantity: z.number().min(1)
})


//schema clients
const customerSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    phoneNumber: z.string().min(7),
    address: z.string().min(5),
    zipCode: z.string().min(4),
    city: z.string().min(2),
    country: z.string().min(2)
})

const paymentSchema = z.object({
    eMoneyNumber: z.string().optional(),
    eMoneyPin: z.string().optional()
})

export const orderSchema = z.object({
    customer: customerSchema,
    payment: paymentSchema,
    orderItems: z.array(orderItemSchema).nonempty(""),
    totalAmount: z.number(),
    shippingCost: z.number()
})

export type OrderType = z.infer<typeof orderSchema>

export type MinimalProductData = Pick<Product, "_id" | "name" | "image" | "price">