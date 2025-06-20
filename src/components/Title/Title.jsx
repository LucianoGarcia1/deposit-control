export const Title = ({ children, mxWidth }) => {
  return (
    <h1 className={`w-full text-black text-5xl font-bold ${mxWidth}`}>
      {children}
    </h1>
  );
};
