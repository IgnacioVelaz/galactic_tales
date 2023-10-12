import { CheckoutContent } from "./CheckoutContent";
import { LimitedHeader } from "../../components/LimitedHeader/LimitedHeader";

export function CheckoutPage(){

  return (
      <div className="min-h-screen bg-bgPrimary relative">
      <LimitedHeader title="Checkout"/>
      <CheckoutContent />
      
      </div>
  )
}
