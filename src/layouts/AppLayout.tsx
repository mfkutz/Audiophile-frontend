import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function AppLayout() {
    return (
        <>
            <section className=" bg-black-esp sps:px-5">
                <Header />
            </section>
            <section >
                <Outlet />
            </section>
        </>
    )
}
