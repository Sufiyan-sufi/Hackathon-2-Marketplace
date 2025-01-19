"use client";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// Define the type for cart items
type CartItem = {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  inventory: number;
  quantity?: number; // Optional because it might not exist initially
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
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Fetch cart data from Sanity CMS
  useEffect(() => {
    const fetchCartItems = async () => {
      const data: CartItem[] = await client.fetch(CART_QUERY);
      setCartItems(data);
    };
    fetchCartItems();
  }, []);

  // Update total price whenever cart items change
  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0
    );
    setTotalPrice(total);
  }, [cartItems]);

  // Handle quantity update
  const updateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id
          ? { ...item, quantity: Math.max(1, (item.quantity || 1) + delta) }
          : item
      )
    );
  };

  // Handle item removal
  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item._id !== id));
  };

  return (
    <div className="lg:flex lg:gap-10">
      <div className="ml-[18vw]">
        <div className="text-lg mt-10 mb-5">Bag</div>
        {cartItems.map((item) => (
          <div key={item._id} className="md:flex gap-3 pb-10 mb-10 border-b-2">
            <div>
              <Image src={item.imageUrl} width={150} height={150} alt={item.title} />
            </div>
            <div>
              <div className="text-[#272343]">{item.title}</div>
              <div className="text-gray-500 mt-6">Inventory: {item.inventory}</div>
              <div className="text-gray-500 gap-5">
                <span>Quantity {item.quantity || 1}</span>{" "}
                <button onClick={() => updateQuantity(item._id, 1)}>+</button>{" "}
                <button onClick={() => updateQuantity(item._id, -1)}>-</button>
              </div>
              <div className="flex gap-3 mt-5">
                <button
                  className="text-red-500"
                  onClick={() => removeItem(item._id)}
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="text-[#111111] ml-[20vw]">MRP: ${item.price}</div>
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
    </div>
  );
};

export default Cart;
