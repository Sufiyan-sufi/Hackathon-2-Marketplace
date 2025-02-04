"use client";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import SearchBar from "./components/Searchbar";

export const dynamic = "force-dynamic";

interface Product {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
}

const PageHome = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const featuredQuery = `*[_type == "products" && "featured" in tags]{
          price, "imageUrl": image.asset->url, tags, inventory, title, description, _id, category
        }`;

        const allProductsQuery = `*[_type == "products"]{
          price, "imageUrl": image.asset->url, tags, inventory, title, description, _id, category
        }`;

        const [featured, all] = await Promise.all([
          client.fetch(featuredQuery),
          client.fetch(allProductsQuery),
        ]);

        setFeaturedProducts(featured);
        setProducts(all);
        setFilteredProducts(all);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (query: string) => {
    if (query.trim() === "") {
      setFilteredProducts(products);
    } else {
      const lowerQuery = query.toLowerCase();
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(lowerQuery)
      );
      setFilteredProducts(filtered);
    }
  };

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <SearchBar onSearch={handleSearch} />



      {filteredProducts.length > 0 ? (
        <section>
          <h2 className="text-4xl font-bold mb-6">All Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </section>
      ) : (
        <p className="text-center text-gray-600">No products available.</p>
      )}

      {featuredProducts.length > 0 && (
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

const ProductCard = ({ product }: { product: Product }) => (
  <div className="bg-slate-50 rounded-lg p-4 shadow hover:shadow-lg transition">
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
);

export default PageHome;
