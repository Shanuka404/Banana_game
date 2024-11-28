import { useEffect } from "react";
import { useRouter } from "expo-router";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      console.log("User not logged in. Redirecting to sign-in...");
      router.replace("/sign-in"); // Redirect to sign-in if the user is not logged in
    }
  }, [user, router]);

  if (!user) return null; // Prevent rendering if user is not logged in

  return <>{children}</>;
};

export default ProtectedRoute;