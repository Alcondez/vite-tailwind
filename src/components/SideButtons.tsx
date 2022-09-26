import minus from "../assets/minus.png";
import plus from "../assets/plus.png";
import arrow from "../assets/arrow.png";

interface SideButtonsProps {
  activeSection?: string;
}

const SideButtons = ({ activeSection }: SideButtonsProps) => {
  return (
    <div className="flex flex-col h-full justify-between  absolute right-0 p-6">
      {activeSection && (
        <div className="flex flex-row justify-between">
          <button
            className="p-3 mr-6 w-24 rounded-md bg-white cursor-pointer"
            onClick={() => console.log("Pin clicked")}
          >
            Fijar
          </button>
          <button
            className="p-3 w-24 rounded-lg  cursor-pointer bg-white"
            onClick={() => console.log("Delete clicked")}
          >
            Borrar
          </button>
        </div>
      )}
      <div className="flex flex-row justify-end mt-auto">
        <div className="flex flex-col justify-between bg-white divide-y mr-6 rounded-md">
          <div className="flex grow items-center px-1">
            <img
              className="w-8 f-8 cursor-pointer"
              src={plus}
              alt=""
              onClick={() => console.log("Plus clicked")}
            />
          </div>
          <div className="flex grow items-center px-1">
            <img
              className="w-8 f-8 cursor-pointer"
              src={minus}
              alt=""
              onClick={() => console.log("Minus clicked")}
            />
          </div>
        </div>
        <div className="flex flex-col w-26 p-1 bg-white rounded-md">
          <div className="flex justify-center -mb-1">
            <img
              className="w-8 f-8 cursor-pointer"
              src={arrow}
              alt=""
              onClick={() => console.log("Arror up clicked")}
            />
          </div>
          <div className="flex flex-row justify-center">
            <img
              className="w-8 f-8 mr-4 -rotate-90 cursor-pointer"
              src={arrow}
              alt=""
              onClick={() => console.log("Arrow left clicked")}
            />
            <img
              className="w-8 f-8 rotate-90 cursor-pointer"
              src={arrow}
              alt=""
              onClick={() => console.log("Arrow right clicked")}
            />
          </div>
          <div className="flex justify-center -mt-1">
            <img
              className="w-8 f-8 rotate-180 cursor-pointer"
              src={arrow}
              alt=""
              onClick={() => console.log("Arrow down clicked")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideButtons;
