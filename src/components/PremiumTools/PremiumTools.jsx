const PremiumTools = ({ products, setProducts }) => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Premium Digital Tools</h1>
        <p className="max-w-137.5 mx-auto text-[#627382] mb-4">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
      </div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center w-62 mx-auto rounded-full mb-10 shadow-sm border border-zinc-200 bg-white">
        <input
          type="radio"
          name="my_tabs_1"
          className={
            products === "products" ? "w-1/2 btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-6 text-white hover:from-[#9514FA] hover:to-[#4F39F6] shadow-md border-none shadow-[#4F39F6]/90 font-bold" : "tab w-1/2"
          }
          aria-label="Products"
          defaultChecked
          onClick={() => setProducts("products")}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className={
            products === "carts" ? "w-1/2 btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-6 text-white hover:from-[#9514FA] hover:to-[#4F39F6] shadow-md border-none shadow-[#4F39F6]/90 font-bold" : "tab w-1/2"
          }
          aria-label="Cart(0)"
          onClick={() => setProducts("carts")}
        />
      </div>
    </div>
  );
};

export default PremiumTools;
