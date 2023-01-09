import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div>
        <NavLink to="/">Todo app</NavLink>
      </div>
      <div>
        <NavLink to="/help">Help</NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
