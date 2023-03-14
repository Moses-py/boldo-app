import Image from "next/image";
import ParagraphText from "../typography/ParagraphText";
import ProfilePic from "../../public/assets/pam_beetsley.png";

const CardSmall: React.FunctionComponent = () => {
  return (
    <>
      <div className="flex flex-row gap-[24px] items-center">
        <Image src={ProfilePic} alt="profile-pic" />

        <div>
          <div className="mb-[12px] font-primary">
            <h2 className="font-primary text-lg leading-48 text-textDARK">
              Pam Beetsley
            </h2>
          </div>

          <div className="">
            <ParagraphText
              size={"sm"}
              lineHeight={32}
              color={"textGrey"}
              content={"General Manager"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSmall;
