import React from "react";

interface CartProps {
  items: { name: string; price: number; quantity: number }[];
  total: number;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ items, total, onCheckout }) => {
  return (
    <section className="mt-8 bg-white rounded-lg shadow-md p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <ul>
        {items.map((item) => (
          <li
            key={item.name}
            className="flex justify-between items-center border-b py-2"
          >
            <span>
              {item.name} (x{item.quantity})
            </span>
            <span className="text-green-600 font-bold">
              Rp{item.price * item.quantity}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-lg font-bold">Total:</span>
        <span className="text-green-600 font-bold">Rp{total}</span>
      </div>
      <button
        onClick={onCheckout}
        className="mt-4 bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
      >
        Checkout
      </button>
    </section>
  );
};

export default Cart;
