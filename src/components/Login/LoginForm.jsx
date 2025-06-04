import { useState } from "react";
import { InputForm } from "./InputForm";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      console.log(response);
      navigate("/dashboard");
    } catch (erro) {
      console.log(erro);
      alert("Login inválido");
    }
  };

  return (
    <form
      className="bg-secondary flex flex-col gap-4 max-w-[600px] w-full p-4 rounded"
      onSubmit={handleSubmit}
    >
      <InputForm
        type="email"
        placeholder="E-mail"
        label="E-mail:"
        value={email}
        setValue={setEmail}
      />

      <InputForm
        type="password"
        placeholder="Password"
        label="Password:"
        value={password}
        setValue={setPassword}
      />

      <Link to="">Esqueceu a senha?</Link>

      <button className="border border-white max-w-[200px] w-full cursor-pointer p-3 rounded bg-secondary text-white text-base">
        Login
      </button>
    </form>
  );
};
