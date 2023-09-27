import NavigateButton from "@/components/NavigateButton";

type Props = {};
export default function NotFound({}: Props) {
  return (
    <section className={"flex-center other-container w-full"}>
      <div className={"row main"}>
        <div className={"col-md-12 text-center"}>
          <h1
            className={
              "mt-[10vh] text-[8rem] tracking-wide text-dark dark:text-light"
            }
          >
            404
          </h1>
          <h2
            className={
              "text-[1.5rem] tracking-wide text-dark/75 dark:text-light/75"
            }
          >
            <i className={"fa fa-frown-o"} aria-hidden={"true"} /> Oh! The page
            cannot be found...
          </h2>
          <h3
            className={
              "text-[1.3rem] tracking-wide text-dark/60 dark:text-light/60"
            }
          >
            The link might be incorect...
          </h3>
          <h4
            className={
              "pb-4 text-[1.2rem] tracking-wide text-dark/60 dark:text-light/60"
            }
          >
            or the page was deleted
          </h4>
          <NavigateButton
            path={"/"}
            classname={
              "tracking-wide mx-auto hover:!bg-dark hover:!text-light w-fit dark:hover:!bg-light dark:hover:!text-black uppercase"
            }
          >
            go back
          </NavigateButton>
        </div>
      </div>
    </section>
  );
}
