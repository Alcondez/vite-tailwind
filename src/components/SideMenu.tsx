import "../App.css";
import aberturas from "../assets/aberturas.png";
import equipamiento from "../assets/equipamiento.png";
import terminaciones from "../assets/terminaciones.png";

interface SideMenuProps {
  selectActiveSection: (section: string | undefined) => void;
}

const SideMenu = ({ selectActiveSection }: SideMenuProps) => {
  return (
    <div className="h-full bg-white min-w-min px-2 flex items-center z-10">
      <div className="flex flex-col">
        <div className="p-2" onClick={() => selectActiveSection("aberturas")}>
          <img src={aberturas} alt="aberturas" />
        </div>
        <div className="p-2">
          <img src={equipamiento} alt="equipamiento" />
        </div>
        <div className="p-2">
          <img src={terminaciones} alt="terminaciones" />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
