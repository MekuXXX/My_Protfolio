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
    <Link href={path} className={"mr-4 relative group"}>
      {title}
      <span
        className={`
          ${pathname === path ? "w-full" : "w-0"}
          h-0.5 inline-block bg-dark dark:bg-light absolute left-0 -bottom-1.5 group-hover:w-full transition-[width] ease duration-300
        `}
      ></span>
    </Link>
  );
}
