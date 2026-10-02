type InputProps = {
    placeholder?: string
    type?: string
    value?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function Input({
  placeholder,
  type = "text",
  value,
  onChange,
}: InputProps) {
    return (
        <input 
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
        rounded-lg
            w-full
            rounded-lg
            border
            border-gray-300
            px-4
            py-3
            outline-none
            transition
            focus:border-green-600
            focus:ring-2
            focus:ring-green-100
            "
        />
    )
}

export default Input