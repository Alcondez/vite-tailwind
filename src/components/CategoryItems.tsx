import { Category } from "../api/categories";
import "../App.css";
import chevron from "../assets/chevron.png";
import placeholder from "../assets/no-image-placeholder.png";

interface CategoryListProps {
  activeSection?: string;
  category?: Category;
  showSection: () => void;
}

const CategoryItems = ({
  activeSection,
  category,
  showSection,
}: CategoryListProps) => {
  //TODO: add placeholder for broken img links
  return (
    <div className="flex flex-col">
      <div
        className="flex justify-start items-center cursor-pointer"
        onClick={() => showSection()}
      >
        <img className="max-h-4 mr-1" src={chevron} alt="dropdown-button" />
        <span className="text-md">{activeSection}</span>
      </div>
      <span className="text-3xl my-3">{category?.name}</span>
      <div className="grid grid-cols-3 gap-4">
        {category?.items &&
          category.items.map((item) => (
            <div key={item.name} className="flex flex-col">
              <img
                className="w-full h-32"
                src={item.img}
                alt={item.name}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = placeholder;
                }}
              />
              <span className="text-lg text-center">{item.name}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategoryItems;
