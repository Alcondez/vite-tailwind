import { useState } from "react";
import { Category } from "../api/categories";
import "../App.css";
import chevron from "../assets/chevron.png";
import CategoryItems from "./CategoryItems";
import CategoryList from "./CategoryList";

export enum Screen {
  CATEGORY_LIST = "CATEGORY_LIST",
  CATEGORY_ITEMS = "CATEGORY_ITEMS",
}

interface CategoryListProps {
  activeSection?: string;
  selectActiveSection: (section: string | undefined) => void;
  categories?: Category[];
  dataLoading: boolean;
}

const Sectioncontainer = ({
  activeSection,
  selectActiveSection,
  categories,
  dataLoading,
}: CategoryListProps) => {
  const [screen, setScreen] = useState(Screen.CATEGORY_LIST);
  const [activeCategory, setActiveCategory] = useState<Category>();

  const showCategory = (category: Category) => {
    setActiveCategory(category);
    setScreen(Screen.CATEGORY_ITEMS);
  };

  const showSection = () => {
    setScreen(Screen.CATEGORY_LIST);
  };
  return (
    <div
      className={`h-full w-[600px] bg-gray-100 p-8 flex flex-col relative transition-all duration-300 ${
        activeSection ? "" : "-ml-[650px]"
      }`}
    >
      {screen === Screen.CATEGORY_LIST ? (
        <CategoryList
          sectionName={activeSection}
          categories={categories}
          dataLoading={dataLoading}
          showCategory={showCategory}
        />
      ) : (
        <CategoryItems
          activeSection={activeSection}
          category={activeCategory}
          showSection={showSection}
        />
      )}
      <div
        className="absolute -right-8 border bg-gray-100 h-20 w-8 flex justify-center items-center bottom-1/2"
        onClick={() => selectActiveSection(undefined)}
      >
        <img
          className="max-h-6 cursor-pointer"
          src={chevron}
          alt="dropdown-button"
        />
      </div>
    </div>
  );
};

export default Sectioncontainer;
