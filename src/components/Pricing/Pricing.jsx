import { use } from "react";
import PricingCard from "../PricingCard/PricingCard";

const Pricing = ({pricingItems}) => {
    const pricings = use(pricingItems);
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="max-w-137.5 mx-auto text-[#627382] mb-7">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>
        {/* cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {
            pricings.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default Pricing;
