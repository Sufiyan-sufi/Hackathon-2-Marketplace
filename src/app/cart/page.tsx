"use client";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// Define the type for cart items
type CartItem = {
  id: string;
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  inventory: number;
  quantity: number; // Required for quantity management
};

// GROQ query to fetch cart items from Sanity
const CART_QUERY = `*[_type == "products" && inCart == true]{
  _id,
  title,
  price,
  "imageUrl": image.asset->url,
  inventory
}`;

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]); // From Sanity
  const [cart, setCart] = useState<CartItem[]>([]); // From localStorage
  const [totalPrice, setTotalPrice] = useState(0);

  // Fetch cart data from Sanity CMS
  useEffect(() => {
    const fetchCartItems = async () => {
      const data: CartItem[] = await client.fetch(CART_QUERY);
      setCartItems(data);
    };
    fetchCartItems();
  }, []);

  // Sync cart data from localStorage
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(cartData);
  }, []);

  // Update total price whenever cart changes
  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);
  }, [cart]);

  // Handle quantity update
  const updateQuantity = (id: string, delta: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Remove item from cart
  const removeFromCart = (id: string) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="lg:flex lg:gap-10">
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="ml-[18vw]">
            <div className="text-lg mt-10 mb-5">Bag</div>
            {cart.map((item) => (
              <div key={item.id} className="md:flex gap-3 pb-10 mb-10 border-b-2">
                <div>
                  <Image src={item.imageUrl} width={150} height={150} alt={item.title} />
                </div>
                <div>
                  <div className="text-[#272343]">{item.title}</div>
                  <div className="text-gray-500 mt-6">Inventory: {item.inventory}</div>
                  <div className="text-gray-500 gap-5 mt-2">
                    <span className="font-bold">Quantity:</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="ml-2 px-2 py-1 bg-green-500 text-white rounded"
                    >
                      +
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-2 py-1 bg-red-500 text-white rounded"
                    >
                      -
                    </button>
                  </div>
                  <div className="flex gap-3 mt-5">
                    <button
                      className="text-red-500"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="text-[#111111] ml-[20vw]">
                  Price: ${(item.price).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          <div className="w-[300px] xl:w-[400px] ml-14 xl:ml-0">
            <div className="text-2xl font-bold mt-20">Summary</div>
            <div className="text-base mt-10 flex">
              <span>Subtotal</span>
              <span className="font-bold ml-40">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="text-base mt-5">
              <span>Estimated Delivery & Handling</span>
              <span className="font-bold ml-40">Free</span>
            </div>
            <div className="text-base border-t-2 border-b-2 mt-5">
              <span>Total</span>
              <span className="font-bold ml-40">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="text-white mb-10 lg:mb-0 bg-[#029FAE] p-5 pl-14 pr-14 mt-10 rounded-[40px]">
              Member Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
