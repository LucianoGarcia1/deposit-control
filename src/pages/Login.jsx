import { LoginForm } from "../components/Login/LoginForm";

function Login() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-4 p-4">
      <h1 className="text-5xl text-secondary">Login</h1>
      <LoginForm />
    </div>
  );
}
export default Login;
