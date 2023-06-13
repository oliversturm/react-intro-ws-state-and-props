import clsx from 'clsx';
import { produce } from 'immer';
import { memo, useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import ActiveCheck from './ActiveCheck';
import ActiveEditor from './ActiveEditor';
import LastNotifiedEditor from './LastNotifiedEditor';

import styles from './Row.module.css';
import RowActions from './RowActions';

const Row = ({ rowIndex, data, onChange }) => {
  const [editData, setEditData] = useState(null);

  const editStart = useCallback(() => {
    setEditData(data);
  }, [setEditData, data]);

  const editCancel = useCallback(() => {
    setEditData(null);
  }, [setEditData]);

  const editSaveChanges = useCallback(() => {
    onChange && onChange(rowIndex, editData);
    setEditData(null);
  }, [rowIndex, onChange, editData, setEditData]);

  const activeChanged = useCallback(
    (newActive) => {
      setEditData(
        produce((d) => {
          d.active = newActive;
        })
      );
    },
    [setEditData]
  );

  const nameChanged = useCallback(
    ({ target: { value: newName } }) => {
      setEditData(
        produce((d) => {
          d.name = newName;
        })
      );
    },
    [setEditData]
  );

  const lastNotifiedChanged = useCallback(
    (newLastNotified) => {
      setEditData(
        produce((d) => {
          d.lastNotified = newLastNotified;
        })
      );
    },
    [setEditData]
  );

  return (
    <div className={clsx(styles.row, { [styles.active]: data.active })}>
      <RowActions
        editing={!!editData}
        onEditStart={editStart}
        onEditCancel={editCancel}
        onEditSaveChanges={editSaveChanges}
      />
      {editData ? (
        <>
          <div className={styles['edit-details']}>
            <input
              className={styles['edit-name']}
              type="text"
              value={editData.name}
              onChange={nameChanged}
            />
            <LastNotifiedEditor
              lastNotified={editData.lastNotified}
              onChange={lastNotifiedChanged}
            />
          </div>
          <ActiveEditor active={editData.active} onChange={activeChanged} />
        </>
      ) : (
        <>
          <div className={styles.details}>
            <div className={styles.name}>{data.name}</div>
            <div className={styles['last-notified']}>
              Last notified {data.lastNotified}
            </div>
          </div>
          <ActiveCheck active={data.active} />
        </>
      )}
    </div>
  );
};

Row.propTypes = {
  rowIndex: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

const RowMemo = memo(Row);
export default RowMemo;
