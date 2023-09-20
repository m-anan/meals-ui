import { Category } from "../../../core/models/Category";
import CategoriseList from "../CategoriseList";
import MealsList from "../MealsList";
interface MealsBoxProps {
  data: Category[];
}
const MealsBox: React.FC<MealsBoxProps> = ({ data }) => {
  return (
    <div className="border border-border-primary rounded-xl bg-white flex-auto overflow-hidden">
      <div className="border-b">
        <CategoriseList categories={data} />
      </div>
      <div className="p-8 xs:p-3 flex flex-col gap-10">
        {data.map((category) => {
          return (
            <div className="flex-col flex gap-2">
              <div
                className="flex justify-between"
                key={category.id}
                id={`m${category.id}`}
              >
                <div className="flex items-center gap-3">
                  <h2 className="font-bold">{category.name}</h2>
                  <span className="bg-text-primary rounded-full w-5 h-5 flex items-center justify-center text-white">
                    {category.meals.length}
                  </span>
                </div>
                <div>
                  <span className="text-sm text-text-gray">select</span>
                </div>
              </div>
              <MealsList meals={category.meals} checkBox />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default MealsBox;
