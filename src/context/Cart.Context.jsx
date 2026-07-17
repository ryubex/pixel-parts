import { createContext, useState } from "react";

export const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    function addToCart(product) {
        setCart((prevCart) => {
            const existingItem = prevCart.find(
                (item) => item.id === product.id
            )

            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id
                    ? {...item, quantity: item.quantity + 1}
                    : item
                )
            }

            return [...prevCart, {...product, quantity: 1}]
        })
    }

    function increaseQuantity(id){
        setCart((prevCart) => 
            prevCart.map((item) =>
                item.id === id
                    ?{
                     ...item,
                     quantity: item.quantity + 1,   
                    }
                : item
            )
        )
    }

    function decreaseQuantity(id){
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === id
                        ?{
                            ...item,
                            quantity: item.quantity - 1
                        }
                    : item
                )
            .filter((item) => item.quantity > 0)    
        )
    }


    return (
        <CartContext.Provider 
            value={{
                cart, 
                addToCart,
                increaseQuantity,
                decreaseQuantity
            }}
            >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider