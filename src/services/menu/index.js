import request from '@/utils/request';

/** 获取当前的用户 GET /api/currentUser */
export async function getMenus(options) {
  return request('/api/getMenus', {
    method: 'GET',
    ...(options || {}),
  });
}
