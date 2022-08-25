import Button from "../../../components/UI/Button/Button";

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span
          style={{
            textTransform: "capitalize",
          }}
        >
          {igKey}: {props.ingredients[igKey]}
        </span>
      </li>
    );
  });
  return (
    <>
      <h3>Your Order</h3>
      <p>A delicous burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </>
  );
};

export default OrderSummary;
