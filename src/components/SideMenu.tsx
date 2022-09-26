import "../App.css";
import aberturas from "../assets/aberturas.png";
import equipamiento from "../assets/equipamiento.png";
import terminaciones from "../assets/terminaciones.png";
import { Sections } from "./Home";

interface SideMenuProps {
  activeSection?: Sections;
  selectActiveSection: (section: Sections | undefined) => void;
}

const SideMenu = ({ activeSection, selectActiveSection }: SideMenuProps) => {
  return (
    <div className="h-full bg-white min-w-min flex items-center z-10">
      <div className="flex flex-col">
        <div
          className={`p-3 cursor-pointer ${
            activeSection === Sections.Openings ? "bg-gray-100" : ""
          }`}
          onClick={() => selectActiveSection(Sections.Openings)}
        >
          <img src={aberturas} alt={Sections.Openings} />
        </div>
        <div
          className={`p-3 cursor-pointer ${
            activeSection === Sections.Equipment ? "bg-gray-100" : ""
          }`}
          onClick={() => selectActiveSection(Sections.Equipment)}
        >
          <img src={equipamiento} alt={Sections.Equipment} />
        </div>
        <div
          className={`p-3 cursor-pointer ${
            activeSection === Sections.Finishes ? "bg-gray-100" : ""
          }`}
          onClick={() => selectActiveSection(Sections.Finishes)}
        >
          <img src={terminaciones} alt={Sections.Finishes} />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
