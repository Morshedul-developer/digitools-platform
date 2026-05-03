import { LuShoppingCart } from "react-icons/lu";
import CartCard from "../CartCard/CartCard";

const Carts = ({ cards, setCards}) => {
  const handleCarts = () => {
    setCards([]);
  }
  const total = cards.reduce((sum, card) => sum + card.price, 0);
  return (
    <div className="max-w-7xl mx-auto mb-20">
      <div className="border border-gray-200 p-8 rounded-2xl shadow-xl">
        <h4 className="text-2xl font-bold mb-6">Your Cart</h4>
        <div className="space-y-4 mb-4">
          {cards.map((card) => (
            <CartCard key={card.id} card={card} />
          ))}
        </div>
        {/* empty cart */}
        {cards.length === 0 ? <div className="text-center">
            <LuShoppingCart className="mx-auto text-7xl text-gray-300 mb-4" />
            <p className="text-gray-400 mb-2">Your cart is empty</p>
          </div> : <><div className="flex items-center justify-between mb-5">
          <span className="text-gray-500">Total:</span>
          <strong className="text-2xl">${total}</strong>
        </div>
        <button onClick={handleCarts} className="btn rounded-full w-full border-none bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white hover:from-[#9514FA] hover:to-[#4F39F6] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#4F39F6]/40 active:translate-y-0 active:scale-95 hover:text-white/85 font-bold">
          Proceed to Checkout
        </button></>}
        
      </div>
    </div>
  );
};

export default Carts;
