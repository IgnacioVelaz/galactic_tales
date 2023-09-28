import { BsHandbag } from 'react-icons/bs'

export const AtcButton = () =>{
    return (
        <button className="flex bg-accPrimary p-4 border-2 border-cGray">
            <span className="uppercase">Add to Cart</span>
            <BsHandbag />
        </button>
    )
}