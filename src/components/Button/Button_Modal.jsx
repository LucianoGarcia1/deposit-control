export const ButtonModal = ({ children, title, ...props }) => {
  return (
    <button
      className="bg-secondary border p-4 rounded text-base cursor-pointer text-white max-w-[200px] w-full transition-all flex items-center justify-center gap-4 border-white outline-2 outline-secondary"
      title={title}
      {...props}
    >
      {children}
    </button>
  );
};
