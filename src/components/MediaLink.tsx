import { ReactNode } from "react";
import NavigateButton from "./NavigateButton";

type Props = {
  path: string;
  classname?: string;
  icon: ReactNode;
};

export default function MediaLink({ icon, path, classname }: Props) {
  return (
    <NavigateButton
      path={path}
      target={"_blank"}
      classname={
        "!p-0 !bg-transparent transition duration-main hover:scale-[1.1] hover:-translate-y-2 " +
        classname
      }
    >
      {icon}
    </NavigateButton>
  );
}
