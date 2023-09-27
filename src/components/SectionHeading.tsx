type Props = {
  text: string;
  classname?: string;
};
export default function SectionHeading({ text, classname }: Props) {
  return (
    <h2
      className={`pb-4 text-center text-3xl font-bold uppercase ${classname}`}
    >
      {text}
    </h2>
  );
}
