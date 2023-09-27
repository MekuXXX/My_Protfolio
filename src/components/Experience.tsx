import { ExperienceData } from "@/utils/data";
import ExperienceDetails from "./ExperienceDetails";
import SectionHeading from "./SectionHeading";
import Divider from "./Divider";

type Props = {};

export default function Experience({}: Props) {
  return (
    <section>
      <SectionHeading text={"Experience"} />
      <div className={"relative mx-auto w-[70%]"}>
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
