import { use } from "react";

const Products = ({ productItems }) => {

    const products = use(productItems);
    console.log(products);
    
    return (
        <div>
            Products
        </div>
    );
};

export default Products;