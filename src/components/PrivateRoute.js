import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/auth";

export default function PrivateRoute() {
  const { user } = useContext(AuthContext);

  if (user) return <Outlet />;

  return <Navigate to="/login" />;
}
