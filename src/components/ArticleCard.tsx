import { ArticlesCardType } from "@/utils/data";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import NavigateButton from "./NavigateButton";

type Props = ArticlesCardType & {
  classname?: string;
};
export default function ArticleCard({
  classname,
  title,
  description,
  link,
  image,
  time,
  willTake,
}: Props) {
  return (
    <div className={classname}>
      <div
        className={
          "relative min-h-[16rem] cursor-pointer overflow-hidden rounded-lg"
        }
      >
        <NavigateButton
          path={link}
          target={"_blank"}
          classname={"!py-0 cursor-pointer"}
        >
          <Image
            src={image}
            alt={title}
            fill={true}
            className={
              "object-fill transition duration-main hover:scale-[1.075]"
            }
          />
        </NavigateButton>
      </div>
      <div className={"pt-8 min-h-[12rem] flex flex-col justify-between"}>
        <NavigateButton
          path={link}
          text={title}
          target={"_blank"}
          classname={
            "!justify-start !p-0 text-2xl !bg-transparent font-semibold !text-dark dark:!text-light"
          }
        />
        <p className={"py-4 text-dark/75 dark:text-light/75"}>{description}</p>
        <div className={"flex justify-between items-center"}>
          <span className={"text-xl text-primary dark:text-primaryDark"}>
            {willTake} read
          </span>
          <span className={"text-sm text-dark/50 dark:text-light/50"}>
            {time}
          </span>
        </div>
      </div>
    </div>
  );
}
