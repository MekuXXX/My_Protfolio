import AnimatedText from "@/components/AnimatedText";
import Container from "@/components/Container";
import Image from "next/image";
import HelperClasses from "@/utils/helperClasses";
import CouterStats from "@/components/CouterStats";
import { Bio, AboutStats } from "@/utils/data";
import Skills from "@/components/Skills";
import Divider from "@/components/Divider";
import Experience from "@/components/Experience";
import SectionHeading from "@/components/SectionHeading";
import Education from "@/components/Education";

type Props = {};

export default function About({}: Props) {
  return (
    <main className={"w-full"}>
      <Container classname={"py-8"}>
        <AnimatedText text={"Passion Fuels Purpose!"} classname={"py-8"} />
        <section className={"flex gap-24 flex-col lg:flex-row"}>
          <div
            className={
              "lg:w-[37.5%] flex flex-col items-start justify-start lg:-order-2"
            }
          >
            <SectionHeading
              text={"Biography"}
              classname={"text-start text-dark/75"}
            />
            {Bio.map((body, ind) => (
              <p key={ind} className={"font-medium my-2"}>
                {body}
              </p>
            ))}
          </div>
          <div className={"lg:w-2/4 h-max -order-1"}>
            <div
              className={`relative h-fit w-fit rounded-2xl border-dark border bg-light p-6 ${HelperClasses.bg["bg-card"]}`}
            >
              <Image
                src={"/images/profile/developer-pic-2.jpg"}
                width={599}
                height={599}
                alt={"Mohamed Ali"}
                className={"rounded-2xl"}
              />
            </div>
          </div>
          <div
            className={"lg:w-[12.5%] flex justify-between gap-3 lg:flex-col"}
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
