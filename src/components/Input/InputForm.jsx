export const InputForm = ({
  value,
  label,
  placeholder,
  type,
  register,
  erro,
}) => {
  return (
    <label
      className={`flex flex-col w-full gap-2 text-base text-black ${
        erro && "text-red-600"
      }`}
    >
      {label}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        {...register}
        className={`border outline-none border-black p-3 rounded text-sm bg-white text-black transition-all focus:border-secondary ${
          erro && "border-red-600"
        }`}
      />

      {erro && <p className="text-red-600 text-base">{erro.message}</p>}
    </label>
  );
};
