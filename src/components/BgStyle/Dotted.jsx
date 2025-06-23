export const Dotted = ({ style }) => {
  return (
    <div className={`absolute ${style} grid grid-cols-4 gap-2 z-[1000]`}>
      {Array.from({ length: 16 }).map((_, i) => (
        <div key={i} className="w-1 h-1 bg-secondary rounded-full"></div>
      ))}
    </div>
  );
};
