import {
  BodyActionType,
  BodyItemType,
  BodyRawType,
  FormatType,
  ResDisplayItemsType,
  TabItems
} from '../type/apiTest';

export const MethodsOptions = ['Get', 'Post', 'Put'];

export const TabsItem: TabItems[] = ['Params', 'Headers', 'Body'];

export const FormatOptions: FormatType[] = ['JSON', 'TEXT', 'HTML', 'XML'];
export const ResDisplayItems: ResDisplayItemsType[] = ['Body', 'Headers'];

export const Actions: BodyActionType[] = ['Pretty', 'Preview'];
export const BodyTypes: BodyItemType[] = ['form-data', 'urlencoded', 'raw', 'binary'];
export const RawOptions: BodyRawType[] = ['text', 'json', 'html', 'javascript'];

export const InitHeaders = [
  { index: 0, key: 'Accept', value: '*/*' },
  { index: 1, key: 'Connection', value: 'keep-alive' }
];


export enum ActionStatus {
  AllHidden = 0,
  AllShow = 1,
  ShowOp = 2

}
