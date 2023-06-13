import { produce, freeze } from 'immer';
import { memo, useCallback, useState } from 'react';
import List from './List';

const App = () => {
  const [subscribers, setSubscribers] = useState(
    // freeze to make sure we don't apply direct
    // changes to immutable data
    freeze(
      [
        { name: 'Anna', active: true, lastNotified: '2021-08-03' },
        { name: 'Bill', active: true, lastNotified: '2021-03-09' },
        { name: 'Sue', active: true, lastNotified: '2021-11-27' },
        { name: 'Joe', active: false, lastNotified: '2020-05-18' },
        { name: 'Emma', active: true, lastNotified: '2022-01-03' },
      ],
      true
    )
  );
  const rowChanged = useCallback(
    (rowIndex, row) => {
      setSubscribers(
        produce((d) => {
          d[rowIndex] = row;
        })
      );
    },
    [setSubscribers]
  );
  return (
    <div className="App">
      <List data={subscribers} rowChanged={rowChanged} />
    </div>
  );
};

const AppMemo = memo(App);
export default AppMemo;
