import "../App.css";
import chevron from "../assets/chevron.png";

interface CategoryListProps {
  activeSection?: string;
  selectActiveSection: (section: string | undefined) => void;
}

const CategoryList = ({
  activeSection,
  selectActiveSection,
}: CategoryListProps) => {
  return (
    <div
      className={`h-full bg-gray-100 p-8 flex flex-col relative transition-all duration-300 ${
        activeSection ? "" : "-ml-[600px]"
      }`}
    >
      <span className="text-2xl font-semibold mb-3">{activeSection}</span>
      <div className="w-96 mb-3 bg-white flex flex-row rounded-lg p-3 justify-between items-center">
        <span className="text-lg">Puertas</span>
        <img
          className="max-h-4 rotate-180"
          src={chevron}
          alt="dropdown-button"
        />
      </div>
      <div className="w-96 mb-3 bg-white flex flex-row rounded-lg p-3 justify-between items-center">
        <span className="text-lg">Ventanas</span>
        <img
          className="max-h-4 rotate-180"
          src={chevron}
          alt="dropdown-button"
        />
      </div>
      <div
        className="absolute -right-8 border bg-gray-100 h-20 w-8 flex justify-center items-center bottom-1/2"
        onClick={() => selectActiveSection(undefined)}
      >
        <img className="max-h-6" src={chevron} alt="dropdown-button" />
      </div>
    </div>
  );
};

export default CategoryList;
