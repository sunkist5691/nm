import { useContext } from "react";
import { DishesContext } from "../contexts/DishesContext";
import Recipe from "./Recipe";

const Dishes = () => {
  const { fetchHandler } = useContext(DishesContext);
  return (
    <div className='flex flex-col space-y-5'>
      <Recipe />
      <button
        className='py-8 px-12 text-3xl border-2 border-solid border-gray-400 rounded-2xl'
        onClick={fetchHandler}
      >
        Skip
      </button>
    </div>
  );
};

export default Dishes;
