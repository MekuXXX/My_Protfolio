import { GithubIcon, LinkedinIcon, PinterestIcon, TwitterIcon } from "./Icons";
import MediaLink from "./MediaLink";

type Props = {
  classname?: string;
};
export default function AllMediaLinks({ classname }: Props) {
  return (
    <nav
      className={`flex justify-center items-center flex-wrap gap-4 ${classname}`}
    >
      <MediaLink path="/" icon={<GithubIcon width={"25"} height={"25"} />} />
      <MediaLink path="/" icon={<LinkedinIcon width={"25"} height={"25"} />} />
      <MediaLink path="/" icon={<TwitterIcon width={"25"} height={"25"} />} />
      <MediaLink path="/" icon={<PinterestIcon width={"25"} height={"25"} />} />
    </nav>
  );
}
