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
      className={`flex items-center justify-center rounded-lg bg-dark px-6 py-2.5 text-light underline-offset-2 transition duration-main hover:bg-light hover:text-dark hover:underline dark:bg-white dark:text-dark dark:hover:bg-dark dark:hover:text-light ${classname}`}
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
