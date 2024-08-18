import { useContext } from "react";
import { ProductContext } from "../../context/ProductProvider";

const ProductCard = ({ product }) => {
    const { addToCart, cart, incrementItem, decrementItem } =
        useContext(ProductContext);

    const currItem = cart?.find((item) => item._id === product._id);
    function handleCart() {
        //check if product is already in cart
        let item = cart.find((currItem) => currItem._id === product._id);
        if (item) {
            item["qty"] += 1;
        } else {
            item = { ...product, qty: 1 };
        }

        addToCart(item);
    }
    return (
        <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="w-full h-64 bg-gray-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contian"
                />
            </div>

            <div className="p-6 text-center">
                <h2 className="text-2xl font-semibold text-gray-800">
                    {product.title}
                </h2>
                <p className="text-xl text-gray-600 mt-2">
                    {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "INR",
                    }).format(product.price)}
                </p>
                {currItem?._id === product._id ? (
                    <div className="mt-4 px-4 py-2 flex justify-center">
                        <button
                            className="px-2 py-1 bg-gray-200 rounded-lg"
                            onClick={() => {
                                decrementItem(currItem);
                            }}
                        >
                            -
                        </button>
                        <p className="px-2">{currItem.qty}</p>
                        <button
                            className="px-2 py-1 bg-gray-200 rounded-lg"
                            onClick={() => incrementItem(currItem)}
                        >
                            +
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={handleCart}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                    >
                        Add to Cart
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
