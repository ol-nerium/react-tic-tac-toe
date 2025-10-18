import css from './Square.module.css';

const Square = ({
  onClick,
  index,
  value,
  highlighted,
}: {
  onClick: (index: number) => void;
  index: number;
  value: string;
  highlighted: number[] | null;
}) => {
  let clasArr: string = css.squareBtn;
  if (highlighted)
    clasArr = highlighted.includes(index)
      ? `${css.squareBtn} ${css.highlighted}`
      : `${css.squareBtn}`;
  const handleClick = () => onClick(index);

  return (
    <button onClick={handleClick} className={clasArr}>
      {value}
    </button>
  );
};

export default Square;
