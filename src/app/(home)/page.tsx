import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";

export default function Home() {
  return (
    <main className={"flex items-center w-full h-auto min-h-screen"}>
      <div className={"container mx-auto flex items-center justify-between"}>
        <div className={"w-1/2"}>
          <Image
            src={"/images/profile/developer-pic-1.png"}
            alt={"Mohamed Ali"}
            width={490}
            height={490}
            className="w-full h-auto"
          />
        </div>
        <div className={"w-1/2"}>
          <AnimatedText
            text={"Turning Vision Into Reality With Code And Design."}
            className={"!text-5xl text-left"}
          />
          <p>
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in React.js and web development.
          </p>
        </div>
      </div>
    </main>
  );
}
