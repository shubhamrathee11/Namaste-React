import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ResItems = ({ items }) => {
  const dispatch = useDispatch()
  const handleChange = (item) => {
    dispatch(addItem(item));
  }

    return (
      <div className="bg-amber-100 w-6/12 mx-auto font-bold mb-3 rounded-lg">
        <ul>
          {items.map((item) => (
            <li key={item.id} className="border-b-2 py-2 flex justify-between ml-2 mr-2">
              {item.item} - ₹ {item.price}
              <button className="bg-white px-1.5 rounded-xl font-bold cursor-pointer border" onClick={()=>handleChange(item)}>Add+</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ResItems;
  
