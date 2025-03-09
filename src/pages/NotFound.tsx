import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="w-full h-screen bg-black-esp gap-3 text-white-cc justify-center items-center flex flex-col ">
            <h5>404 - Page Not Found</h5>
            <p>The page you are looking for does not exist.</p>
            <div className="pt-5">
                <Button
                    variant="default"
                    asChild
                >
                    <Link to="/"> Back to home</Link>
                </Button>
            </div>
        </div>
    )
}
