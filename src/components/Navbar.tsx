import Logo from "./Logo";
import AllMediaLinks from "./AllMediaLinks";
import Container from "./Container";
import ModeChanger from "./ModeChanger";
import PageSections from "./PageSection";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <header className={"w-full text-dark dark:!bg-dark dark:!text-light"}>
      <Container classname={"py-2 flex items-center font-medium gap-4"}>
        <div
          className={
            "relative flex flex-grow flex-row-reverse items-center justify-between gap-2 md:flex-row md:justify-between"
          }
        >
          <PageSections />
          <Logo />
          <AllMediaLinks classname={"hidden md:flex"} />
        </div>
        <ModeChanger />
      </Container>
    </header>
  );
}
