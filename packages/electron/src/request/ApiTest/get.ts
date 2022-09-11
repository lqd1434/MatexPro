import { GetReqParams, KVList } from '/@common/apiTest';
import { getParamsObj, getReqAuthOptions } from '../utils/reqHandle';
import { MatexHttp } from '../../utils/Instance';
import { getResponse } from '../utils/resHandle';

export const doGet = async (props: GetReqParams) => {
  const { url, params } = props;
  const options = getReqAuthOptions(props);
  const paramObj = getParamsObj(params as KVList);
  if (options.qs) {
    options.qs = Object.assign(options.qs, paramObj);
  }
  try {
    const res = await MatexHttp({
      method: 'Get',
      url,
      time: true,
      timeout: 10000,
      ...options
    });
    return getResponse(res);
  } catch (e: any) {
    console.log(e);
    const { stack, errno, code, syscall, address, port } = e;
    return {
      type: 'error',
      errno,
      code,
      syscall,
      address,
      port,
      stack
    };
  }
};
