import resList from "../utils/mockData";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filterRes, setFilterRes] = useState([]); // Holds filtered results
    const [searchText, setSearchText] = useState(''); // Search text as a string
    const PromotedRestaurant = withPromotedLabel(RestaurantCard);

    useEffect(() => {
        // Simulate fetching data 
        setTimeout(() => {
            setRestaurants(resList); // Set restaurants with mock data after timeout
            setFilterRes(resList); // Initialize filterRes with the full list initially
        }, 1000);
    }, []);

    // Handle Search filtering
    const handleSearch = () => {
        const filteredList = restaurants.filter((restaurant) =>
            restaurant.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilterRes(filteredList); // Update filtered results
    };

    // Handle Top Rated filter
    const handleTopRatedFilter = () => {
        const filteredList = restaurants.filter((restaurant) => {
                return restaurant.rating > 4.3;
            }
        );
        setFilterRes(filteredList); // Update filtered results
    };
     
    const onlineStatus = useOnlineStatus()
    if(onlineStatus === false){
        return (
            <h1>Ooops! You are Offline. Check your internet connection</h1>
        )
    }

    return restaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter flex">
                <div className="search mt-4 m-1 ml-27">
                    <input
                        type="text"
                        className="search-box border rounded-2xl shadow-md w-75"
                        value={searchText} 
                        onChange={(e) => setSearchText(e.target.value)} 
                    />
                    <button onClick={handleSearch} className="bg-black mx-1.5 px-3 py-0.5 rounded-2xl shadow-xl text-amber-50">Search</button>
                </div>
                <button className="filter-btn bg-red-400 mt-4 m-1 px-3 py-1 ml-20 rounded-2xl shadow-lg hover:bg-red-500" onClick={handleTopRatedFilter}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container flex flex-wrap ml-25 mt-6">
                {filterRes.map((restaurant) => (
                  <Link key={restaurant.id} to={"/restaurant/"+restaurant.id}>
                    { restaurant.promoted ? (<PromotedRestaurant resData={restaurant}/>) :
                  (<RestaurantCard resData={restaurant} />)}
                </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
