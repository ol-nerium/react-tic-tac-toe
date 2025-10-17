import HistoryItem from '../HistoryItem/HistoryItem';
import css from './HistoryList.module.css';

const HistoryList = ({ history, handleReturn }) => {
  return (
    <ol className={css.historyList}>
      {history.map((item: string[], index: number) => {
        return (
          <HistoryItem
            item={item}
            key={`history-${index}`}
            handleReturn={() => handleReturn(index + 1)}
          />
        );
      })}
    </ol>
  );
};

export default HistoryList;
