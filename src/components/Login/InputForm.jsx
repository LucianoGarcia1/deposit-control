import React from "react";

export const InputForm = ({
  value,
  label,
  placeholder,
  type,
  register,
  erro,
}) => {
  return (
    <label className="flex flex-col w-full gap-2 text-base text-black">
      {label}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        {...register}
        className="border border-black p-3 rounded text-base bg-white text-black"
      />

      {erro && <p className="text-red-600 text-base">{erro.message}</p>}
    </label>
  );
};
