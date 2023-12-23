import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function AccountsPage() {
  return (
    <div className="space-y-5">
      <Link
        href={"/installer/plants/create"}
        className={buttonVariants({ variant: "outline" })}
      >
        Create +
      </Link>
    </div>
  );
}
