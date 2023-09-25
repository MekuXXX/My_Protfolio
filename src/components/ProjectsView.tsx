import { ProjectArrayType } from "@/utils/data";
import HelperClasses from "@/utils/helperClasses";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { EntypoEye, GithubIcon } from "./Icons";
import NavigateButton from "./NavigateButton";

type Props = {
  array: ProjectArrayType;
};
export default function ProjectsView({ array }: Props) {
  return (
    <section className={"grid grid-cols-12 gap-y-12 md:gap-x-16 w-full"}>
      {array.map((project, ind) => (
        <div
          key={ind}
          className={`col-span-12 ${HelperClasses.bg["bg-card"]}
            ${ind !== 0 ? "md:col-span-6" : "md:gap-x-12"} 
            grid grid-cols-12 border border-dark bg-light rounded-xl p-6 gap-4 relative
            `}
        >
          {/* Project Card Image*/}
          <div
            className={`col-span-12 min-h-[18rem] ${
              ind === 0 ? "md:col-span-6 md:min-h-[22rem]" : ""
            } relative overflow-hidden rounded-xl`}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill={true}
              className={"object-fit bg-center"}
            />
          </div>

          {/* Project Card Body*/}
          <div
            className={`col-span-12 ${
              ind === 0 ? "md:col-span-6 md:justify-between" : undefined
            } pt-6 flex flex-col gap-3 md:gap-y-6 w-full`}
          >
            <div>
              <p className={"text-primary"}>{project.type}</p>
              <a
                href={project.link}
                className={
                  "block text-lg md:text-2xl lg:text-3xl py-4 transition duration-main hover:underline"
                }
              >
                <SectionHeading text={project.title} classname={"text-start"} />
              </a>
              {project.description ? (
                <p className={"text-dark/75"}>{project.description}</p>
              ) : undefined}
            </div>
            <div
              className={`flex justify-between items-center gap-6 ${
                ind === 0 ? "!justify-start" : undefined
              } items-center text-[1.25rem]`}
            >
              <a href={project.github} target={"_blank"} rel={"noreferrer"}>
                <GithubIcon
                  width={"2rem"}
                  className={
                    "transition duration-main inline-block text-dark/80 hover:text-dark text-8xl"
                  }
                />
              </a>
              {ind === 0 ? (
                <NavigateButton
                  text={"Visit Site"}
                  path={project.link}
                  classname={
                    "bg-dark text-light border border-dark transition duration-main hover:bg-light hover:text-dark !p-2 !text-lg"
                  }
                />
              ) : (
                <NavigateButton
                  path={project.link}
                  text=""
                  target={"_blank"}
                  classname={"transition duration-main hover:text-primary !p-0"}
                  component={
                    <span className={"flex items-center gap-1"}>
                      {" "}
                      <EntypoEye className={"text-2xl"} />
                      <span>Preview</span>
                    </span>
                  }
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
