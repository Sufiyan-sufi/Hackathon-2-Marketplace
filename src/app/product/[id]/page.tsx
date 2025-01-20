"use client";

import { client } from "@/sanity/lib/client";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  // Fetch single product details by ID
  const product = await client.fetch(
    `*[_type == "products" && _id == $id][0]{
      _id,
      title,
      price,
      description,
      "imageUrl": image.asset->url
    }`,
    { id }
  );

  const addToCart = () => {
    // Logic to add the product to cart
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push({
      id: product._id,
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
      quantity: 1,
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="container mx-auto">
      <div className="flex gap-10">
        <Image
          src={product.imageUrl}
          alt={product.title}
          width={400}
          height={400}
        />
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-xl text-gray-600 mt-4">${product.price}</p>
          <p className="text-gray-500 mt-6">{product.description}</p>
          <button
            onClick={addToCart}
            className="bg-blue-500 text-white px-6 py-2 rounded mt-6"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
