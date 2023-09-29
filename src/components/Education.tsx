import { AboutData } from "@/utils/data";
import ExperienceDetails from "./ExperienceDetails";
import SectionHeading from "./SectionHeading";
import Divider from "./Divider";

type Props = {};
export default function Education({}: Props) {
  return (
    <section>
      <SectionHeading text={"Education"} />
      <div className={"relative mx-auto w-[70%]"}>
        <div className={"side-line"} />
        <ul className={"py-12"}>
          {AboutData.education.map((ex, ind) => (
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
