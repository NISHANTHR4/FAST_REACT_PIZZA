import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

function DeleteItem({ burgerId }) {
  const dispatch = useDispatch();

  return (
    <div>
      <Button type="small" onClick={() => dispatch(deleteItem(burgerId))}>
        Delete
      </Button>
    </div>
  );
}

export default DeleteItem;
