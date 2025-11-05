import {HistoryData, THistoryItem} from './types';

export function addHistoryItem({
  history,
  historyData,
  setHistoryData,
}: {
  history: THistoryItem;
  historyData: HistoryData;
  setHistoryData: React.Dispatch<React.SetStateAction<HistoryData>>;
}) {
  const {ans, operation, val1, val2} = history;

  const historyItem: THistoryItem = {
    val1,
    val2,
    operation,
    ans,
  };

  setHistoryData({
    ...historyData,
    history: [...historyData.history, historyItem],
  });
}
