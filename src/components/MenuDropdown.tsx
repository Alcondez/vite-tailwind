import { useState } from "react";
import "../App.css";
import chevron from "../assets/chevron.png";

const MenuDropdown = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-12 bg-white flex items-center rounded-lg relative">
      <span className="py-2 px-3 border-r-2">Guardar y salir</span>
      <img
        className="p-2 -rotate-90 w-8 f-8 cursor-pointer"
        src={chevron}
        alt="dropdown-button"
        onClick={() => setOpen(!open)}
      />

      <div
        className={`absolute flex flex-col bg-white z-20 top-10 divide-y ${
          open ? "" : "hidden"
        }`}
      >
        <div className="py-2 px-3 cursor-pointer">Salir sin Guardar</div>
        <div className="py-2 px-3 cursor-pointer">Guardar y Continuar</div>
      </div>
    </div>
  );
};

export default MenuDropdown;
