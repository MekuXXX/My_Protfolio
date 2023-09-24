import Logo from "./Logo";
import CustomLink from "./CustomLink";
import { PinterestIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";
import MediaLink from "./MediaLink";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <header className="w-full text-dark">
      <div className="container mx-auto font-medium py-9 flex justify-between relative">
        <nav>
          <CustomLink path={"/"} title="Home" />
          <CustomLink path={"/about"} title={"About"} />
          <CustomLink path={"/projects"} title={"Projects"} />
          <CustomLink path={"/articles"} title={"Articles"} />
        </nav>
        <nav className="flex justify-center items-center flex-wrap gap-4">
          <MediaLink
            path="/"
            icon={<GithubIcon width={"25"} height={"25"} />}
          />
          <MediaLink
            path="/"
            icon={<LinkedinIcon width={"25"} height={"25"} />}
          />
          <MediaLink
            path="/"
            icon={<TwitterIcon width={"25"} height={"25"} />}
          />
          <MediaLink
            path="/"
            icon={<PinterestIcon width={"25"} height={"25"} />}
          />
        </nav>
        <div className="absolute left-[50%] translate-x-[-50%] top-2">
          <Logo />
        </div>
      </div>
    </header>
  );
}
