
type ButtonProps = {
    className?: string
    handleSubmit?: () => void
    title: string
}
const Button = ({ className, handleSubmit, title }: ButtonProps) => {
    return (
        <button className={`${className}`} onClick={handleSubmit}>
            {title}
        </button>
    )
}

export default Button;