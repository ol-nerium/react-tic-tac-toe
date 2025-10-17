import { nanoid } from 'nanoid';
import css from './HistoryItem.module.css';
import type { ReactElement } from 'react';

const HistoryItem = ({ item, handleReturn }: { item: string[] }) => {
  return (
    <li className={css.historyItem}>
      <button onClick={handleReturn}>restore</button>
      <ul className={css.list}>
        {item.map((item, index) => (
          <li key={`${index}-${nanoid()}`} className={css.item}>
            {item ? item : '?'}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default HistoryItem;
