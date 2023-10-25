import { FC } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

type LimitedHeaderProps = {
  title: string
}

const ArrowBack = () => {
  const navigate = useNavigate()

  const navigateBack = () => {
    navigate(-1)
  }

  return (
    <button onClick={navigateBack}>
      <AiOutlineArrowLeft className="absolute left-4 h-8 w-8 bottom-[50%] translate-y-[50%]" />
    </button>
  )
}

export const LimitedHeader: FC<LimitedHeaderProps> = ({ title }) => {
  return (
    <header className="flex justify-center p-4 border-b-cGray border-b-4 relative">
      <nav>
        <ArrowBack />
      </nav>
      <h1 className="text-2xl uppercase">{title}</h1>
    </header>
  )
}
