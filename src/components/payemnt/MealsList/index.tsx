import { Eye, Star, Trash } from "react-flaticons";
import { Meal } from "../../../core/models/Meal";
import { CartContext } from "../../../core/context/CartContext";
import { useContext } from "react";

interface MealsListProps {
  meals: Meal[];
  checkBox?: boolean;
  deleteButton?: boolean;
}
const MealsList: React.FC<MealsListProps> = ({
  meals,
  checkBox = false,
  deleteButton,
}) => {
  const { setData } = useContext(CartContext);

  return (
    <div className="flex flex-col gap-3">
      {meals.map((meal) => (
        <label
          key={meal.id}
          className={`relative block   ${checkBox ? "cursor-pointer" : ""}`}
        >
          {checkBox && (
            <input
              name={`${meal.id}`}
              onChange={(e) => {
                e.target.checked
                  ? setData((prev: Meal[]) => [...prev, meal])
                  : setData((prev: Meal[]) =>
                      prev.filter((item) => meal.id != item.id)
                    );
              }}
              type="checkbox"
              id={`${meal.id}`}
              className="absolute right-2 bottom-6 xs:hidden peer"
            />
          )}
          <div className="flex  justify-between peer-checked:bg-text-bluesecondary/5 peer-checked:ring-text-blue peer-checked:ring-2 rounded-xl p-3">
            <div className="flex xs:flex-wrap gap-3 items-center ">
              <img className="w-20 rounded-md" src={meal.image} />
              <div>
                <h3
                  className={`font-semibold ${
                    !checkBox ? "text-text-bluesecondary" : ""
                  }`}
                >
                  {meal.name}
                </h3>
                <div className="flex gap-2">
                  <p className="text-sm font-bold">AED {meal.price}</p>
                  {meal.rating && checkBox && (
                    <span className="flex items-center gap-1 text-text-green text-sm">
                      <Star size={12} className="" path="red" />
                      {meal.rating}
                    </span>
                  )}
                </div>
              </div>
              <span className="text-sm text-text-gray self-end">
                {meal.description}
              </span>
            </div>
            <div className="self-end flex gap-3">
              {checkBox && (
                <>
                  <button className="p-2 hover:bg-blue-200/20 rounded-xl duration-200">
                    <Eye className="text-text-gray" />
                  </button>
                  <span className="w-2 block xs:hidden"></span>
                </>
              )}
              {deleteButton && (
                <span
                  className="p-2 hover:bg-blue-200/20 rounded-xl duration-200"
                  onClick={() => {
                    setData((prev: Meal[]) =>
                      prev.filter((item) => meal.id != item.id)
                    );
                  }}
                >
                  <Trash className="text-text-gray cursor-pointer" />
                </span>
              )}
            </div>
          </div>
        </label>
      ))}
    </div>
  );
};
export default MealsList;
