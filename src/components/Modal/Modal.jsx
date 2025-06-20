import { InputForm } from "../Input/InputForm";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Button } from "../Forms/Button";
import { createDeposit, updateDeposit } from "../../utils/depositFunctions";
import { useEffect } from "react";

export const Modal = ({
  handleClose,
  setIsLoading,
  isLoading,
  depositSelected = null,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  useEffect(() => {
    if (depositSelected) {
      setValue("nome", depositSelected.name);
      setValue("descricao", depositSelected.description);
    } else {
      reset();
    }
  }, [depositSelected, setValue, reset]);

  const handleSave = async ({ nome, descricao }) => {
    setIsLoading(true);

    try {
      if (depositSelected) {
        await updateDeposit(depositSelected.id, {
          name: nome,
          description: descricao,
        });
        toast.success("Depósito atualizado com sucesso!");
      } else {
        await createDeposit(nome, descricao);
        toast.success("Depósito criado com sucesso!");
      }
      reset();
      handleClose();
    } catch (erro) {
      console.log(erro);
      toast.error("Erro ao salvar Depósito");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100]">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-black">
          {depositSelected ? "Editar Depósito" : "Adicionar Depósito"}
        </h2>

        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(handleSave)}
        >
          <InputForm
            type="text"
            placeholder="Nome"
            label="Nome:"
            erro={errors.nome}
            register={register("nome", {
              required: "Nome é obrigatório!",
              minLength: { value: 4, message: "Mínimo 4 caracteres" },
            })}
          />

          <InputForm
            type="text"
            placeholder="Descrição"
            label="Descrição:"
            erro={errors.descricao}
            register={register("descricao", {
              required: "Descrição obrigatória!",
            })}
          />

          <div className="flex gap-4">
            <Button
              children="Cancelar"
              title="Cancelar"
              type="button"
              onClick={handleClose}
              className="border-black outline-2 outline-secondary max-w-[200px] w-full cursor-pointer p-3 rounded bg-white text-black text-base mt-4 flex items-center justify-center border!"
            />
            <Button
              children={depositSelected ? "Salvar" : "Adicionar"}
              title={depositSelected ? "Salvar" : "Adicionar"}
              type="submit"
              isLoading={isLoading}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
