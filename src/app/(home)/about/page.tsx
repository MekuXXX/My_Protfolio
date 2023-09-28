import AnimatedText from "@/components/AnimatedText";
import Container from "@/components/Container";
import Image from "next/image";

import CouterStats from "@/components/CouterStats";
import { Bio, AboutStats } from "@/utils/data";
import Skills from "@/components/Skills";
import Divider from "@/components/Divider";
import Experience from "@/components/Experience";
import SectionHeading from "@/components/SectionHeading";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

type Props = {};

export default function About({}: Props) {
  return (
    <main className={"w-full"}>
      <TransitionEffect />
      <Container classname={"py-8"}>
        <AnimatedText text={"Passion Fuels Purpose!"} classname={"py-8"} />
        <section className={"flex flex-col gap-x-24 gap-y-12 lg:flex-row"}>
          <div
            className={
              "flex flex-col items-start justify-start lg:-order-2 lg:w-[37.5%]"
            }
          >
            <SectionHeading
              text={"Biography"}
              classname={"text-start text-dark/75 dark:text-light/75"}
            />
            {Bio.map((body, ind) => (
              <p key={ind} className={"my-2 font-medium"}>
                {body}
              </p>
            ))}
          </div>
          <div
            className={
              "bg-card -order-1 mx-auto aspect-square h-auto w-auto rounded-2xl p-6 lg:h-fit"
            }
          >
            <Image
              src={"/images/profile/developer-pic-2.jpg"}
              width={599}
              height={599}
              alt={"Mohamed Ali"}
              className={"rounded-2xl"}
              priority
            />
          </div>
          <div
            className={"flex justify-between gap-3 lg:w-[12.5%] lg:flex-col"}
          >
            {AboutStats.map(({ stats, name }) => (
              <div
                key={stats + "-" + name}
                className={"text-center md:text-start"}
              >
                <h2 className={"text-5xl font-bold"}>
                  <CouterStats stats={stats} />+
                </h2>
                <span className={"capitalize"}>{name}</span>
              </div>
            ))}
          </div>
        </section>
        <Divider />
        <Skills />
        <Divider />
        <Experience />
        <Divider />
        <Education />
      </Container>
    </main>
  );
}
