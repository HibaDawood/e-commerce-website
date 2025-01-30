"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";
const sanity = createClient({
  projectId: "ac3557wd",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});
interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  productImage: {
    asset: {
      _ref: string;
    };
  };
  tags: string[];
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]); // Wishlist state
  // Fetch products from Sanity
  const fetchProducts = async () => {
    try {
      const query = `
 *[_type == "product"] {
 _id,
 title,
 price,
 description,
 discountPercentage,
 "imageUrl": productImage.asset->url,
 tags
 }`;

      const data = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error Fetching Products:", error);
    }
  };

  // Add product to cart
  const addToCart = (product: Product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.title} has been added to your cart!`);
  };

  // Remove product from cart
  const removeFromCart = (index: number) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Add product to wishlist
  const addToWishlist = (product: Product) => {
    const isInWishlist = wishlist.some((item) => item._id === product._id);
    if (!isInWishlist) {
      const updatedWishlist = [...wishlist, product];
      setWishlist(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      alert(`${product.title} has been added to your wishlist!`);
    } else {
      alert(`${product.title} is already in your wishlist!`);
    }
  };

  // Remove product from wishlist
  const removeFromWishlist = (index: number) => {
    const updatedWishlist = wishlist.filter((_, i) => i !== index);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  // Load cart and wishlist from localStorage on page load
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
    fetchProducts();
  }, []);

  // Truncate long descriptions
  const truncateDescription = (description: string) => {
    return description.length > 100
      ? description.substring(0, 100) + "..."
      : description;
  };

  return (
    <div
      style={{
        fontFamily: "Prompt",
      }}
      className="p-4"
    >
      <h2 className="text-center text-black mt-4 mb-4 text-2xl font-bold">
        Products From API Data
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-purple-50 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-48 object-cover rounded-md"
            />

            <div className="mt-4">
              <h2 className="text-xl text-yellow-600 font-bold">
                {product.title}
              </h2>

              <p className="text-black mt-2 text-sm">
                {truncateDescription(product.description)}
              </p>

              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-blue-700 font-bold">${product.price}</p>

                  {product.discountPercentage > 0 && (
                    <p className="text-sm text-green-700">
                      {product.discountPercentage}% OFF
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-2 flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs text-black rounded-lg bg-yellow-100 px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Add to cart and wishlist buttons */}

              <div className="mt-4 flex gap-2">
                <button
                  className="relative inline-block w-48 py-2 font-medium group"
                  onClick={() => addToCart(product)}
                >
                  <span
                    className="absolute inset-0 w-full h-full transition duration-200 ease-out transform
                   bg-blue-700 -translate-x-0 -translate-y-0"
                  ></span>

                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-blue-700 group-hover:bg-blue-800"></span>

                  <span className="relative text-blue-900 group-hover:text-white">
                    Add To Cart
                  </span>
                </button>

                <button
                  className="relative inline-block w-48 py-2 font-medium group"
                  onClick={() => addToWishlist(product)}
                >
                  <span
                    className="absolute inset-0 w-full h-full transition duration-200 ease-out transform
                   bg-yellow-600 -translate-x-0 -translate-y-0"
                  ></span>

                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-yellow-500 group-hover:bg-yellow-400"></span>

                  <span className="relative text-yellow-500 group-hover:text-white">
                   Add To WishList
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h1 className="flex justify-center my-11 text-4xl font-extrabold text-blue-950">
        CART SUMMARY
      </h1>

      {/* Cart Summary */}

      <div className="mt-6 bg-slate-200 p-6 rounded-lg shadow-md">
        <h2 className="font-extrabold text-xl text-yellow-600">Cart Summary</h2>

        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex items-center bg-white shadow-sm p-4 rounded-md"
              >
                <div className="flex-grow">
                  <p className="font-bold text-lg text-gray-900">
                    {item.title}
                  </p>

                  <p className="font-bold text-lg text-blue-600">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="rounded-md h-16 my-2 w-16 ml-10"
                />

                <button
                  onClick={() => removeFromCart(index)}
                  className="ml-4 px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-black text-center font-semibold">
            Your Cart is Empty Please Add Products
          </p>
        )}
      </div>

      {/* Wishlist Summary */}

      <h1 className="flex justify-center my-11 text-4xl font-extrabold text-blue-950 ">
        WISHLIST SUMMARY
      </h1>

      <div className="mt-6 bg-slate-200 p-6 rounded-lg shadow-md">
        <h2 className="font-extrabold text-xl text-yellow-600">
          Wishlist Summary
        </h2>

        {wishlist.length > 0 ? (
          <ul className="space-y-4">
            {wishlist.map((item, index) => (
              <li
                key={index}
                className="flex items-center bg-white shadow-sm p-4 rounded-md"
              >
                <div className="flex-grow">
                  <p className="font-bold text-lg text-gray-900">
                    {item.title}
                  </p>

                  <p className="font-bold text-lg text-blue-600">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="rounded-md h-16 my-2 w-16 ml-10"
                />

                <button
                  onClick={() => removeFromWishlist(index)}
                  className="ml-4 px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-black text-center font-semibold">
            Your Wishlist is Empty Please Add Products
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCards;
