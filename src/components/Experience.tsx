import { ExperienceData } from "@/utils/data";
import ExperienceDetails from "./ExperienceDetails";
import SectionHeading from "./SectionHeading";
import HelperClasses from "@/utils/helperClasses";

type Props = {};

export default function Experience({}: Props) {
  return (
    <section>
      <SectionHeading text={"Experience"} />
      <div className={"mx-auto relative"}>
        <div className={HelperClasses.sections["side-line"]} />
        <ul className={"flex flex-col gap-8 py-12"}>
          {ExperienceData.map((ex) => (
            <ExperienceDetails key={ex.id} {...ex} />
          ))}
        </ul>
      </div>
    </section>
  );
}
