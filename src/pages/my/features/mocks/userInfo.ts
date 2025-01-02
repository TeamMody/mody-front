import JungHwiJune from '../mocks/JungHwiJune.png';

interface UserInfo {
  img: string;
  name: string;
  type?: string;
  result: number;
  like: number;
}
export const UserInfo: UserInfo = {
  img: JungHwiJune,
  name: '정휘준',
  // type: ,
  result: 12,
  like: 10000,
};
