import { useState } from "react";
import product1 from "/images/image-product-1.jpg";
import product2 from "/images/image-product-2.jpg";
import product3 from "/images/image-product-3.jpg";
import product4 from "/images/image-product-4.jpg";

// thumbnails
import thumbnail1 from "/images/image-product-1-thumbnail.jpg";
import thumbnail2 from "/images/image-product-2-thumbnail.jpg";
import thumbnail3 from "/images/image-product-3-thumbnail.jpg";
import thumbnail4 from "/images/image-product-4-thumbnail.jpg";

const Product = ({ setCartItems }) => {

  const images = [product1, product2, product3, product4];
  const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];

  const [selectedImage, setSelectedImage] = useState(product1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [qty, setQty] = useState(1);

  // ADD TO CART LOGIC
  const handleAddToCart = () => {
    const newItem = {
      id: 1,
      title: "Fall Limited Edition Sneakers",
      thumbnail: thumbnail1,
      price: 125,
      qty
    };

    // Add or increase quantity
    setCartItems(prev => {
      const existing = prev.find(item => item.id === newItem.id);

      if (existing) {
        return prev.map(item =>
          item.id === newItem.id
            ? { ...item, qty: item.qty + qty }
            : item
        );
      }

      return [...prev, newItem];
    });

    setQty(1); // reset quantity
  };


    // Mobile slider handlers
  const prevImage = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const nextImage = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-4 flex flex-col md:flex-row md:gap-20 gap-10">

      {/* product image section */}
      <div>
        <div className="w-full max-w-xl mb-6">
          <img src={selectedImage} alt="product" className="rounded-xl" />
        </div>

        {/* Mobile arrows */}
        <div>
          <button
          onClick={prevImage}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white p-2 rounded-full shadow-md md:hidden">
          <img src="/images/icon-previous.svg" alt="arrow-icon"/>
        </button>

        <button
          onClick={nextImage}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white p-2 rounded-full shadow-md md:hidden">
         <img src="/images/icon-next.svg" alt="arrow-icon"/>
        </button>
        </div>


        <div className="hidden md:flex gap-4 justify-center">
          {thumbnails.map((thumbnail, index) => (
            <img
              key={index}
              src={thumbnail}
              alt="thumbnail"
              onClick={() => setSelectedImage(images[index])}
              className={`w-20 rounded-lg cursor-pointer border-2 transition 
               ${selectedImage === images[index] ? "border-orange-500 opacity-60" : "border-transparent hover:opacity-70"}`}
            />
          ))}
        </div>
      </div>

      {/* product detail */}
      <div className="space-y-3 max-w-lg">
        <h3 className="font-medium text-gray-600 uppercase">Sneaker Company</h3>
        <h1 className="font-bold text-3xl md:text-6xl">Fall Limited Edition Sneakers</h1>
        <p className="text-md text-gray-500">
            These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.
        </p>

        <div className="space-y-1 flex md:flex-col justify-between">
          <div className="flex items-center gap-4">
            <p className="text-3xl font-bold">$125.00</p>
            <p className="bg-black px-2 py-1 rounded-md text-white font-semibold">50%</p>
          </div>
          <p className="line-through text-gray-500">$250.00</p>
        </div>

        {/* Quantity Selector + Add to Cart */}
        <div className="flex flex-col md:flex-row items-center gap-4 mt-6">

          {/* Quantity */}
          <div className="flex items-center bg-gray-200 px-4 py-2 rounded-lg gap-4">
            <button onClick={() => qty > 1 && setQty(qty - 1)} className="text-orange-500 font-bold text-xl">−</button>
            <p className="font-bold">{qty}</p>
            <button onClick={() => setQty(qty + 1)} className="text-orange-500 font-bold text-xl">+</button>
          </div>

          {/* Add to cart button */}
          <button 
            onClick={handleAddToCart}
            className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition cursor-pointer">
            <img src="/images/icon-cart.svg" alt="cart" />
            Add to cart
          </button>

        </div>

      </div>

    </div>
  );
};

export default Product;
