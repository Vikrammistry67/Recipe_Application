import { createContext, useState } from "react"

export const Cart = createContext();
const CartContext = ({ children }) => {
  const [cart, setCart] = useState(null);
  const addToCart = (data) => setCart(data);
  const removeToCart = () => setCart(null);
  return (
    <Cart.Provider value={{ cart, setCart, addToCart, removeToCart }}>
      {children}
    </Cart.Provider>
  )
}

export default CartContext