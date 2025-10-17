import Square from '@/components/Square/Square';
import css from './Board.module.css';

const Board = ({ history, onClick }) => {
  return (
    <ul className={css.board}>
      {history[history.length - 1].map((value, index) => (
        <li className={css.boardItem} key={index}>
          <Square onClick={onClick} index={index} value={value} />
        </li>
      ))}
    </ul>
  );
};

export default Board;
