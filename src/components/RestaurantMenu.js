import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResItems from "./ResItems";
import { useState } from "react";

const RestaurantMenu = () => {
  const [openSection, setOpenSection] = useState(null); // Track the currently open section

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, veg, nonVeg, recommendedItems } = resInfo;

  // Toggle function to set the section
  const handleToggle = (section) => {
    setOpenSection(openSection === section ? null : section); // Close section if it's already open
  };
 

  return (
    <>
      <div className="align-middle text-center mt-3">
        <h1 className="text-4xl font-bold">{name}</h1>

        {/* Veg Section */}
        <div className="justify-between flex mx-auto w-6/12 bg-gray-200 py-1 px-4 rounded-2xl pb-1.5 shadow-xl mt-6">
          <span className="font-bold text-2xl">Veg Dishes ( {veg.length} items )</span>
          <span className="text-xl mt-0.5 cursor-pointer" onClick={() => handleToggle('veg')}>
            {openSection === 'veg' ? '⬆️' : '⬇️'}
          </span>
        </div>
        {openSection === 'veg' && <ResItems items={veg} />}

        {/* Non-Veg Section */}
        <div className="justify-between flex mx-auto w-6/12 bg-gray-200 py-1 px-4 rounded-2xl pb-1.5 shadow-xl mt-6">
          <span className="font-bold text-2xl">Non-veg Dishes ( {nonVeg.length} items )</span>
          <span className="text-xl mt-0.5 cursor-pointer" onClick={() => handleToggle('nonVeg')}>
            {openSection === 'nonVeg' ? '⬆️' : '⬇️'}
          </span>
        </div>
        {openSection === 'nonVeg' && <ResItems items={nonVeg} />}

        {/* Recommended Section */}
        <div className="justify-between flex mx-auto w-6/12 bg-gray-200 py-1 px-4 rounded-2xl pb-1.5 shadow-xl mt-6">
          <span className="font-bold text-2xl">
            Recommended Dishes ( {recommendedItems.length} items )
          </span>
          <span className="text-xl mt-0.5 cursor-pointer" onClick={() => handleToggle('recommendedItems')}>
            {openSection === 'recommendedItems' ? '⬆️' : '⬇️'}
          </span>
        </div>
        {openSection === 'recommendedItems' && <ResItems items={recommendedItems} />}
      </div>
    </>
  );
};

export default RestaurantMenu;
