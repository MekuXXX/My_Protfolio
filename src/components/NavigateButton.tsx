import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  path: string;
  text?: string;
  classname?: string;
  target?: string;
  download?: boolean;
  component?: ReactNode;
  children?: ReactNode;
};

export default function NavigateButton({
  path,
  text,
  target,
  download,
  classname,
  component,
  children,
}: Props) {
  return (
    <Link
      href={path}
      className={`flex items-center justify-center transition duration-main py-2.5 px-6 rounded-lg bg-dark dark:bg-white text-light dark:text-dark hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light hover:underline underline-offset-2 ${classname}`}
      target={target ? target : "_self"}
      download={download ? download : false}
    >
      {children ? (
        children
      ) : (
        <>
          <span>{text}</span>
          {component ? <span>{component}</span> : undefined}
        </>
      )}
    </Link>
  );
}
