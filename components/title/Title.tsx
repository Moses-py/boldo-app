import optimizeProp from "@/helpers/main";
import styles from "../../styles/animations.module.css";

interface TitleProps {
  color: string;
  content: string;
  align: string;
}

const Title: React.FunctionComponent<TitleProps> = ({
  color,
  content,
  align,
}) => {
  return (
    <>
      <div
        className={`container mx-auto text-${align} mb-[12px] ${styles.title}`}
      >
        <p
          className={`text-sm font-secondary ${optimizeProp(
            color,
            "text"
          )} ${optimizeProp(align, "text")} leading-32`}
        >
          {content}
        </p>
      </div>
    </>
  );
};

export default Title;
