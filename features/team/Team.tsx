import CardBig from "@/components/card/CardBig";
import CardSmall from "@/components/card/CardSmall";
import HeaderText from "@/components/text/HeaderText";
import ParagraphText from "@/components/text/ParagraphText";
import Title from "@/components/title/Title";

const Team: React.FunctionComponent = () => {
  return (
    <>
      <section
        id="team"
        className="container flex flex-col justify-center items-center mx-auto py-[125px]"
      >
        <div className="w-1/2">
          <Title color={"textGrey"} content={"Our team"} align={"left"} />
          <div className="container mb-[22.5px]">
            <HeaderText
              color={"textDark"}
              align={"left"}
              content={"The people behind the work"}
            />
          </div>

          <div className="container mb-[56px]">
            <ParagraphText
              size={"sm"}
              lineHeight={32}
              color="textGrey"
              content={
                "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. "
              }
            />
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-center items-center gap-[75px] container mx-auto">
          <CardBig />
          <CardBig />
          <CardBig />
        </div>

        <div className="mx-auto">
          <div className="grid grid-cols-2 grid-rows-2 gap-y-[46px] gap-x-[250px] pt-[110px]">
            <CardSmall />
            <CardSmall />
            <CardSmall />
            <CardSmall />
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
