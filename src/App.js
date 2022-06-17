import "./App.css";
import Loading from "./components/Loading";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { lazy, Suspense } from "react";
const Login = lazy(() => import("./components/SignIn"));
const Register = lazy(() => import("./components/SignUp"));
const Dashboard = lazy(() => import("./components/Feed"));
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route
          path="/dashboard"
          element={<PrivateRoute Component={Dashboard} />}
        />
        <Route
          path="/register"
          element={<PrivateRoute Component={Register} />}
        />
        <Route path="/" element={<PrivateRoute Component={Login} />} />
      </Routes>
    </Suspense>
  );
}

export default App;
