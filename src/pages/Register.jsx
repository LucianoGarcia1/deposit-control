import { useState } from "react";
import { RegisterForm } from "../components/Login/RegisterForm";

function Register() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-8 p-4 bg-white">
      <h1 className="text-5xl text-secondary">Cadastre-se</h1>

      <RegisterForm setLoading={setIsLoading} isLoading={isLoading}/>
    </div>
  );
}
export default Register;
