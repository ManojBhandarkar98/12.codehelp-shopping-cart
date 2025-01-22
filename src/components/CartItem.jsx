import toast from "react-hot-toast";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item removed");
  }
  return (<div>
    <div>
      <div>
        <img src={item.image} />
      </div>
      <div>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <div>
          <p>{item.price}</p>
          <div
            onClick={removeFromCart}>
            <FcDeleteDatabase />
          </div>
        </div>

      </div>

    </div>
  </div>);
};

export default CartItem;
