import ProgressBar from "./ProgressBar";
import SectionHeading from "./SectionHeading";
import { AboutData } from "@/utils/data";

type Props = {};
export function Skills({}: Props) {
  return (
    <div className="flex flex-col">
      <SectionHeading classname="text-3xl font-bold" text={"Skills"} />
      <ul className="mt-6 flex flex-col gap-8">
        {AboutData.skills.map((skill) => {
          return (
            <li className="mb-2 flex flex-col" key={skill.id}>
              <div className="mb-2 h-4 w-full rounded-full bg-[#ccc]">
                <ProgressBar progress={skill.progress} />
              </div>
              <div className={"flex justify-between"}>
                <span className="text-xl font-semibold">{skill.name}</span>
                <span className="text-dark/75 dark:text-light/75">
                  {skill.experience}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Skills;
