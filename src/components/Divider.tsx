type Props = {
  classname?: string;
};
export default function Divider({ classname }: Props) {
  return <div className={"my-12 border-t border-t-[#ccc] " + classname}></div>;
}
