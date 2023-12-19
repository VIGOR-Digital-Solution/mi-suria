import { AuthForm } from "./components/auth-ui";
import readUserSession from "@/lib/actions";
import { redirect } from "next/navigation";

export default async function AuthPage() {
  const { data } = await readUserSession();

  if (data.session) {
    const role = data.session.user.user_metadata?.role;

    switch (role) {
      case "super-admin":
        return redirect("/super_admin");
      case "admin":
        return redirect("/admin");
      case "installer":
        return redirect("/installer");
      case "user":
        return redirect("/user");
      default:
        return <div>Role {role} is not registered</div>;
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full px-5 max-w-[450px]">
        <AuthForm />
      </div>
    </div>
  );
}
