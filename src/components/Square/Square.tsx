import css from './Square.module.css';

const Square = ({
  onClick,
  index,
  value,
}: {
  onClick: (index: number) => void;
  index: number;
  value: string;
}) => {
  const handleClick = () => onClick(index);
  return (
    <button onClick={handleClick} className={css.squareBtn}>
      {value}
    </button>
  );
};

export default Square;
