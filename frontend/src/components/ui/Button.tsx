import type React from "react"

type ButtonProps = {
    children: React.ReactNode
    onClick?: () => void
    type?: "button" | "submit" | "reset"
}

function Button({
  children,
  onClick,
  type = "button",
}: ButtonProps) {
    return (
        <button 
        type={type}
        onClick={onClick}
        className="
        rounded-lg
        bg-green-600
        px-5
        py-2.5
        font-medium
        text-white
        transition
        hover:bg-green-700"
        >
            {children}
        </button>
    )
}

export default Button