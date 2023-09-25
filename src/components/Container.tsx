import { ReactNode } from "react";

type Props = {
  classname?: string;
  children: ReactNode;
};
export default function Container({ children, classname }: Props) {
  return (
    <div className={`container mx-auto px-4 ${classname}`}>{children}</div>
  );
}
