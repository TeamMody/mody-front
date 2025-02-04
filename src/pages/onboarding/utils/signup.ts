import { apiInstance } from '@shared/apis/instance';

/**
 * 회원가입 API 요청을 보내는 함수
 * @param {Record<string, any>} body 회원가입 요청 데이터
 * @returns {Promise<void>}
 */
export const submitSignup = async (body: Record<string, any>): Promise<void> => {
  try {
    const res = await apiInstance.post('/auth/signup/complete', body, {
      headers: { 'Content-Type': 'application/json' },
    });

    console.log('✅ 회원가입 성공:', res.data);
  } catch (error) {
    console.error('❌ 회원가입 요청 실패:', error);
  }
};
