import React, { useId } from 'react';
import styles from './index.module.scss';
import { ChangeCellFunc, valueType } from '/@cmp/Table';

interface CheckboxProps {
  checked: boolean;
  onChange?: (value: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange = () => {} }) => {
  const id = useId();

  const handleClick = (e) => {
    e.stopPropagation();
    onChange(!checked);
  };

  return (
    <div className={styles.checkbox} onClick={handleClick}>
      <input type="checkbox" id={id} checked={checked} onChange={() => {}} />
      <label htmlFor={id} />
    </div>
  );
};

export default Checkbox;
