import Square from '@/components/Square/Square';
import css from './Board.module.css';

const Board = ({
  squares,
  onClick,
  winnerInfo,
}: {
  squares: string[];
  onClick: (i: number) => void;
  winnerInfo:
    | {
        message: string;
        winnerLine: number[];
      }
    | undefined;
}) => {
  const highlighted = winnerInfo ? winnerInfo.winnerLine : null;
  return (
    <ul className={css.board}>
      {squares.map((value, index) => {
        return (
          <li className={css.boardItem} key={index}>
            <Square
              onClick={onClick}
              index={index}
              value={value}
              highlighted={highlighted}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Board;
