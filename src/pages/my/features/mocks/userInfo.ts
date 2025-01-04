import JungHwiJune from '../mocks/JungHwiJune.png';

interface UserInfo {
  img?: string | undefined;
  name: string;
  type?: string | undefined;
  result: number | undefined;
  like: number | undefined;
}
export const UserInfo: UserInfo | undefined = {
  img: JungHwiJune,
  name: '정휘준',
  type: '#스트레이트 타입',
  result: 12,
  like: 23000,
};
