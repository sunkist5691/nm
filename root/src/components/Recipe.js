import React, { useContext } from "react";
import { DishesContext } from "../contexts/DishesContext";
import { Link } from "react-router-dom";

const Recipe = () => {
  const { dishes } = useContext(DishesContext);

  return (
    <div className='flex flex-col items-center space-y-2'>
      <img
        className='h-96 rounded-md'
        src={dishes.strMealThumb}
        alt={dishes.strMeal}
      />
      <h1 className='text-xl'>{dishes.strMeal}</h1>
      <Link to={`/detail/${dishes.idMeal}`}>Click for Detail</Link>
    </div>
  );
};

export default Recipe;
