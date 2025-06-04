import { Link } from "react-router-dom";

export const Nav = ({ active }) => {
  return (
    <nav
      className={`max-w-[300px] w-full p-4 bg-white absolute left-0 top-0 bottom-0 transition-transform duration-300 ${
        active ? "flex" : "hidden"
      }`}
    >
      <ul>
        <li>
          <Link to="/dashboard/profile">Profile</Link>
        </li>
        <li>
          <Link to="/dashboard/deposit/b">Depósito [B]</Link>
        </li>
        <li>
          <Link to="/dashboard/deposit/c">Depósito [C]</Link>
        </li>
      </ul>
    </nav>
  );
};
