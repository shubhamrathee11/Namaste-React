const RestaurantCard = (props) =>{
    const {resData} = props
    const{name, rating, picture , foodVariety, deliveryTime} = resData
    return(
        <div className="res-card m-2 p-4 rounded-2xl bg-gray-300 w-[270] hover:bg-gray-400 shadow-lg">
                <img className="image rounded-2xl w-250 h-[200]"
                alt="image"
                src= {picture}/>
            <h1 className="font-bold text-xl py-2 text-center border-b-2">{name}</h1>
            <div className="bg-gray-400 my-1.5 rounded-lg px-1.5 py-2.5">
            <h3>{foodVariety}</h3>
            <h3>{<b>Ratings :</b>} {rating}</h3>
            <h3>{<b>Delivery time :</b>} {deliveryTime}</h3>
            </div>
        </div>
    )
}

export const withPromotedLabel = () => {
    return (props)=> {
        return (
        <div>
            <p className="absolute bg-black px-1 rounded-lg text-white">PROMOTED</p>
            <RestaurantCard {...props}/>
        </div>
        );
    }
}
export default RestaurantCard;