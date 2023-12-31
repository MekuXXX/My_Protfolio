import { CircularText } from "./Icons";
import NavigateButton from "./NavigateButton";

type Props = {};
export default function HireMe({}: Props) {
  return (
    <div className={"relative flex h-48 w-48 items-center justify-between"}>
      <CircularText
        width={"160"}
        height={"160"}
        className={"animate-spin-slow fill-dark dark:!text-light"}
      />
      <NavigateButton
        path={"tomail:mmm@gmail.com"}
        text={"Hire Me"}
        classname={
          "absolute left-[50%] top-[50%] border border-transparent hover:!no-underline hover:border-dark dark:hover:border-light translate-x-[-67%] translate-y-[-50%] !rounded-[50%] !p-0 w-20 h-20 text-lg font-medium"
        }
      />
    </div>
  );
}
