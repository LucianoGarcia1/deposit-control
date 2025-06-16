import { FiLoader } from "react-icons/fi";

export const Loading = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-4 items-center justify-center">
      <FiLoader
        className="animate-spin text-5xl text-secondary"
        title="carregando..."
      />

      <p className="text-base text-black">Carregando...</p>
    </div>
  );
};
