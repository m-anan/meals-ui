import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { Meal } from '../../models/Meal';
;
interface CartContextProps<T extends any = any> {
  data: Meal[];
  setData: Dispatch<SetStateAction<T>>;
}
export const CartContext = createContext<CartContextProps>({ data: [], setData: () => { } })


export const CartProvider = ({ children }: any) => {
  const [data, setData] = useState([])

  return <CartContext.Provider value={{ data, setData }}>
    {children}
  </CartContext.Provider>

}
