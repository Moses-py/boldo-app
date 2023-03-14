import HeaderText from "@/components/typography/HeaderText";

interface FooterItemProps {
  pill?: boolean;
  items: [string, string, string];
  header: string;
}

const FooterItem: React.FunctionComponent<FooterItemProps> = ({
  pill,
  items,
  header,
}) => {
  return (
    <>
      <div className="container">
        <h3 className="text-sm leading-32 text-textDark text-left font-bold">
          {header}
        </h3>
        {pill ? (
          <ul>
            <li className="text-textGrey my-4">{items[0]}</li>
            <li className="text-textGrey my-4">
              {items[1]}
              <span className="w-[72px] h-[30px] px-4 py-2 rounded-full text-primary font-bold leading-24 text-[13px] ml-2 bg-hero">
                Hiring!
              </span>
            </li>
            <li className="text-textGrey my-4">{items[2]}</li>
          </ul>
        ) : (
          <ul>
            {items.map((item) => {
              return (
                <li className="text-textGrey my-4" key={item}>
                  {item}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default FooterItem;
