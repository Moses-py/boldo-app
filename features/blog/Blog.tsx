import HeaderText from "@/components/text/HeaderText";
import Title from "@/components/title/Title";
import ArticleItem from "./ArticleItem";

const Blog: React.FunctionComponent = () => {
  return (
    <>
      <section id="blog" className="bg-primary py-[120px] w-100">
        <div className="container mx-auto">
          <Title color={"textLight"} content={"Our blog"} align={"center"} />

          <div className="pt-[12px] pb-[62px] container mx-auto px-0 xl:px-[280px] lg:px-[180] md:px-[100]">
            <HeaderText
              color={"textLight"}
              align={"center"}
              content={
                "Value proposition accelerator product management venture"
              }
            />
          </div>

          <hr className="border-textLight mb-[84px]" />

          <div className="container">
            <div className="">
              <ArticleItem
                text={
                  "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. "
                }
                title={{
                  titleHead: "We are",
                  span: "committed.",
                }}
              />

              <ArticleItem
                text={
                  "Mass market iPhone buzz conversion analytics stock iteration responsive web design user experience business plan handshake. Return on investment seed round MVP backing supply chain. "
                }
                title={{
                  titleHead: "We are",
                  span: "responsible.",
                }}
              />

              <ArticleItem
                text={
                  "Bootstrapping rockstar first mover advantage business model canvas alpha deployment launch party beta facebook metrics gamification growth hacking customer focus. "
                }
                title={{
                  titleHead: "We aim for",
                  span: "progress.",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
