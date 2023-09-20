import { useContext, useEffect, useState } from "react";
import { Restaurant } from "../../../core/models/Restaurant";
import { Meal } from "../../../core/models/Meal";
import MealsList from "../MealsList";
import { Star, Marker } from "react-flaticons";
import { CartContext } from "../../../core/context/CartContext";
interface CartBoxProps {
  restaurant: Restaurant;
}
const CartBox: React.FC<CartBoxProps> = ({ restaurant }) => {
  const [meals] = useState<Meal[]>([
    { id: 31, name: "soup", image: "/nou.jpg", price: 20 },
    { id: 123, name: "cake", image: "/nou.jpg", price: 15 },
  ]);
  const { data, setData } = useContext(CartContext);
  useEffect(() => {
    setData(meals);
  }, []);
  const totalCategoryPrice = data.reduce(
    (total, meal) => total + meal.price,
    0
  );

  return (
    <div className="border overflow-hidden border-border-primary rounded-xl flex-auto bg-white md:max-w-md self-start md:sticky top-10">
      <div>
        <img
          src={restaurant.image}
          className="w-full object-cover object-center overflow-hidden max-h-48"
        />
      </div>
      <div className="flex flex-col gap-2 items-center py-4 border-b text-center">
        <span className="flex gap-4 items-center">
          {" "}
          <h2 className="font-bold">{restaurant.name}</h2>
          <span className="flex items-center gap-1 text-text-green text-sm">
            {" "}
            <Star size={12} className="" path="red" />
            {restaurant.rating}
          </span>
        </span>
        <span className="flex gap-2 items-center">
          {restaurant.address}{" "}
          <span className="bg-text-primary p-3 rounded-md">
            <Marker size={14} className="text-white" />
          </span>
        </span>
        <span className="bg-text-primary text-white px-5 py-2 rounded-lg">
          {restaurant.lang} Restaurant
        </span>
      </div>
      <div className="block  md:max-h-60 overflow-y-scroll">
        <MealsList meals={data} deleteButton />
      </div>
      <div className="py-4">
        <span className=" p-3">
          <span className="text-sm text-text-gray">Total price: </span>
          <span className="font-bold">{totalCategoryPrice} AED</span>
        </span>
      </div>
    </div>
  );
};
export default CartBox;
