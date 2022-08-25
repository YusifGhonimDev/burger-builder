import { useState } from "react";
import Burger from "../Burger/Burger";
import BuildControls from "../Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  });

  let [totalPrice, setTotalPrice] = useState(4);

  const [purchasable, setPurchasable] = useState(false);

  const [purchasing, setPurchasing] = useState(false);

  const addIngredientHandler = (type) => {
    const ingredientCount = ingredients[type]++;
    setIngredients({ ...ingredients, type: ingredientCount });
    totalPrice += INGREDIENT_PRICES[type];
    setTotalPrice(totalPrice);
    setPurchasable(totalPrice > 4);
  };

  const removeIngredientHandler = (type) => {
    if (ingredients[type] <= 0) return;
    const ingredientCount = ingredients[type]--;
    setIngredients({ ...ingredients, type: ingredientCount });
    totalPrice -= INGREDIENT_PRICES[type];
    setTotalPrice(totalPrice);
    setPurchasable(totalPrice > 4);
  };

  const purchseHandler = () => setPurchasing(true);

  const purchaseCancelHandler = () => setPurchasing(false);

  const purchaseContinueHandler = () => alert("You Continue!");

  const disabledInfo = {
    ...ingredients,
  };

  for (const key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  return (
    <>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        <OrderSummary
          ingredients={ingredients}
          purchaseCancelled={purchaseCancelHandler}
          purchaseContinued={purchaseContinueHandler}
        />
      </Modal>
      <Burger ingredients={ingredients} />
      <BuildControls
        ingredientAdded={addIngredientHandler}
        ingredientRemoved={removeIngredientHandler}
        disabled={disabledInfo}
        purchasable={purchasable}
        ordered={purchseHandler}
        price={totalPrice}
      />
    </>
  );
};

export default BurgerBuilder;
