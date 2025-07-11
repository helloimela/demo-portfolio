"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ProductProps } from "../types/ProductTypes";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

const items: ProductProps[] = [
  {
    productId: "1",
    name: "Nasi Goreng",
    price: 20000,
    imageUrl: "/nasi-goreng.jpeg",
  },
  {
    productId: "2",
    name: "Sate Ayam",
    price: 40000,
    imageUrl: "/sate-ayam.jpeg",
  },
  {
    productId: "3",
    name: "Ayam Goreng",
    price: 25000,
    imageUrl: "/ayam-goreng.jpeg",
  },
  {
    productId: "4",
    name: "Telur Balado",
    price: 5000,
    imageUrl: "/telur.jpg",
  },
  {
    productId: "5",
    name: "Soto ayam",
    price: 15000,
    imageUrl: "/soto-ayam.webp",
  },
];

export default function Home() {
  const [cart, setCart] = useState<ProductProps[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  const handleClick = (
    e: React.MouseEvent<HTMLElement>,
    item: ProductProps
  ) => {
    e.preventDefault();
    setCart([...cart, item]);
  };

  useEffect(() => {
    console.log("cart", cart)
    if (cart.length > 0) {
      const newPrice = cart.reduce((a, b) => ({
        price: a.price + b.price,
        productId: a.productId,
        imageUrl: a.imageUrl,
        name: a.name,
      }));
      setTotalPrice(newPrice.price)
    }
    if (totalPrice > 30000) {
      setShowNotification(true);
    }
  }, [cart]);

  return (
    <div>
      <Header title="My shop" cart={totalPrice} />
      {showNotification && (
        <div className="bg-teal-600 text-white rounded-md p-4 m-8 transition-discrete">
          <h4>You have spent {totalPrice}! Here's a free delivery for you!</h4>
          <button
            onClick={() => setShowNotification(false)}
            className="p-2 mt-2 bg-teal-800"
          >
            OK
          </button>
        </div>
      )}
      <div className="flex flex-wrap gap-4 m-4 items-start">
        {items.map(({ name, price, productId, imageUrl }) => (
          <div key={productId} className="bg-gray-200 p-4 flex flex-col">
            <div>
              <Image src={imageUrl} alt={name} width={200} height={200} />
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div>{price}</div>
            </div>
            <button
              className="bg-green-700 text-white p-4 hover:bg-green-600"
              onClick={(e) =>
                handleClick(e, { name, price, productId, imageUrl })
              }
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
