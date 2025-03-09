import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner"

const Home = lazy(() => import("./pages/Home"))
const Headphones = lazy(() => import("./pages/Headphones"))
const Speakers = lazy(() => import("./pages/Speakers"))
const Earphones = lazy(() => import("./pages/Earphones"))
const Checkout = lazy(() => import("./pages/Checkout"))
const ProductDescription = lazy(() => import("./pages/ProductDescription"))
const NotFound = lazy(() => import("./pages/NotFound"))

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>

                    <Route path="/" element={
                        <Suspense fallback={<LoadingSpinner />}>
                            <Home />
                        </Suspense>
                    } index />

                    <Route path="/headphones" element={
                        <Suspense fallback={<LoadingSpinner />}>
                            <Headphones />
                        </Suspense>
                    } />

                    <Route path="/speakers" element={
                        <Suspense fallback={<LoadingSpinner />}>
                            <Speakers />
                        </Suspense>} />

                    <Route path="/earphones" element={
                        <Suspense fallback={<LoadingSpinner />}>
                            <Earphones />
                        </Suspense>
                    } />

                    <Route path="/:id" element={
                        <Suspense fallback={<LoadingSpinner />}>
                            <ProductDescription />
                        </Suspense>
                    } />


                    <Route path="/checkout" element={
                        <Suspense fallback={<LoadingSpinner />}>
                            <Checkout />
                        </Suspense>
                    } />

                    {/* Catch all Route for 404 */}
                    <Route path="/404" element={
                        <Suspense fallback={<LoadingSpinner />}>
                            <NotFound />
                        </Suspense>
                    } />

                    <Route path="*" element={<Navigate to="/404" replace />} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}
