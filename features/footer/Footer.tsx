import ParagraphText from "@/components/text/ParagraphText";
import Image from "next/image";
import React from "react";
import FooterItem from "./FooterItems";
import Logo from "../../public/assets/logo.png";

const Footer: React.FunctionComponent = () => {
  return (
    <>
      <footer id="footer" className="mt-[184px] mb-[117px]">
        <div className="grid grid-cols-2 grid-row-1 container mx-auto">
          <div className="container w-1/2">
            <Image src={Logo} alt={"logo"} className="mb-[40px]" />

            <div className="mb-[64px]">
              <ParagraphText
                size={"sm"}
                lineHeight={28}
                content={
                  "Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter."
                }
                color={"textGrey"}
              />
            </div>

            <ParagraphText
              size={"sm"}
              lineHeight={28}
              content={"All rights reserved."}
              color={"textGrey"}
            />
          </div>

          <div className="grid grid-cols-3 grid-row-1 container">
            <FooterItem
              items={["Home", "Products", "Services"]}
              header={"Landings"}
            />

            <FooterItem
              pill={true}
              items={["Home", "Careers", "Services"]}
              header={"Company"}
            />

            <FooterItem
              items={["Blog", "Products", "Services"]}
              header={"Resources"}
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
