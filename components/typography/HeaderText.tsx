import optimizeProp from "../../helpers/main";

interface HeaderTextProps {
  color: string;
  align: string;
  content: string;
  width?: string;
}

const HeaderText: React.FunctionComponent<HeaderTextProps> = ({
  color,
  align,
  content,
  width,
}) => {
  return (
    <>
      <div className={`container text-${align}`}>
        <h1
          className={` ${optimizeProp(color, "text")} 
          leading-72 text-xl font-primary lg:w-100 ${width}`}
        >
          {content}
        </h1>
      </div>
    </>
  );
};

export default HeaderText;
