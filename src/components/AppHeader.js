import React from 'react';
import styles from '../styles/modules/app.module.scss';
import Button, { SelectButton } from './Button';
import TodoModal from './TodoModal';

export default function AppHeader() {
  return (
    <div className={styles.appHeader}>
      <Button variant="primary">Add Task</Button>
      <SelectButton>
        <option value="all">ALL</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>
      <TodoModal />
    </div>
  );
}
