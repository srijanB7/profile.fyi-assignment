// @ts-nocheck
import { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductProvider";
import ProductCard from "../components/ProductCard/ProductCard";
import Navbar from "../components/Navbar/Navbar";

function Products() {
    const { products, getProducts } = useContext(ProductContext);
    console.log(products);

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <Navbar />

            <div className="container mx-auto p-4">
                <div className="grid gap-6 grid-cols-1 sm:items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products;
