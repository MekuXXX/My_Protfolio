import { CircularText } from "./Icons";
import NavigateButton from "./NavigateButton";

type Props = {};
export default function HireMe({}: Props) {
  return (
    <div
      className={
        "relative left-0 bottom-0 lg:absolute lg:left-4 lg:bottom-6 mb--28 pt-4 overflow-hidden w-full flex items-center justify-center lg:block"
      }
    >
      <div className={"w-48 h-auto flex items-center relative justify-between"}>
        <CircularText
          width={"24"}
          height={"24"}
          classname={"fill-dark animate-spin-slow"}
        />
        <NavigateButton
          path={"tomail:mmm@gmail.com"}
          text={"Hire Me"}
          classname={
            "absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-dark text-light hover:bg-light hover:text-dark border hover:border-dark transition duration-main !rounded-[50%] !p-0 w-20 h-20 text-lg font-medium"
          }
        />
      </div>
    </div>
  );
}
