import AnimatedText from "@/components/AnimatedText";
import ArticleCard from "@/components/ArticleCard";
import Container from "@/components/Container";
import Divider from "@/components/Divider";
import NavigateButton from "@/components/NavigateButton";
import SectionHeading from "@/components/SectionHeading";
import TransitionEffect from "@/components/TransitionEffect";
import { ArticlesData } from "@/utils/data";

type Props = {};
export default function Article({}: Props) {
  const featuredArticle = ArticlesData.filter(
    (article) => article.type === "featured"
  );
  return (
    <main>
      <TransitionEffect />
      <Container classname={"py-8 dark:!text-light"}>
        <AnimatedText text={"Words Can Change The World!"} />
        <div
          className={
            "grid grid-cols-1 md:grid-cols-2 md:gap-x-8 gap-y-10 py-12"
          }
        >
          {featuredArticle.map((article, ind) => {
            return (
              <ArticleCard
                key={article.id}
                {...article}
                classname={`bg-card rounded-lg border relative p-8 ${
                  featuredArticle.length % 2 !== 0
                    ? featuredArticle.length - 1 === ind
                      ? "col-span-full"
                      : ""
                    : ""
                }`}
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
                className={`bg-card relative p-6 rounded-lg my-6 flex flex-col md:flex-row items-center gap-6`}
              >
                <NavigateButton
                  path={article.link}
                  target={"_blank"}
                  classname={
                    "!p-0 text-lg !bg-transparent !text-dark dark:!text-light"
                  }
                >
                  <p>{article.description}</p>
                </NavigateButton>
                <span
                  className={
                    "min-w-fit text-primary dark:text-primaryDark font-semibold"
                  }
                >
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
