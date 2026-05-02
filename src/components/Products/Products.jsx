import { use } from "react";
import Product from "../Product/Product";

const Products = ({ productItems }) => {

    const products = use(productItems);
    
    return (
        <div className="max-w-7xl mx-auto mb-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                    products.map(product => <Product key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Products;