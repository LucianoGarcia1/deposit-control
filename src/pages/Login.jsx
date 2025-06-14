import { useState } from "react";
import { LoginForm } from "../components/Login/LoginForm";
import { Loading } from "../components/Loading/Loading";

function Login() {
  const [loading, setLoading] = useState(false);

  return loading ? (
    <Loading />
  ) : (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-8 p-4">
      <h1 className="text-5xl text-secondary">Login</h1>
      <LoginForm setLoading={setLoading} />
    </div>
  );
}
export default Login;
