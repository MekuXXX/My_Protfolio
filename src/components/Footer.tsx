import AllMediaLinks from "./AllMediaLinks";
import Container from "./Container";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="w-full border-t-[1px] border-solid border-dark">
      <Container classname="py-4 flex items-center justify-between flex-col md:flex-row gap-2">
        <div>
          {new Date(Date.now()).getFullYear()} &copy; All Right Reserved
        </div>
        <div className={"flex items-center gap-1"}>
          Build With{" "}
          <span className="text-primary text-2xl font-black">&#9825;</span>{" "}
          <span className="text-lg font-medium">Mohamed Ali</span>
        </div>
        <AllMediaLinks />
      </Container>
    </footer>
  );
}
