import { useForm } from "react-hook-form";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../services/firebase";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { InputForm } from "../Input/InputForm";
import { Button } from "./Button";

export const ForgotPassword = ({ value }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async ({ email }) => {
    setIsLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success(
        "Se este e-mail estiver cadastrado, você receberá um link para redefinir sua senha."
      );

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (erro) {
      console.log(erro);
      switch (erro.code) {
        case "auth/invalid-email":
          toast.error("Formato de e-mail inválido.");
          break;
        default:
          toast.error("Erro ao enviar e-mail. Tente novamente.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 max-w-[600px] w-full rounded"
    >
      <InputForm
        type="email"
        label="E-mail:"
        placeholder="E-mail"
        erro={errors.email}
        register={register("email", {
          required: "E-mail obrigatório!",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Formato de e-mail inválido",
          },
        })}
        value={value}
      />

      <Button children="Enviar" title="Enviar E-mail" isLoading={isLoading} />
    </form>
  );
};
