import { useState } from "react";
import { LoginForm } from "../components/Login/LoginForm";

function Login() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-8 p-4 bg-white">
      <h1 className="text-5xl text-secondary">Login</h1>
      <LoginForm setIsLoading={setIsLoading} isLoading={isLoading} />
    </div>
  );
}
export default Login;
