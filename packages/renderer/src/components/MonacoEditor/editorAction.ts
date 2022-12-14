import monaco from './monaco';
import { EditorActionProps, SetValueProps, Editor, EditorLanguage } from '/@cmp/MonacoEditor/type';

export const useEditorAction = ({ readOnly = false,id }: EditorActionProps) => {
  //设置编辑器的值
  const setValue = async ({ editor, language, value }: SetValueProps) => {
    if (editor) {
      if (readOnly) {
        editor?.updateOptions({
          readOnly: false
        });
      }
      const model = editor.getModel();
      if (model) {
        const _language = editor.getModel()?.getLanguageId();
        if (_language !== language) {
          editor.setModel(monaco.editor.createModel(value, language));
        } else {
          model.setValue(value);
        }
      } else {
        editor.setModel(monaco.editor.createModel(value, language));
      }
      await editor.getAction('editor.action.formatDocument').run();
      editor?.updateOptions({
        readOnly: readOnly
      });
    }
  };

  //获取编辑器的值
  const getValue = (editor: Editor) => {
    return editor.getValue();
  };

  //设置编辑器语言
  const changeLanguage = async (editor: Editor, language: EditorLanguage) => {
    const preValue = getValue(editor);
    editor.getModel()?.dispose();
    if (readOnly) {
      editor?.updateOptions({
        readOnly: false
      });
    }
    editor.setModel(monaco.editor.createModel(preValue, language));
    await editor.getAction('editor.action.formatDocument')?.run();
    editor?.updateOptions({
      readOnly: readOnly
    });
  };

  //更改编辑器只读状态
  const updateReadOnly = (editor: Editor, readOnly: boolean) => {
    editor.updateOptions({
      readOnly: readOnly
    });
  };

  //执行编辑器的查找操作
  const executeFind = async (editor: Editor) => {
    await editor.getAction('actions.find')?.run();
  };

  return {
    setValue,
    getValue,
    updateReadOnly,
    changeLanguage,
    executeFind
  };
};
