
export default function ErrorMessage({ children }: { children: React.ReactNode }) {
    return (
        <div className="text-[12px] text-red-600 font-semibold ">{children}</div>
    )
}
