import "../App.css";
import logo from "../assets/dnd-symbol.png";
import MenuDropdown from "./MenuDropdown";

const Header = () => {
  return (
    <div className="h-20 bg-black px-20 py-4 flex justify-between">
      <img src={logo} alt="logo" className="max-w-xs max-h-20" />
      <MenuDropdown />
    </div>
  );
};

export default Header;
