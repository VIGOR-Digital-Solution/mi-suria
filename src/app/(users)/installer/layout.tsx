import readUserSession from "@/lib/actions";
import SideNav from "./components/side-nav";
import { redirect } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import {
  createSupabaseServerClient,
  createSupabaseServerClientReadOnly,
} from "@/lib/supabase";

export default async function InstallerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = await readUserSession();

  if (!data.session) {
    return redirect("/auth");
  }

  if (data.session.user.user_metadata?.role !== "installer") {
    return redirect("/unauthorized");
  }

  return (
    <div className="w-full flex ">
      <div className="h-screen flex flex-col">
        <SideNav />
        {/* <MobileSideNav /> */}
      </div>

      <div className="w-full sm:flex-1 p-5 sm:p-10 space-y-5 bg-gray-100 dark:bg-inherit">
        {/* <ToggleSidebar /> */}
        {children}
      </div>
    </div>
  );
}
