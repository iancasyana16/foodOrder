'use client'
import React, { useState } from "react";
import FoodCard from "@/components/foodCard";
import Cart from "@/components/cart";

export default function App() {
  const [cartItems, setCartItems] = useState<
    { name: string; price: number; quantity: number }[]
  >([]);

  const foods = [
    { name: "Nasi Goreng", price: 25000 },
    { name: "Mie Ayam", price: 20000 },
    { name: "Seblak", price: 15000 },
  ];

  const handleAddToCart = (food: { name: string; price: number }) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === food.name);
      if (existingItem) {
        return prevItems.map((item) =>
          item.name === food.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...food, quantity: 1 }];
      }
    });
  };

  const handleCheckout = () => {
    const orderDetails = cartItems
      .map(
        (item) =>
          `${item.name} (x${item.quantity}) - Rp${item.price * item.quantity}`
      )
      .join("\n");

    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const message = `Pesanan Anda:\n\n${orderDetails}\n\nTotal: Rp${total}\n\nTerima kasih telah memesan!`;
    const whatsappLink = `https://wa.me/6281460372117?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappLink, "_blank"); // Membuka tautan WhatsApp
    setCartItems([]); // Mengosongkan keranjang setelah checkout
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-600 text-white p-4">
        <h1 className="text-xl font-bold">Food Ordering</h1>
      </header>
      <main className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Menu</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {foods.map((food) => (
            <FoodCard
              key={food.name}
              food={food}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
        <Cart items={cartItems} total={total} onCheckout={handleCheckout} />
      </main>
    </div>
  );
}
