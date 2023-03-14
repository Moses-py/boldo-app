interface ArticleItemProps {
  text: string;
  title: {
    titleHead: string;
    span: string;
  };
}

const ArticleItem: React.FunctionComponent<ArticleItemProps> = ({
  text,
  title,
}) => {
  const { titleHead, span } = title;
  return (
    <>
      <div className="grid grid-cols-2 grid-row-1 mb-[80px]">
        <h1 className="text-xl leading-72 text-textLight font-primary">
          {titleHead} <span className="text-textGreen">{span}</span>
        </h1>
        <p className="text-slate leading-32 text-sm font-secondary">{text}</p>
      </div>
    </>
  );
};

export default ArticleItem;
