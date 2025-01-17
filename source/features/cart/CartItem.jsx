import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentQuantityById } from "./cartSlice";

function CartItem({ item }) {
  const { burgerId, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(burgerId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between ">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6 ">
        <p className="text-sm font-bold ">{formatCurrency(totalPrice)}</p>

        <UpdateItemQuantity
          burgerId={burgerId}
          currentQuantity={currentQuantity}
        />

        <DeleteItem burgerId={burgerId} />
      </div>
    </li>
  );
}

export default CartItem;
