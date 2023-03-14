import Navbar from "@/components/navbar/Navbar";
import HeaderText from "@/components/typography/HeaderText";
import ParagraphText from "@/components/typography/ParagraphText";
import Title from "@/components/title/Title";

const Hero: React.FunctionComponent = () => {
  return (
    <>
      <section id="hero" className="bg-hero px-10 md:px-0">
        <Navbar />

        <Title color="primary" content="About" align="left" />

        <div
          className={`flex lg:flex-row flex-col container mx-auto pb-[93.5px] gap-[20px] lg-gap-[60px]`}
        >
          <HeaderText
            color="primary"
            align="left"
            content="We love to make great things, things that matter."
            width="w-5/6"
          />

          <ParagraphText
            size="xs"
            lineHeight={28}
            color="primary"
            width="w-4/6"
            content="Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure."
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
