import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Deposit from "./pages/Deposit";
import Login from "./pages/Login";
import { RouteGuard } from "./routes/RouteGuard";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import { Toaster } from "react-hot-toast";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="w-full min-h-screen flex justify-center">
      <Toaster position="top-right" />

      <div className="2xl:container w-full mx-auto my-0 bg-white">
        <Routes>
          <Route
            path="/"
            element={
              <RouteGuard isPrivate={false}>
                <Login />
              </RouteGuard>
            }
          />
          <Route
            path="/register"
            element={
              <RouteGuard isPrivate={false}>
                <Register />
              </RouteGuard>
            }
          />

          <Route
            path="/forgot-password"
            element={
              <RouteGuard isPrivate={false}>
                <ForgotPassword />
              </RouteGuard>
            }
          />

          <Route
            path="/dashboard"
            element={
              <RouteGuard isPrivate={true}>
                <Dashboard />
              </RouteGuard>
            }
          />

          <Route
            path="/dashboard/profile"
            element={
              <RouteGuard isPrivate={true}>
                <Profile />
              </RouteGuard>
            }
          />

          <Route
            path="dashboard/deposit/:id"
            element={
              <RouteGuard isPrivate={true}>
                <Deposit />
              </RouteGuard>
            }
          />

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
