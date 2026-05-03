const CartCard = ({ card, handleRemove }) => {
  const { name, price, icon } = card;
  return (
    <div className="bg-[#F9FAFC] p-5 rounded-2xl flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 border border-gray-200 flex justify-center items-center rounded-full">
          <img className="w-8" src={icon} alt={name} />
        </div>
        <div className="space-y-1.5">
          <h5 className="text-xl font-semibold">{name}</h5>
          <span className="font-medium text-gray-500">${price}</span>
        </div>
      </div>
      <div>
        <button
          onClick={() => handleRemove(card)}
          className="btn btn-ghost text-red-600 rounded-full border-none"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
