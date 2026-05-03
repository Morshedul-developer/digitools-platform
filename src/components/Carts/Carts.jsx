const Carts = () => {
    return (
        <div className="max-w-7xl mx-auto mb-20">
            <div className="border border-gray-200 p-8 rounded-2xl shadow-xl">
            <h4 className="text-2xl font-bold mb-6">Your Cart</h4>
            <div className="flex items-center justify-between mb-5">
                <span className="text-gray-500">Total:</span>
                <strong className="text-2xl">$0</strong>
            </div>
            <button className="btn rounded-full w-full border-none bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white hover:from-[#9514FA] hover:to-[#4F39F6] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#4F39F6]/40 active:translate-y-0 active:scale-95 hover:text-white/85 font-bold">Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default Carts;