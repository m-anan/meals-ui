import { useRef, useState } from "react";
import { ArrowRight } from "react-flaticons";

interface CategoriseListProps {
  categories: { id: number; name: string }[];
}

const CategoriseList: React.FC<CategoriseListProps> = ({ categories }) => {
  const [selected, setSelected] = useState<string | null>(null);

  const sideScroll = (
    element: HTMLDivElement,
    speed: number,
    distance: number,
    step: number
  ) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
    }, speed);
  };

  const ref = useRef(null);

  return (
    <div className="p-5 xs:p-3 relative flex items-center">
      <ul className="flex gap-3 w-full overflow-x-scroll" ref={ref}>
        {categories.map((category) => {
          const linkId = `#m${category.id}`;
          const isSelected = selected === linkId;
          return (
            <a
              className="min-w-fit"
              href={linkId}
              key={category.id}
              onClick={() => {
                setSelected(linkId);
              }}
            >
              <li
                className={`border-2 text-text-blue border-text-blue p-2 px-4 rounded-full ${
                  isSelected ? "bg-text-blue text-white" : ""
                }`}
              >
                {category.name}
              </li>
            </a>
          );
        })}
      </ul>
      <span
        className="absolute right-0 border bg-white rounded-full p-4 xs:hidden"
        onClick={() => {
          ref.current && sideScroll(ref.current, 25, 100, 15);
        }}
      >
        <ArrowRight className="text-text-blue" />
      </span>
    </div>
  );
};

export default CategoriseList;
