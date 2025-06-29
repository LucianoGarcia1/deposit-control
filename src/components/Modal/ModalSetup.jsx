import { InputForm } from "../Input/InputForm";
import { useForm } from "react-hook-form";
import { Button } from "../Forms/Button";
import { useEffect } from "react";

export const ModalSetup = ({
  handleClose,
  onSubmit,
  title,
  itemToEdit = null,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  useEffect(() => {
    if (itemToEdit) {
      setValue("nome", itemToEdit.name);
    } else {
      reset();
    }
  }, [itemToEdit, setValue, reset]);

  const handleSave = async ({ nome }) => {
    await onSubmit({ name: nome.trim(), id: itemToEdit?.id });
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100]">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-black">
          {itemToEdit ? `Editar ${title}` : `Adicionar ${title}`}
        </h2>

        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(handleSave)}
        >
          <InputForm
            type="text"
            placeholder="Name"
            label="Name:"
            erro={errors.nome}
            register={register("nome", {
              required: "Nome é obrigatório!",
              minLength: { value: 4, message: "Mínimo 4 caracteres" },
            })}
          />

          <div className="flex gap-4">
            <Button
              children="Cancel"
              title="Cancel"
              type="button"
              onClick={handleClose}
              className="border-black outline-2 outline-secondary max-w-[200px] w-full cursor-pointer p-3 rounded bg-white text-black text-base mt-4 flex items-center justify-center border!"
            />
            <Button
              children={itemToEdit ? "Salvar" : "Adicionar"}
              title={itemToEdit ? "Salvar" : "Adicionar"}
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
