// All Products Page (pages/products/page.tsx)
// "use client";

import { client } from "@/sanity/lib/client"; // Import Sanity client
import Link from "next/link";
import Image from "next/image";

const ProductsPage = async () => {
  // Fetch all products from Sanity
  const products = await client.fetch(`
    *[_type == "products"]{
      _id,
      title,
      price,
      "imageUrl": image.asset->url
    }
  `);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      <div className="grid grid-cols-4 gap-6">
        {products.map((product: any) => (
          <div key={product._id} className="card">
            <Link href={`/singleproduct/${product._id}`}>
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={300}
                height={300}
                className="cursor-pointer"
              />
            </Link>
            <div className="mt-4">
              <h2 className="text-lg font-bold">{product.title}</h2>
              <p className="text-gray-600">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
