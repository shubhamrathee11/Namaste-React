import { useSelector, useDispatch } from "react-redux";
import ResItems from "./ResItems";
import { removeItem } from "../utils/cartSlice";
import { clearCart } from "../utils/cartSlice";
import { useState } from "react";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.item);
    const dispatch = useDispatch();
    
    // State for coupon code
    const [couponCode, setCouponCode] = useState("");
    const [isCouponValid, setIsCouponValid] = useState(false);

    // Calculate total price of the items in the cart
    const getTotalPrice = () => {
        const total = cartItems.reduce((total, item) => total + item.price, 0);
        return total;
    };

    const handleRemoveItem = () => {
        dispatch(removeItem());
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleApplyCoupon = () => {
        if (couponCode === "discount20" || "DISCOUNT20") {
            setIsCouponValid(true);
        } else {
            setIsCouponValid(false);
            alert("Invalid Coupon Code");
        }
    };

    const handleRemoveCoupon = () => {
        setIsCouponValid(false);
        setCouponCode(""); // Optionally clear the coupon code input as well
    };

    const discountedTotal = isCouponValid ? getTotalPrice() * 0.8 : getTotalPrice(); // Apply 20% discount

    return (
        <div>
            {cartItems.length > 0 && (
                <div className="flex justify-center mt-4 px-4 bg-gray-950 text-amber-50 py-2.5">
                    <h2 className="font-bold text-xl mr-2.5">Total Price :</h2>
                    <h2 className="font-bold text-xl">₹ {discountedTotal.toFixed(2)}</h2>
                </div>
            )}

            {/* Coupon applied message */}
            {isCouponValid && (
                <div className="flex justify-center mt-2 px-4 bg-green-500 text-amber-50 py-2.5">
                    <h2 className="font-bold text-xl">Coupon Applied: 20% off</h2>
                </div>
            )}

            <div className="flex justify-evenly">
                <div className="flex my-4 justify-center">
                    <button
                        className="ml-2 p-2 bg-black text-white rounded-md cursor-pointer"
                        onClick={handleRemoveItem}
                    >
                        Remove Item
                    </button>
                </div>
                <div className="flex my-4 justify-center">
                    <button
                        className="ml-2 p-2 bg-red-600 text-white rounded-md cursor-pointer"
                        onClick={handleClearCart}
                    >
                        Clear Cart
                    </button>
                </div>
            </div>

            <ResItems items={cartItems} />

            <div className="flex justify-center mt-4">
                <input
                    type="text"
                    placeholder="Enter Coupon Code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="p-2 border rounded-md"
                />
                <button
                    onClick={handleApplyCoupon}
                    className="ml-2 p-2 bg-green-600 text-white rounded-md"
                >
                    Apply Coupon
                </button>

                {/* Remove Coupon Button */}
                {isCouponValid && (
                    <button
                        onClick={handleRemoveCoupon}
                        className="ml-2 p-2 bg-red-600 text-white rounded-md"
                    >
                        Remove Coupon
                    </button>
                )}
            </div>

            <div className="flex justify-center">
                {cartItems.length === 0 && (
                    <h1>Cart is empty. Add items to the cart!</h1>
                )}
            </div>
        </div>
    );
};

export default Cart;
