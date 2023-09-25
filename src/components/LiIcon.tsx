type Props = {};
export default function LiIcon({}: Props) {
  return (
    <figure className={"absolute -left-[3.35rem] stroke-dark"}>
      <svg width={"75"} height={"75"} viewBox={"0 0 100 100"}>
        <circle
          cx={"75"}
          cy={"50"}
          r={"20"}
          className={"stroke-primary stroke-1 fill-none"}
        />
        <circle
          cx={"75"}
          cy={"50"}
          r={"20"}
          className={"stroke-[4px] fill-light"}
        />
        <circle
          cx={"75"}
          cy={"50"}
          r={"10"}
          className={"stroke-2 fill-primary"}
        />
      </svg>
    </figure>
  );
}