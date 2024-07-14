import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ burgerId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        type="roundm"
        onClick={() => dispatch(decreaseItemQuantity(burgerId))}
      >
        -
      </Button>
      <span>{currentQuantity}</span>
      <Button
        type="roundp"
        onClick={() => dispatch(increaseItemQuantity(burgerId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
