import Square from '@/components/Square/Square';
import css from './Board.module.css';

const Board = ({
  squares,
  onClick,
}: {
  squares: string[];
  onClick: (i: number) => void;
}) => {
  return (
    <ul className={css.board}>
      {squares.map((value, index) => (
        <li className={css.boardItem} key={index}>
          <Square onClick={onClick} index={index} value={value} />
        </li>
      ))}
    </ul>
  );
};

export default Board;
