import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return <div>
    <div className="flex flex-row justify-between">
      <NavLink to="/">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGPyZMTAlzTIj_9Q7-uwiZ5xvJmBoapXPX2m2guMTa46Sl4sLalobYX9tL_p_gd61vGE0&usqp=CAU"
                alt="img not show" 
                className="h-20" />
      </NavLink>
      <div>
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        <NavLink to="/cart">
        <div>
        <FaShoppingCart />
        </div>
        </NavLink>
      </div>
    </div>
  </div>;
};

export default Navbar;
