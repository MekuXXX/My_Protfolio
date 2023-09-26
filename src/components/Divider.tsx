type Props = {
  classname?: string;
};
export default function Divider({ classname }: Props) {
  return <div className={"border-t-[#ccc] border-t my-12 " + classname}></div>;
}
