import { ExperienceDataType } from "@/utils/data";
import LiIcon from "./LiIcon";

type Props = ExperienceDataType;

export default function ExperienceDetails({
  title,
  place,
  placeLink,
  time,
  address,
  body,
}: Props) {
  const newCompLink =
    (placeLink?.includes("http") ? "" : "https://") + placeLink;
  return (
    <li>
      <LiIcon />
      <div className={"ms-auto w-[85%]"}>
        <h3 className={"text-2xl font-bold capitalize"}>
          {title}&nbsp;
          {placeLink ? (
            <a
              href={newCompLink}
              className={
                "text-[1.25rem] uppercase text-primary dark:text-primaryDark"
              }
            >
              @{place}
            </a>
          ) : undefined}
        </h3>
        <p
          className={
            "my-1.5 text-sm capitalize text-dark/75 dark:text-light/75"
          }
        >
          {time} | {address}
        </p>
        <p className={"w-full"}>{body}</p>
      </div>
    </li>
  );
}
