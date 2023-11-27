"use client";
import React from "react";
import { PersonIcon, DesktopIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  const links = [
    {
      href: "/super_admin/account_management",
      text: "Account Management",
      Icon: PersonIcon,
    },
    {
      href: "/super_admin/monitor",
      text: "Monitor",
      Icon: DesktopIcon,
    },
  ];

  return (
    <div className="space-y-5">
      {links.map((link, index) => {
        const Icon = link.Icon;
        return (
          <Link
            onClick={() => document.getElementById("sidebar-close")?.click()}
            href={link.href}
            key={index}
            className={cn("flex items-center gap-2 rounded-sm p-2", {
              " bg-green-500 dark:bg-green-700 text-white ":
                pathname === link.href,
            })}
          >
            <Icon />
            {link.text}
          </Link>
        );
      })}
    </div>
  );
}
