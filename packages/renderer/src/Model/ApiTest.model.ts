import type { Menus } from '/@/Hooks/useContextMenu';

export type ReqType = 'post' | 'get' | 'put';
export const ReqMethods: ReqType[] = ['post', 'get', 'put'];

export type ConfigType = 'params' | 'header' | 'body';
export const SelConfigs: ConfigType[] = ['params', 'header', 'body'];

export type HerderConfig = {
  key: string;
  value: string;
  opt?: any;
};

export const DefaultHerderConfig: HerderConfig[] = [
  { key: 'Accept', value: '*/*' },
  { key: 'Connection', value: 'keep-alive' }
];
export const InputContextMenus: Menus = [{ key: '复制' }, { key: '粘贴' }, { key: '清除' }];
