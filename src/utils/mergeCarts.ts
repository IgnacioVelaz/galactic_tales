import { CartItemInterface } from "../Interfaces/CartItemInterface"

export const mergeCarts = (local:[CartItemInterface], remote:[CartItemInterface]) => {
    const mergedCarts = local.map(localItem => {
      const coincidence = remote.find(remoteItem => remoteItem.isbn === localItem.isbn)
      if(coincidence){
        return {
          ...localItem,
          quantity: localItem.quantity + coincidence.quantity
        }
      }
      if(!coincidence){
        return localItem
      }
    })
    remote.forEach(remoteItem => {
      const coincidence = mergedCarts.find(localItem => localItem.isbn === remoteItem.isbn)
      if(!coincidence){
        mergedCarts.push(remoteItem)
      }
    })
    
    return mergedCarts
  }
  