import { request } from 'umi';

/** 获取菜单 GET /api/getMenu */
export async function getMenu(options) {
  return request('/api/getMenu', {
    method: 'GET',
    ...(options || {}),
  });
}
