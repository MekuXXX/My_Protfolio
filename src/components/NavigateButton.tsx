import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  path: string;
  text: string;
  classname?: string;
  target?: string;
  download?: boolean;
  component?: ReactNode;
};

export default function NavigateButton({
  path,
  text,
  target,
  download,
  classname,
  component,
}: Props) {
  return (
    <Link
      href={path}
      className={`flex items-center justify-center py-2.5 px-6 rounded-lg ${classname}`}
      target={target ? target : "_self"}
      download={download ? download : false}
    >
      <span>{text}</span>
      {component ? <span>{component}</span> : undefined}
    </Link>
  );
}
