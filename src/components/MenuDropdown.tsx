import "../App.css";
import chevron from "../assets/chevron.png";

const MenuDropdown = () => {
  return (
    <div className="h-18 bg-white flex items-center rounded-lg">
      <span className="p-2 border-r-2">Guardar y salir</span>
      <img className="p-2 -rotate-90" src={chevron} alt="dropdown-button" />
    </div>
  );
};

export default MenuDropdown;
