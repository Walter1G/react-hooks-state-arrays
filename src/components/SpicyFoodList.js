import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const updatedFoodList = [...foods, newFood]
    setFoods(updatedFoodList);
  }

  function handleLiClick(id) {
    // const updatedlist = foods.filter((food) => food.id !== id);
    const updatedlist = foods.map((food) => {
      if (food.id === id) {
        return { ...food, heatLevel: food.heatLevel + 1 }

      } else {
        return food;
      }
    });

    setFoods(updatedlist);
  }

  function handleFilterChange(event) {
    setFilterBy(event.target.value)
  }

  const foodToDisplay = foods.filter((food) => {
    if (filterBy === "All") {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  });

  const foodList = foodToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
