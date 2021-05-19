import React, { useContext } from "react";
import { DishesContext } from "../contexts/DishesContext";
import { Link } from "react-router-dom";

const DishesDetail = () => {
  const { dishes } = useContext(DishesContext);
  return (
    <div className='flex flex-col items-center'>
      <img
        className='h-96 rounded-md'
        src={dishes.strMealThumb}
        alt={dishes.strMeal}
      />
      <div className='flex flex-col items-center space-y-2'>
        <h1 className='text-3xl'>{dishes.strMeal}</h1>
        <p className='text-xl'>{dishes.strArea}</p>
        <a href={dishes.strYoutube}>Click for video instruction</a>
      </div>
    </div>
  );
};

export default DishesDetail;
