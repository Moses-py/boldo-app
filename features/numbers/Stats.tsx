import HeaderText from "@/components/text/HeaderText";
import Title from "@/components/title/Title";
import Counter from "./Counter";

const Stats: React.FunctionComponent = () => {
  return (
    <>
      <section
        id="stats"
        className="container text-center mx-auto pt-[94px] pb-[120px]"
      >
        <Title color="primary" content="Our numbers" align="center" />

        <div className="container mx-auto px-0 xl:px-[280px] lg:px-[180] md:px-[100] mb-[82px]">
          <HeaderText
            color="primary"
            align="center"
            content="Handshake infographic mass market crowdfunding iteration."
          />
        </div>

        <div className="flex md:flex-row flex-col gap-[40px] items-center justify-center container mx-auto">
          <Counter number="120m" />
          <Counter number="10.000" />
          <Counter number="240" />
        </div>
      </section>
    </>
  );
};

export default Stats;
