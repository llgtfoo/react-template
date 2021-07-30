import request from '@/utils/request';

/** 获取当前的用户 GET /api/currentUser */
export async function test(options) {
  return request('/api/test', {
    method: 'GET',
    ...(options || {}),
  });
}
