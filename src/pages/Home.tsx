import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function Home() {
    return (
        <>
            <Navbar />
            <div className="container mt-2 mx-auto px-4">
                {/* Hero Section */}
                <div
                    className="hero bg-cover bg-center h-[500px] flex items-center justify-center text-white"
                    style={{
                        backgroundImage:
                            "url('https://res.cloudinary.com/dcxnaihyu/image/upload/v1684359236/best-season-sale-banner-design-template_2239-1175_tx5bcp.jpg')",
                    }}
                >
                    <div className="text-center">
                        <Link
                            to="/products"
                            className="px-8 py-3 bg-blue-500 text-white rounded-lg text-lg font-semibold"
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>

                {/* About Us Section */}
                <div className="mt-16 bg-gray-100 p-8 rounded-lg">
                    <h2 className="text-3xl font-semibold text-center mb-4">
                        About Us
                    </h2>
                    <p className="text-lg text-center text-gray-700 max-w-2xl mx-auto">
                        Welcome to our clothing store! We offer a wide range of
                        fashion products to suit every style. Our mission is to
                        provide high-quality, trendy clothing at affordable
                        prices. Browse our latest collections and find the
                        perfect outfit for any occasion.
                    </p>
                </div>

                {/* Footer Section */}
                <div className="mt-16 bg-gray-800 text-white p-8 text-center">
                    <p>2024 My Store . All Rights Reserved.</p>
                    <p>
                        Follow us on
                        <a href="#" className="text-blue-400 ml-2">
                            Instagram
                        </a>
                        ,
                        <a href="#" className="text-blue-400 ml-2">
                            Facebook
                        </a>
                        ,
                        <a href="#" className="text-blue-400 ml-2">
                            Twitter
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Home;
