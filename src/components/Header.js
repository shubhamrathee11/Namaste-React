import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./Context";
import { useState, useContext } from "react";
import { createSlice } from "@reduxjs/toolkit";
import appStore from "../utils/appStore";
import { useSelector } from "react-redux";

const Header = () => {
    const {LoggedInUser}=useContext(UserContext);
    const onlineStatus = useOnlineStatus();
    const cart = useSelector((store) => store.cart.item);
    // const [name, setName] = useState(UserContext)
    return (
        <div className="flex justify-between m-1 bg-blue-400 shadow-xl rounded-2xl">
            <div className="rounded-2xl ml-2.5" ><p>{}</p>
                <img 
                    className="w-24 rounded-2xl" 
                    src={LOGO_URL} 
                    alt="Website Logo" 
                />
                <h4 className="font-bold pl-3.5 text-amber-50">FoodTAIL</h4>
            </div>
            <div className="">
                <ul className="flex p-4 m-4">
                    <li className="mx-4 font-bold text-2xl border rounded-2xl px-1.5">
                        Online Status : {onlineStatus ? "✔️": "🔴"  }
                    </li>
                    <li className="mx-4 font-bold text-2xl">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mx-4 font-bold text-2xl">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="mx-4 font-bold text-2xl">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="mx-4 font-bold text-2xl">
                        <Link to="/cart">Cart {<span className="text-amber-50 bg-black rounded-2xl pb-0.5 px-2.5">{cart.length}</span>}</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
