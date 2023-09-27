import { ProjectType } from "@/utils/data";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { EntypoEye, GithubIcon } from "./Icons";
import NavigateButton from "./NavigateButton";

type Props = {
  array: ProjectType[];
};
export default function ProjectsView({ array }: Props) {
  return (
    <section className={"grid w-full grid-cols-12 gap-y-12 md:gap-x-16"}>
      {array.map((project, ind) => (
        <div
          key={ind}
          className={`bg-card col-span-12
            ${ind !== 0 ? "md:col-span-6" : "md:gap-x-12"} 
            grid grid-cols-12 gap-4 rounded-xl p-6`}
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
              className={
                "object-fit bg-center transition duration-main hover:scale-[1.075]"
              }
            />
          </div>

          {/* Project Card Body*/}
          <div
            className={`col-span-12 ${
              ind === 0 ? "md:col-span-6 md:justify-between" : undefined
            } flex w-full flex-col gap-3 pt-6 md:gap-y-6`}
          >
            <div>
              <p className={"text-primary dark:text-primaryDark"}>
                {project.type}
              </p>
              <NavigateButton
                path={project.link}
                classname={
                  "!px-0 !bg-transparent !text-dark dark:!text-light !justify-start text-lg md:text-2xl lg:text-3xl !py-4 hover:underline"
                }
              >
                <SectionHeading text={project.title} classname={"text-start"} />
              </NavigateButton>
              {project.description ? (
                <p className={"text-dark/75 dark:text-light/75"}>
                  {project.description}
                </p>
              ) : undefined}
            </div>
            <div
              className={`flex items-center justify-between gap-6 ${
                ind === 0 ? "!justify-start" : undefined
              } items-center text-[1.25rem]`}
            >
              <NavigateButton
                path={project.github as string}
                target={"_blank"}
                classname={"!bg-transparent !p-0"}
              >
                <GithubIcon
                  width={"2rem"}
                  className={
                    "inline-block text-8xl text-dark/80 transition duration-main hover:text-dark dark:text-light/80 dark:hover:text-light"
                  }
                />
              </NavigateButton>
              {ind === 0 ? (
                <NavigateButton
                  text={"Visit Site"}
                  target={"_blank"}
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
                  classname={
                    "transition !bg-transparent !text-dark dark:!text-light duration-main hover:text-primary dark:hover:!text-primaryDark !p-0"
                  }
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
