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
      <div className={"w-[85%] ms-auto"}>
        <h3 className={"font-bold text-2xl capitalize"}>
          {title}&nbsp;
          {placeLink ? (
            <a
              href={newCompLink}
              className={"uppercase text-primary text-[1.25rem]"}
            >
              @{place}
            </a>
          ) : undefined}
        </h3>
        <p className={"font-medium text-dark/75 capitalize my-1"}>
          {time} | {address}
        </p>
        <p className={"w-full"}>{body}</p>
      </div>
    </li>
  );
}
