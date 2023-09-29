"use client";
import Link from "next/link";
import { NimbusAlignRight } from "./Icons";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {};
const pageSections = ["Home", "About", "Projects", "Articles"];
export default function PageSections({}: Props) {
  let pathname = usePathname().slice(1);
  const [active, setActive] = useState<boolean>(false);

  // Check meida to close menu
  useEffect(() => {
    const checkQuery = window.matchMedia("(min-width: 768px)");
    const handleChange = () => setActive(false);
    checkQuery.addEventListener("change", handleChange);
    return () => {
      checkQuery.removeEventListener("change", handleChange);
    };
  });

  // Check if user click out menu to close it
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      const menuBarElement = document.querySelector(".menu-bar");
      if (!menuBarElement?.contains(event.target as unknown as any)) {
        setActive(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="menu-bar">
      <NimbusAlignRight
        className={"cursor-pointer text-2xl md:hidden"}
        onClick={() => {
          setActive(!active);
        }}
      />
      <div
        className={`menu-bar hidden ${
          active
            ? "absolute right-[-1rem] top-[85%] z-20 !flex w-1/2 min-w-fit flex-col rounded-lg bg-dark/90 px-8 text-light before:absolute before:right-5 before:top-[-1rem] before:h-0 before:w-0 before:border-[0.5rem] before:border-b-dark/75 before:border-l-[transparent] before:border-r-[transparent] before:border-t-[transparent] before:content-[''] dark:bg-primaryDark dark:text-dark dark:before:border-b-primaryDark"
            : undefined
        } py-4 md:flex md:gap-4`}
      >
        {pageSections.map((section, ind) => (
          <Link
            key={ind}
            href={
              section.toLowerCase() === "home" ? "/" : section.toLowerCase()
            }
            onClick={() => {
              setActive(false);
            }}
            className={`group relative block w-full p-2 text-center md:py-0 ${
              ind !== pageSections.length - 1 && active ? "border-b" : undefined
            }`}
          >
            {section}
            {active ? undefined : (
              <span
                className={`absolute -bottom-1.5 left-0 inline-block h-0.5 bg-dark transition-[width] duration-main ease-in-out group-hover:w-full dark:bg-light
            ${
              section.toLowerCase() === "home" && !isNaN(+pathname)
                ? "w-full"
                : undefined
            }
            ${section.toLowerCase() === pathname ? "w-full" : "w-0"}
          `}
              ></span>
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
}
