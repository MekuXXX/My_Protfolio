import { ExperienceData } from "@/utils/data";
import ExperienceDetails from "./ExperienceDetails";
import SectionHeading from "./SectionHeading";
import HelperClasses from "@/utils/helperClasses";
import Divider from "./Divider";

type Props = {};

export default function Experience({}: Props) {
  return (
    <section>
      <SectionHeading text={"Experience"} />
      <div className={"w-[70%] mx-auto relative"}>
        <div className={"side-line"} />
        <ul className={"py-12"}>
          {ExperienceData.map((ex, ind) => (
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
