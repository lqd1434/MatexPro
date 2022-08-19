import React from 'react';
import FileIcon from '/@cmp/svg/FileIcon';
import styles from './index.module.scss';
import CloseIcon from '/@cmp/svg/CloseIcon';
import clsx from 'clsx';
import { KVConfig } from '/@/Model/ApiTest.model';

interface FileInput {
  rowIndex: number;
  colIndex: number;
  value: KVConfig['value'];
  onChange?: (rowIndex: number, colIndex: number, value: string | File) => void;
}

const FileInput: React.FC<FileInput> = ({ rowIndex, colIndex, value = '', onChange = () => {} }) => {
  const [file, setFile] = React.useState(false);

  const handleChange = (e) => {
    console.log('handleChange');
    if (file) {
      onChange(rowIndex, colIndex, e.target.files?.[0] || new File([], ''));
    } else {
      onChange(rowIndex, colIndex, e.target.value);
    }
  };

  const handleFileInput = () => {
    const inputEle = document.querySelector(`#fileInput${rowIndex}`);
    inputEle && (inputEle as HTMLInputElement).click();
  };

  const onDeleteFile = () => {
    const inputEle = document.querySelector(`#fileInput${rowIndex}`);
    if (inputEle) {
      // @ts-ignore
      (inputEle as HTMLInputElement).value = null;
    }
    onChange(rowIndex, colIndex, '');
  };

  return (
    <div className={styles.fileInput}>
      {file && (
        <div className={styles.fileContent}>
          <div onClick={handleFileInput} className={styles.selectBtn}>
            {(value as File).name || '选择文件'}
          </div>
          {value && (value as File).name && (
            <CloseIcon onClick={onDeleteFile} fill={'#EB5298'} className={clsx(['svgIcon', 'hover'])} />
          )}
        </div>
      )}
      <input
        id={'fileInput' + rowIndex}
        className={styles.input}
        type={file ? 'file' : 'text'}
        onChange={handleChange}
      />
      <div onClick={() => setFile(!file)} className={styles.icon}>
        <FileIcon
          fill={!file ? 'var(--dart-color2)' : 'var(--light-text1)'}
          className={clsx(['svgIcon', 'hover'])}
        />
      </div>
    </div>
  );
};

export default FileInput;