import { useState } from "react";
import "../App.css";
import chevron from "../assets/chevron.png";

const MenuDropdown = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-12 bg-white flex items-center rounded-lg relative">
      <span className={`py-3 px-3 ${open ? "" : "border-r-2"} cursor-pointer`}>
        Guardar y salir
      </span>
      <button className="px-2 cursor-pointer" onClick={() => setOpen(!open)}>
        <img
          className=" p-1 -rotate-90 w-8 f-8 "
          src={chevron}
          alt="dropdown-button"
        />
      </button>

      <div
        className={`absolute flex flex-col bg-white z-20 top-10 w-full divide-y ${
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
