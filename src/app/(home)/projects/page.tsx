import AnimatedText from "@/components/AnimatedText";
import Container from "@/components/Container";
import Divider from "@/components/Divider";
import ProjectsView from "@/components/ProjectsView";
import SectionHeading from "@/components/SectionHeading";
import { Projects as PRS } from "@/utils/data";
type Props = {};
export default function Projects({}: Props) {
  return (
    <main>
      <Container classname={"py-8"}>
        <AnimatedText text={"Imagination Trumps Knowledge!"} />
        <SectionHeading text={"Projects"} classname={"text-start py-12"} />
        <div className={"py-8"}>
          {PRS.map((projectArray, ind) => (
            <>
              <ProjectsView key={ind} array={projectArray} />
              {ind !== PRS.length - 1 ? <Divider /> : undefined}
            </>
          ))}
        </div>
      </Container>
    </main>
  );
}
