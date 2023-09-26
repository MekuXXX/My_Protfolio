import AnimatedText from "@/components/AnimatedText";
import ArticleCard from "@/components/ArticleCard";
import Container from "@/components/Container";
import Divider from "@/components/Divider";
import NavigateButton from "@/components/NavigateButton";
import SectionHeading from "@/components/SectionHeading";
import { ArticlesData } from "@/utils/data";
import HelperClasses from "@/utils/helperClasses";

type Props = {};
export default function Article({}: Props) {
  return (
    <main>
      <Container classname={"py-8"}>
        <AnimatedText text={"Words Can Change The World!"} />
        <div className={"grid grid-cols-12 gap-x-12 gap-y-10 py-12"}>
          {ArticlesData.map((article) => {
            return (
              <ArticleCard
                key={article.id}
                {...article}
                classname={`${HelperClasses.bg["bg-card"]} col-span-12 md:col-span-6 rounded-lg border border-dark bg-light relative p-8`}
              />
            );
          })}
        </div>
        <Divider />
        <div>
          <SectionHeading text={"All Articles"} />
          <div>
            {ArticlesData.map((article) => (
              <div
                className={`${HelperClasses.bg["bg-card"]} bg-light relative p-6 rounded-lg after:!left-0 my-6 flex items-center gap-6 border border-dark`}
              >
                <NavigateButton
                  path={article.link}
                  classname={"!p-0 hover:underline text-lg"}
                >
                  <p>{article.description}</p>
                </NavigateButton>
                <span className={"min-w-fit text-primary font-semibold"}>
                  {article.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
