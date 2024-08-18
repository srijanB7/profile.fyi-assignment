import { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";

function Cart() {
    const {
        cart,
        incrementItem,
        decrementItem,
        removeFromCart,
        handleCheckout,
        handleDiscount,
        discount,
    } = useContext(ProductContext);

    let total = cart.reduce((acc, item) => {
        
        return acc + item.qty * item.price ;
    }, 0);
    if(discount) {
        total = total - total * 0.1;
    }
    if (cart.length === 0) {
        return (
            <div>
                <Navbar />
                <div className="text-center mt-6">
                    <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
                    <p>
                        No Items in your Cart!{" "}
                        <Link
                            className="text-black underline rounded-lg text-lg"
                            to="/products"
                        >
                            Continue Shopping
                        </Link>
                    </p>
                </div>
            </div>
        );
    }
    return (
        <div>
            <Navbar />
            <div className="container mx-auto mt-6 p-4">
                <h2 className="text-2xl font-semibold mb-4 text-center">
                    Your Cart
                </h2>
                <div className="grid grid-cols-1 gap-4">
                    {cart.map((item) => (
                        <div
                            key={item._id}
                            className="flex items-center justify-between p-4 border rounded-lg shadow-md"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-20 h-20 object-cover"
                            />
                            <div className="flex flex-col flex-grow ml-4">
                                <h3 className="text-lg font-semibold">
                                    {item.name}
                                </h3>
                                <p className="text-gray-500">
                                    ₹{item.price} * {item.qty}{" "}
                                </p>
                                <div className="flex items-center mt-2">
                                    <button
                                        className="px-2 py-1 bg-gray-200 rounded-lg"
                                        onClick={() => {
                                            decrementItem(item);
                                        }}
                                    >
                                        -
                                    </button>
                                    <p className="px-2">{item.qty}</p>
                                    <button
                                        className="px-2 py-1 bg-gray-200 rounded-lg"
                                        onClick={() => incrementItem(item)}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <button
                                className="ml-4 px-4 py-2 bg-red-500 text-white rounded-lg"
                                onClick={() => removeFromCart(item)}
                            >
                                Remove Item
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-6 p-4 border rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Cart Summary</h3>
                    <div className="flex justify-between mb-2">
                        <span>Total:</span>
                        <span>₹{total}</span>
                    </div>
                    {
                        <div className="flex justify-between mb-2">
                            <span>Discount:</span>
                            {!discount ? (
                                <button
                                    className=" px-4 py-2 bg-blue-500 text-white rounded-lg"
                                    onClick={handleDiscount}
                                >
                                    Get 10% off
                                </button>
                            ) : (
                                <>
                                    <p>-{}</p>
                                    <p>10 % discount applied</p>
                                </>
                            )}
                        </div>
                    }
                    {/* <div className="flex justify-between font-semibold text-lg">
                        <span>Total Price:</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div> */}
                    <button
                        className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-lg"
                        onClick={() => handleCheckout()}
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
