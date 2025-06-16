import { FiLoader } from "react-icons/fi";

export const Button = ({ children, title, isLoading = false, ...props }) => {
  return (
    <button
      className={`border border-white outline-2 outline-secondary max-w-[200px] w-full cursor-pointer p-3 rounded bg-secondary text-white text-base mt-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center`}
      title={title}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? <FiLoader className="animate-spin text-xl" /> : children}
    </button>
  );
};
