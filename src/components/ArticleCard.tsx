import { ArticlesCardType } from "@/utils/data";
import Image from "next/image";
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
      <div className={"cursor-pointer overflow-hidden rounded-xl"}>
        <NavigateButton
          path={link}
          target={"_blank"}
          classname={"relative !p-0 cursor-pointer aspect-square"}
        >
          <Image
            src={image}
            alt={title}
            className={
              "object-fill transition duration-main hover:scale-[1.075]"
            }
            sizes={"(min-width: 808px) 50vw, 100vw"}
            fill
            priority
          />
        </NavigateButton>
      </div>
      <div className={"flex min-h-[12rem] flex-col justify-between pt-8"}>
        <NavigateButton
          path={link}
          text={title}
          target={"_blank"}
          classname={
            "!justify-start !p-0 text-2xl !bg-transparent font-semibold !text-dark dark:!text-light"
          }
        />
        <p className={"py-4 text-dark/75 dark:text-light/75"}>{description}</p>
        <div className={"flex items-center justify-between"}>
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
