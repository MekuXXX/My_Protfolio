import { EducationData } from "@/utils/data";
import ExperienceDetails from "./ExperienceDetails";
import SectionHeading from "./SectionHeading";
import HelperClasses from "@/utils/helperClasses";

type Props = {};
export default function Education({}: Props) {
  return (
    <section>
      <SectionHeading text={"Education"} />
      <div className={"w-[70%] mx-auto relative"}>
        <div className={HelperClasses.sections["side-line"]} />
        <ul className={"flex flex-col gap-8 py-12"}>
          {EducationData.map((ex) => (
            <ExperienceDetails key={ex.id} {...ex} />
          ))}
        </ul>
      </div>
    </section>
  );
}
