import { useState } from "react";
import Cart from "./Cart";

const Header = ({ cartItems, setCartItems }) => {

    const [menu , setMenu] = useState(false)
    return(
        <header className=" mt-5 shadow-md w-full p-4">
            {/*desktop*/}
            <div className="hidden md:flex flex-row justify-between items-center gap-5">

        <div className="gap-8 flex items-center">
        <img src="/images/logo.svg" alt="sneakers-logo" className="w-24 cursor-pointer"/>

            <nav className="space-x-2">
                <a href="#" className="hover:bg-orange-400 px-3 py-2 rounded-md hover:underline hover:text-white hover:font-medium">Collections</a>
                <a href="#" className="hover:bg-orange-400 px-3 py-2 rounded-md hover:underline hover:text-white hover:font-medium">Men</a>
                <a href="#" className="hover:bg-orange-400 px-3 py-2 rounded-md hover:underline hover:text-white hover:font-medium">Women</a>
                <a href="#" className="hover:bg-orange-400 px-3 py-2 rounded-md hover:underline hover:text-white hover:font-medium">About</a>
                <a href="#" className="hover:bg-orange-400 px-3 py-2 rounded-md hover:underline hover:text-white hover:font-medium">Contact</a>
            </nav>
            </div>

            <div className="flex space-x-6 flex-row items-center">
   
            <Cart cartItems={cartItems} setCartItems={setCartItems} ></Cart>

            <img src="images/image-avatar.png" alt="profile-avatar" className="w-20 h-20 cursor-pointer hover:border-orange-400 hover:border-2 transition "/>

            </div>

            </div>

            {/*mobile*/}
            <div className="flex items-center justify-between md:hidden">
                {/* Hamburger*/}
               
               <div className="flex items-center gap-4">
                <button className="md:hidden" onClick={() => setMenu(!menu)}>
                    
                    {!menu ? (
                        <img src="/images/icon-menu.svg" alt="menu-icon"/>) : (<img src="/images/icon-close.svg"  />)}
                </button>

                <img src="/images/logo.svg" alt="logo" className="w-24 md:hidden" />
               </div>
         
               <div className="flex items-center gap-4">
               <Cart cartItems={cartItems} setCartItems={setCartItems} ></Cart>
               
               <img
                src="/images/image-avatar.png"
                alt="avatar"
                className="w-10 rounded-full" />
               </div>
       

                {menu && (
                    <div className="fixed top-0 left-0 bg-white h-full w-64 mt-4 gap-4 shadow-lg ">
                    
                <button className="md:hidden p-4" onClick={() => setMenu(!menu)}>
                    
                    {!menu ? (
                        <img src="/images/icon-menu.svg" alt="menu-icon"/>) : (<img src="/images/icon-close.svg"  />)}
                </button>
                    
            <nav className="flex flex-col ">
                <a href="#" className="hover:bg-orange-400 px-3 py-2 rounded-md hover:underline hover:text-white hover:font-medium">Collections</a>
                <hr></hr>
                <a href="#" className="hover:bg-orange-400 px-3 py-2 rounded-md hover:underline hover:text-white hover:font-medium">Men</a>
                <hr></hr>
                <a href="#" className="hover:bg-orange-400 px-3 py-2 rounded-md hover:underline hover:text-white hover:font-medium">Women</a>
                <hr></hr>
                <a href="#" className="hover:bg-orange-400 px-3 py-2 rounded-md hover:underline hover:text-white hover:font-medium">About</a>
                <hr></hr>
                <a href="#" className="hover:bg-orange-400 px-3 py-2 rounded-md hover:underline hover:text-white hover:font-medium">Contact</a>
            </nav>
                    </div>

                )}



            </div>

        </header>
    )
}
export default Header;