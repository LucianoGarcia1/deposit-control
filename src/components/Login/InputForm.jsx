import React from "react";

export const InputForm = ({ value, setValue, label, placeholder, type }) => {
  return (
    <label className="flex flex-col w-full gap-2 text-base text-white">
      {label}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        required
        className="border border-black p-3 rounded text-base bg-white text-black"
      />
    </label>
  );
};
