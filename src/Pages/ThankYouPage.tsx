import { IoCheckmarkCircle } from 'react-icons/io5'
import { Link } from 'react-router-dom';

export const ThankYouPage = () => {
  return (
    <div className="bg-bgPrimary h-screen flex items-center">
      <div
        className="
                    p-6 
                    bg-white 
                    w-[80%] 
                    mx-auto 
                    flex 
                    flex-col 
                    items-center 
                    shadow-solidL 
                    border-2 
                    border-cGray"
      >
        <IoCheckmarkCircle className="w-28 h-28 fill-green-500" />
        <div className="text-center">
          <h3 className="text-black font-semibold text-center text-xl mt-6">
            Payment Done!
          </h3>
          <p className="text-cGray my-2">
            Thank you for completing your purchase.
          </p>
          <p> Have a great day! </p>
          <Link to="/">
            <button
              className="
              my-10
              px-12 
              uppercase 
              bg-accPrimary 
              border 
              border-cGray 
              font-semibold 
              py-3 
              shadow-solidXS"
            >
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
