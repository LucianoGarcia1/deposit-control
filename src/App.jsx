import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Deposit from "./pages/Deposit";
import Login from "./pages/Login";
import { RouteGuard } from "./components/RouteGuard";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";

function App() {
  return (
    <div className="w-full min-h-screen flex justify-center">
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
            path="/dashboard"
            element={
              <RouteGuard isPrivate={true}>
                <Dashboard />
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
