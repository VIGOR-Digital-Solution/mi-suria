"use client";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { usePathname } from "next/navigation";

export default function Header({ title }: { title: string }) {
  const pathname = usePathname();
  const breadcrumbs = pathname.split("/").slice(3);

  return (
    <div className="items-center flex p-6">
      <Breadcrumbs
        itemClasses={{
          item: "text-2xl font-semibold",
        }}
        className="capitalize"
      >
        <BreadcrumbItem href={`/super_admin/${title.toLowerCase()}`}>
          {title}
        </BreadcrumbItem>
        {breadcrumbs.map((breadcrumb, index) => {
          const path = `/${breadcrumbs.slice(0, index + 1).join("/")}`;

          return (
            <BreadcrumbItem key={path} href={path}>
              {breadcrumb}
            </BreadcrumbItem>
          );
        })}
      </Breadcrumbs>
      {/* <p className="text-3xl font-bold">{title}</p> */}
    </div>
  );
}
