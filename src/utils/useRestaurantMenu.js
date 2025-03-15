import { useEffect, useState } from "react";
import resList from "../utils/mockData";

const useRestaurantMenu = (resId) =>{
    const [resInfo, setResInfo] = useState(null);

     useEffect(() => {
              setResInfo(resList[resId])
              console.log(resInfo)
            ; 
        },[]);
        
        return resInfo;
}

export default useRestaurantMenu;