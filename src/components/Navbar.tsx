import Logo from "./Logo";
import CustomLink from "./CustomLink";
import AllMediaLinks from "./AllMediaLinks";
import Container from "./Container";
import ModeChanger from "./ModeChanger";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <header className={"w-full text-dark dark:!bg-dark dark:!text-light"}>
      <Container classname={"py-2 flex items-center font-medium gap-4"}>
        <div
          className={
            "flex flex-grow flex-row-reverse items-center justify-end gap-2 md:flex-row md:justify-between"
          }
        >
          <nav>
            <CustomLink path={"/"} title="Home" />
            <CustomLink path={"/about"} title={"About"} />
            <CustomLink path={"/projects"} title={"Projects"} />
            <CustomLink path={"/articles"} title={"Articles"} />
          </nav>
          <div>
            <Logo />
          </div>
          <AllMediaLinks classname={"hidden md:flex"} />
        </div>
        <ModeChanger />
      </Container>
    </header>
  );
}
