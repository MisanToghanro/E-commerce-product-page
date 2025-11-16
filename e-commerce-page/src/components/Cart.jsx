import { useState } from "react";

const Cart = ({ cartItems, setCartItems }) => {

    
    const [cartOpen,setCartOpen] = useState(false);

    const handleDelete = () => {
        setCartItems([])
    }

    return(
    <div >
            {/*cart icon*/}
            <button onClick={()=> setCartOpen(!cartOpen)} className="cursor-pointer hover:scale-105">
              <img src="/images/icon-cart.svg" alt="carticon"/>
            </button>

            {cartOpen && (
            <div className="absolute right-5 top-24 bg-white shadow-xl rounded-lg w-80 p-4 z-50">
                <h3 className="font-bold border-b pb-3">Your Cart</h3>
 
        {/* If cart empty */}
          {cartItems.length === 0 ? ( <p className="text-center py-10 text-gray-500">Your cart is empty</p>)
          :
          (<div className="mt-4 space-y-4">
            {cartItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between gap-3">

                    <img
                    src={item.thumbnail}
                    className="w-12 h-12 rounded-lg"
                    alt="product thumb"/>

                <div className="flex-1 text-sm text-gray-600">
                    <p>{item.title}</p>
                    <p>
                      ${item.price} × {item.qty}
                      <span className="font-bold ml-2">
                        ${item.price * item.qty}
                      </span>
                    </p>
                  </div>

                    <img
                    src="/images/icon-delete.svg"
                    alt="delete"
                    className="w-5 cursor-pointer hover:opacity-70"
                    onClick={handleDelete}/>

            <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition">
                Checkout
              </button>
                </div>
            ))}
        </div>)}
            </div>)}


        </div>)
}

export default Cart;