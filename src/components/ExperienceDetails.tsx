import { ExperienceDataType } from "@/utils/data";
import LiIcon from "./LiIcon";

type Props = ExperienceDataType;

export default function ExperienceDetails({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: Props) {
  const newCompLink =
    (companyLink.includes("http") ? "" : "https://") + companyLink;
  return (
    <li>
      <LiIcon />
      <div className={"w-[85%] ms-auto"}>
        <h3 className={"font-bold text-2xl capitalize"}>
          {position}&nbsp;
          <a
            href={newCompLink}
            className={"uppercase text-primary text-[1.25rem]"}
          >
            @{company}
          </a>
        </h3>
        <p className={"font-medium text-dark/75 capitalize my-1"}>
          {time} | {address}
        </p>
        <p className={"w-full"}>{work}</p>
      </div>
    </li>
  );
}
