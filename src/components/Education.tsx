import { EducationData } from "@/utils/data";
import ExperienceDetails from "./ExperienceDetails";
import SectionHeading from "./SectionHeading";
import Divider from "./Divider";

type Props = {};
export default function Education({}: Props) {
  return (
    <section>
      <SectionHeading text={"Education"} />
      <div className={"w-[70%] mx-auto relative"}>
        <div className={"side-line"} />
        <ul className={"py-12"}>
          {EducationData.map((ex, ind) => (
            <div key={ex.id}>
              {ind !== 0 ? <Divider classname={"my-8"} /> : undefined}
              <ExperienceDetails {...ex} />
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
}
