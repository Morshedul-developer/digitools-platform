const CartCard = ({card, handleRemove}) => {
    const {name, price, icon} = card;
    return (
        <div className="bg-[#F9FAFC] p-5 rounded-2xl flex items-center justify-between">
            <div>
                <div></div>
                <div className="space-y-1.5">
                    <h5 className="text-xl font-semibold">{name}</h5>
                    <span className="font-medium text-gray-500">${price}</span>
                </div>
            </div>
            <div>
                <button onClick={()=>handleRemove(card)} className="btn btn-ghost text-red-600 rounded-full border-none">Remove</button>
            </div>
        </div>
    );
};

export default CartCard;