import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React from "react";

export const dynamic = "force-dynamic";

const Home = async () => {
  // Fetch featured products and all products separately
  const featuredQuery = `*[_type == "products" && "featured" in tags]{
    price, "imageUrl": image.asset->url, tags, inventory, title, description, _id, category
  }`;

  const allProductsQuery = `*[_type == "products"]{
    price, "imageUrl": image.asset->url, tags, inventory, title, description, _id, category
  }`;

  const featuredProducts = await client.fetch(featuredQuery).catch((error) => {
    console.error("Error fetching featured products:", error);
    return [];
  });

  const allProducts = await client.fetch(allProductsQuery).catch((error) => {
    console.error("Error fetching all products:", error);
    return [];
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Featured Products Section */}
      {featuredProducts.length > 0 && (
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product: any) => (
              <div
                key={product._id}
                className="bg-slate-50 rounded-lg p-4 shadow hover:shadow-lg transition"
              >
                <Image
                  src={product.imageUrl}
                  width={300}
                  height={300}
                  alt={product.title}
                  className="rounded-md"
                />
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="text-gray-600 mt-2">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* All Products Section */}
      {allProducts.length > 0 && (
        <section>
          <h2 className="text-4xl font-bold mb-6">All Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProducts.map((product: any) => (
              <div
                key={product._id}
                className="bg-slate-50 rounded-lg p-4 shadow hover:shadow-lg transition"
              >
                <Image
                  src={product.imageUrl}
                  width={300}
                  height={300}
                  alt={product.title}
                  className="rounded-md"
                />
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="text-gray-600 mt-2">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Fallback Message */}
      {featuredProducts.length === 0 && allProducts.length === 0 && (
        <p className="text-center text-gray-600">No products available.</p>
      )}
    </div>
  );
};

export default Home;
