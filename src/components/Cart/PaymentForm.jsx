import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";

const PaymentForm = ({ closeForm }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const { clearCart, state } = useCart();

  const totalAmount = state.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePaymentSubmit = () => {
    if (cardNumber && expirationDate && nameOnCard) {
      toast.success("Payment Process Successful!");
      clearCart();
      closeForm();
    } else {
      toast.error("You must fill out all fields");
    }
  };

  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
      <div className="mb-4">
        <label
          htmlFor="cardNumber"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Card Number
        </label>
        <input
          type="tel"
          id="cardNumber"
          placeholder="1234 5678 9012 3456"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="shadow border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="expirationDate"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Expiration Date
        </label>
        <input
          type="month"
          id="expirationDate"
          placeholder="MM/YY"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
          className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="nameOnCard"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Name on Card
        </label>
        <input
          type="text"
          id="nameOnCard"
          placeholder="Jomar Berdejo"
          value={nameOnCard}
          onChange={(e) => setNameOnCard(e.target.value)}
          className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex flex-col gap-2 md:justify-between">
        <button
          type="button"
          onClick={handlePaymentSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Confirm Payment (${totalAmount.toFixed(2)})
        </button>
        <button
          type="button"
          onClick={closeForm}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Close
        </button>
      </div>
    </form>
  );
};

export default PaymentForm;
