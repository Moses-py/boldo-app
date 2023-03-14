import Button from "@/components/button/Button";
import HeaderText from "@/components/typography/HeaderText";
import Input from "./Input";

const Newsletter: React.FunctionComponent = () => {
  return (
    <>
      <section
        id="newsletter"
        className="relative container bg-primary mx-auto py-[73px] mt-[124px] mb-[84px] rounded-[12px] overflow-x-hidden"
      >
        <div className="circle rounded-full h-[1293px] w-[1293px] absolute right-[-55.58%] top-[-263.57%] left-[38.83%] bottom-[38.83%] bg-[#1C3D5B] z-0" />

        <div className="relative w-1/2 container mx-auto z-1">
          <HeaderText
            color={"textLight"}
            align={"center"}
            content={"An enterprise template to ramp up your company website"}
          />

          <div className="flex flex-row gap-[24px] justify-center items-center container mx-auto mt-[50px]">
            <Input />
            <Button type="filled" content="Start now" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
