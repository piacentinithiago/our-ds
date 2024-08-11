import { FC } from "react"

interface Props {
  label: string;
  onClick: () => void;
}

const Button: FC<Props> = ({ label, onClick }) => {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  )
}

export default Button;