import { CartItemInterface } from "../Interfaces/CartItemInterface"


export const mergeCarts = (local:CartItemInterface[], remote:CartItemInterface[]): CartItemInterface[] => {   
  const mergedCarts: CartItemInterface[] = local.map(localItem => {
      const coincidence = remote.find(remoteItem => remoteItem.id === localItem.id)
      if(coincidence){
        return {
          ...localItem,
          quantity: localItem.quantity + coincidence.quantity
        }
      }
      if(!coincidence){
        return localItem
      }
    }) as CartItemInterface[]
    remote.forEach(remoteItem => {
      const coincidence = mergedCarts && mergedCarts.find(localItem => localItem?.id === remoteItem.id)
      if(!coincidence){
        mergedCarts.push(remoteItem)
      }
    })
    
    return mergedCarts
  }
  