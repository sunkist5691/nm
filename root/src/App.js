import { Route, Link } from "react-router-dom";
import DishesDetail from "./components/DishesDetail";
import Dishes from "./components/Dishes";
import { useEffect, useState } from "react";
import { getDishes } from "./functions/data";
import { DishesContext } from "./contexts/DishesContext";

function App() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    async function getYourDishes() {
      const dishData = await getDishes();
      if (dishData) setDishes(dishData.data.meals[0]);
      else {
        console.log("CURRENTLY NO DISHES AVAILABLE");
      }
    }
    getYourDishes();
  }, []);

  const fetchHandler = async () => {
    const dishData = await getDishes();
    if (dishData) setDishes(dishData.data.meals[0]);
    else {
      console.log("CURRENTLY NO DISHES AVAILABLE");
    }
  };

  return (
    <div className='flex flex-col items-center space-x-3'>
      <Link className='p-10 text-xl' to='/dishes'>
        Click Here
      </Link>
      <DishesContext.Provider value={{ fetchHandler, dishes }}>
        <Route exact path='/detail/:id' component={DishesDetail} />
        <Route exact path='/dishes' component={Dishes} />
      </DishesContext.Provider>
    </div>
  );
}

export default App;
