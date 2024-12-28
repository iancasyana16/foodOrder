import React from "react";

interface FoodCardProps {
  food: { name: string; price: number };
  onAddToCart: (food: { name: string; price: number }) => void;
}

const FoodCard: React.FC<FoodCardProps> = ({ food, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-bold">{food.name}</h3>
      <p className="text-green-600 font-bold">Rp{food.price}</p>
      <button
        onClick={() => onAddToCart(food)}
        className="mt-2 bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
      >
        Add
      </button>
    </div>
  );
};

export default FoodCard;
