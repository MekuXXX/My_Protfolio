type Props = {
  text: string;
  classname?: string;
};
export default function SectionHeading({ text, classname }: Props) {
  return (
    <h2
      className={`font-bold text-4xl pb-4 text-center uppercase ${classname}`}
    >
      {text}
    </h2>
  );
}
