import css from './Square.module.css';

const Square = ({ onClick, index, value }) => {
  const handleClick = () => onClick(index);
  return (
    <button onClick={handleClick} className={css.squareBtn}>
      {value}
    </button>
  );
};

export default Square;
