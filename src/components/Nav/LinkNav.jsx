import { Link } from "react-router-dom";

export const LinkNav = ({ children, href, title }) => {
  return (
    <Link
      to={href}
      className={`w-full flex items-center gap-4 border p-4 rounded text-secondary transition-all hover:bg-secondary hover:text-white`}
      title={title}
    >
      {children}
    </Link>
  );
};
