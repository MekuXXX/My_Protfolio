import AnimatedText from "@/components/AnimatedText";
import Container from "@/components/Container";
import HireMe from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import NavigateButton from "@/components/NavigateButton";
import TransitionEffect from "@/components/TransitionEffect";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className={
        "flex dark:!bg-dark dark:!text-light items-center w-full h-auto min-h-screen"
      }
    >
      <TransitionEffect />
      <Container
        classname={
          "flex items-center justify-between flex-col p-10 pb-2 lg:flex-row lg:py-0 lg:justify-center gap-4"
        }
      >
        <div className={"w-3/4 lg:w-1/2"}>
          <Image
            src={"/images/profile/developer-pic-1.png"}
            alt={"Mohamed Ali"}
            width={590}
            height={590}
            className="w-full h-auto"
          />
        </div>
        <div className={"w-full lg:w-1/2 text-center lg:text-left"}>
          <AnimatedText
            text={"Turning Vision Into Reality With Code And Design."}
          />
          <p className="my-4 text-base font-medium">
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in React.js and web development.
          </p>
          <div>
            <div
              className={
                "flex items-center justify-center lg:justify-start self-start gap-2"
              }
            >
              <NavigateButton
                path={"/CV.pdf"}
                target={"_blank"}
                text={"Resume"}
                download={true}
                classname={
                  "text-lg font-semibold border border-solid border-transparent gap-2"
                }
                component={<LinkArrow width={"24"} height={"24"} />}
              />
              <NavigateButton
                path={"mailto:xxx@gmail.com"}
                text={"Contact Me"}
                classname={
                  "text-lg font-medium capitalize border border-solid !bg-transparent !text-dark dark:!text-light"
                }
              />
            </div>
          </div>
        </div>
        {/* <HireMe /> */}
        <div className={"absolute right-8 bottom-8 hidden lg:inline-block"}>
          <div className={"relative w-32 h-32"}>
            <Image
              src={"/images/svgs/miscellaneous_icons_1.svg"}
              alt={"Bulb"}
              fill={true}
              className={"w-full h-auto object-contain"}
            />
          </div>
        </div>
      </Container>
    </main>
  );
}
