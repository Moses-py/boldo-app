import optimizeProp from "@/helpers/main";

interface ParagraphTextProps {
  size: string;
  lineHeight: number;
  color?: string;
  content: string;
  spacingTop?: string;
  width?: string;
}

const ParagraphText: React.FunctionComponent<ParagraphTextProps> = ({
  size,
  lineHeight,
  color,
  content,
  width,
}) => {
  return (
    <>
      <div className={`container`}>
        <p
          className={`${optimizeProp(color, "text")} 
          leading-${lineHeight} font-secondary lg:w-100 
          ${width} ${optimizeProp(size, "text")}`}
        >
          {content}
        </p>
      </div>
    </>
  );
};

export default ParagraphText;
