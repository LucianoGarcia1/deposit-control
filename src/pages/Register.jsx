import { useState } from "react";
import { Loading } from "../components/Loading/Loading";
import { RegisterForm } from "../components/Login/RegisterForm";

function Register() {
  const [loading, setLoading] = useState(false);

  return loading ? (
    <Loading />
  ) : (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-8 p-4">
      <h1 className="text-5xl text-secondary">Registro</h1>

      <RegisterForm setLoading={setLoading} />
    </div>
  );
}
export default Register;
