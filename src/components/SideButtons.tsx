import minus from "../assets/minus.png";
import plus from "../assets/plus.png";
import arrow from "../assets/arrow.png";

const SideButtons = () => {
  return (
    <div className="flex flex-col h-full justify-between  absolute right-0 p-6">
      <div className="flex flex-row justify-between">
        <button className="p-3 mr-6 w-24 rounded-md bg-white cursor-pointer">
          Fijar
        </button>
        <button className="p-3 w-24 rounded-lg  cursor-pointer bg-white">
          Borrar
        </button>
      </div>
      <div className="flex flex-row justify-end">
        <div className="flex flex-col justify-between bg-white divide-y mr-6 rounded-md">
          <div className="flex grow items-center">
            <img className="w-8 f-8 cursor-pointer" src={plus} alt="" />
          </div>
          <div className="flex grow items-center">
            <img className="w-8 f-8 cursor-pointer" src={minus} alt="" />
          </div>
        </div>
        <div className="flex flex-col w-28 bg-white rounded-md">
          <div className="flex justify-center">
            <img className="w-8 f-8 cursor-pointer" src={arrow} alt="" />
          </div>
          <div className="flex flex-row justify-between">
            <img
              className="w-8 f-8 -rotate-90 cursor-pointer"
              src={arrow}
              alt=""
            />
            <img
              className="w-8 f-8 rotate-90 cursor-pointer"
              src={arrow}
              alt=""
            />
          </div>
          <div className="flex justify-center">
            <img
              className="w-8 f-8 rotate-180 cursor-pointer"
              src={arrow}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideButtons;
