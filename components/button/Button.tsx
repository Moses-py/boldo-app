interface ButtonProps {
  type: string;
  content: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({ type, content }) => {
  return (
    <>
      {type === "filled" && (
        <button className="w-[210px] h-[60px] px-[56px] py-[16px] bg-hero rounded-full font-bold leading-28 text-sm font-secondary">
          {content}
        </button>
      )}
      {type === "outlined" && (
        <button className="w-[128] h-[40px] px-[40px] py-[8px] border border-primary rounded-full text-primary font-bold leading-24 text-xs font-secondary">
          {content}
        </button>
      )}
    </>
  );
};

export default Button;
