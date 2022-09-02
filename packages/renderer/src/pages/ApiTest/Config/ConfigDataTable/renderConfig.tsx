import React, { Suspense } from 'react';
import KVTable from '/@cmp/Table';
import { BodyRawTypes, KVConfig } from '/@/Model/ApiTest.model';
import {
  RawConfigValue,
  RawTypeValue,
  ReqBodyType,
  ReqConfigType,
  useConfigList
} from '/@/store/ApiTest/config.store';
import { useAtom, useAtomValue } from 'jotai';
import styles from '../index.module.scss';
import MyDropDown from '/@cmp/DropDown';
import { useEditorAction } from '/@cmp/MonacoEditor/editorAction';
import { Editor } from '/@cmp/MonacoEditor/type';
import { LanguageMapper } from '/@cmp/MonacoEditor/utils';
import CircleDotLoading from '/@cmp/Loading/CircleDotLoading';

const MonacoEditor = React.lazy(() => import('/@/components/MonacoEditor'));

export const RenderKVTable = () => {
  const reqBodyType = useAtomValue(ReqBodyType);
  const selConfig = useAtomValue(ReqConfigType);

  const _accept = reqBodyType === 'form-data' || reqBodyType === 'urlencoded';
  const { configList, updateConfig, deleteConfig } = useConfigList(
    selConfig,
    _accept ? reqBodyType : 'urlencoded'
  );

  const onChangeCell = (rowIndex, key, value) => {
    updateConfig(rowIndex, key, value);
  };

  return (
    <KVTable
      file={reqBodyType === 'form-data'}
      type={selConfig}
      data={configList}
      onChangeCell={onChangeCell}
      onRightAction={(e, index) => configList.length !== 1 && deleteConfig(index)}
    />
  );
};

export const RenderMonacoEditor = () => {
  const [rawConfigValue, setRawConfigValue] = useAtom(RawConfigValue);
  const [rawTypeValue, setRawTypeValue] = useAtom(RawTypeValue);

  const { setValue, changeLanguage } = useEditorAction({ id: 'reqRawConfig', readOnly: false });
  const editorRef = React.useRef<Editor | null>(null);

  const language = LanguageMapper.get(rawTypeValue) ?? 'text/plain';

  const onCreated = (editor) => {
    editorRef.current = editor;
    if (editor) {
      setValue({
        language: language,
        editor,
        value: rawConfigValue
      });
    }
  };

  const onChangeRawType = (changes, value) => {
    setRawTypeValue(value);
    editorRef.current && changeLanguage(editorRef.current, LanguageMapper.get(value) ?? 'text/plain');
  };

  return (
    <Suspense fallback={<CircleDotLoading />}>
      <MonacoEditor
        onChange={(changes, value) => {
          setRawConfigValue(value ?? '');
        }}
        onCreated={onCreated}
        onDestroyed={() => (editorRef.current = null)}
        shadow={true}
        border={'1px solid var(--dark-color2)'}
        readOnly={false}
        language={language}
        defaultVal={''}
        height={120}
        width={'100%'}
      />
      <div className={styles.dropDownBox}>
        <MyDropDown menus={BodyRawTypes} selectedKey={rawTypeValue} onSelectionChange={onChangeRawType} />
      </div>
    </Suspense>
  );
};
