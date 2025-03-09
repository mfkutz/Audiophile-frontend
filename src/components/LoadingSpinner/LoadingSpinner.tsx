import { SpinnerDotted } from "spinners-react";

export default function LoadingSpinner() {
    return (
        <div className="flex bg-white h-screen justify-center items-center">
            <SpinnerDotted color="#D87D4A" />
        </div>
    )
}
