import { useEffect } from "react";
import { useRouter } from "expo-router";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      console.log("User not logged in. Redirecting to sign-in...");
      router.replace("/sign-in");
    }
  }, [user]);

  if (!user) return null;

  return <>{children}</>;
};

export default ProtectedRoute;
