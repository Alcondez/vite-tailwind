import { Category } from "../api/categories";
import "../App.css";
import chevron from "../assets/chevron.png";
import Spinner from "./Spinner";

interface CategoryListProps {
  sectionName?: string;
  categories?: Category[];
  showCategory: (category: Category) => void;
  dataLoading: boolean;
}

const CategoryList = ({
  sectionName,
  categories,
  showCategory,
  dataLoading = true,
}: CategoryListProps) => {
  return (
    <>
      <span className="text-2xl font-semibold mb-3">{sectionName}</span>
      {dataLoading ? (
        <Spinner />
      ) : (
        <div>
          {categories &&
            categories.map((category) => (
              <div
                key={category.name}
                className="w-full mb-3 bg-white flex flex-row rounded-lg p-3 justify-between items-center cursor-pointer"
                onClick={() => showCategory(category)}
              >
                <span className="text-lg">{category.name}</span>
                <img
                  className="max-h-4 rotate-180"
                  src={chevron}
                  alt="dropdown-button"
                />
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default CategoryList;
