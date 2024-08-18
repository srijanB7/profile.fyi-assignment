// @ts-nocheck
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";

export const ProductContext = createContext();

function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [discount, setDiscount] = useState(false);
    const navigate = useNavigate();
    async function getProducts() {
        try {
            const res = await fetch("src/db/data.json");
            const data = await res.json();
            // console.log(data);

            if (res.ok) setProducts(data?.data);
        } catch (err) {
            console.error("failed to fetch");
        }
    }

    function addToCart(product) {
        setCart([...cart, product]);
        toast.success("Item added to cart");
    }

    function incrementItem(product) {
        let item = cart.find((currItem) => product._id === currItem._id);
        item["qty"] += 1;
        const updatedCart = cart.map((currItem) => {
            if (currItem._id === product._id) {
                return item;
            }
            return currItem;
        });
        setCart([...updatedCart]);
    }

    function decrementItem(product) {
        let item = cart.find((currItem) => product._id === currItem._id);

        let updatedCart;
        if (item["qty"] > 1) {
            item["qty"] -= 1;
            updatedCart = cart.map((currItem) => {
                if (currItem._id === product._id) {
                    return item;
                }
                return currItem;
            });
        } else {
            updatedCart = cart.filter(
                (currItem) => product._id !== currItem._id
            );
        }
        setCart([...updatedCart]);
    }

    function removeFromCart(product) {
        const updatedCart = cart.filter(
            (currItem) => product._id !== currItem._id
        );
        setCart([...updatedCart]);
        toast.success("Item removed from cart");
    }

    function handleCheckout() {
        setCart([]);
        toast.success("Order Placed. Thanks for shopping");
        navigate("/products");
    }

    function handleDiscount() {
        setDiscount(true);
        toast.success("10 % discount applied");
    }

    const value = {
        products,
        cart,
        discount,
        getProducts,
        addToCart,
        incrementItem,
        decrementItem,
        removeFromCart,
        handleCheckout,
        handleDiscount,
    };

    return (
        <ProductContext.Provider value={value}>
            <Toaster position="top-center" />
            {children}
        </ProductContext.Provider>
    );
}

export default ProductProvider;
