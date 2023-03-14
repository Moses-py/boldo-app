import HeaderText from "@/components/text/HeaderText";
import ParagraphText from "@/components/text/ParagraphText";
import Title from "@/components/title/Title";
import React from "react";

const Story: React.FunctionComponent = () => {
  return (
    <>
      <section id="story" className="bg-primary w-100">
        <div className="container mx-auto py-[120px] w-full lg:w-1/2">
          <Title color={"textLight"} content={"Our story"} align={"left"} />

          <div className="mb-[30px]">
            <HeaderText
              color="textLight"
              align="left"
              content="Handshake infographic mass market crowdfunding iteration."
            />
          </div>

          <ParagraphText
            size={"sm"}
            lineHeight={32}
            color="slate"
            content="Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects. Learning curve network effects return on investment bootstrapping business-to-consumer. "
          />
        </div>
      </section>
    </>
  );
};

export default Story;
