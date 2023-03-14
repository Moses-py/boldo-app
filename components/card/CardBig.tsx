import Image from "next/image";
import React from "react";
import ParagraphText from "../typography/ParagraphText";
import ProfileImage from "../../public/assets/michael_scott.png";

const CardBig: React.FunctionComponent = () => {
  return (
    <>
      <div>
        <Image src={ProfileImage} alt="card-item" className="mb-[24px]" />

        <div className="mb-[12px] font-primary">
          <h2 className="font-primary text-lg leading-48 text-textDARK">
            Michael Scott
          </h2>
        </div>

        <div className="font-secondary">
          <ParagraphText
            size={"sm"}
            lineHeight={32}
            color={"textGrey"}
            content={"General Manager"}
          />
        </div>
      </div>
    </>
  );
};

export default CardBig;
