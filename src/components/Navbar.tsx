import Logo from "./Logo";
import CustomLink from "./CustomLink";
import AllMediaLinks from "./AllMediaLinks";
import Container from "./Container";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <header className={"w-full text-dark"}>
      <Container classname={"py-2 flex items-center font-medium gap-4"}>
        <div
          className={
            "flex justify-end flex-row-reverse md:flex-row md:justify-between items-center flex-grow gap-2"
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
        <div className={""}>T</div>
      </Container>
    </header>
  );
}
