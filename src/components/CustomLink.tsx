"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  path: string;
  title: string;
};
export default function CustomLink({ path, title }: Props) {
  const pathname = usePathname();
  return (
    <Link href={path} className={"group relative mr-4"}>
      {title}
      <span
        className={`
          ${pathname === path ? "w-full" : "w-0"}
          ease absolute -bottom-1.5 left-0 inline-block h-0.5 bg-dark transition-[width] duration-300 group-hover:w-full dark:bg-light
        `}
      ></span>
    </Link>
  );
}
