import axios from "axios";

export const getDishes = async () =>
  await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
