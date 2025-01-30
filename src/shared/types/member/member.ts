export interface MemberInfo {
  id: number;
  email: string;
  bodyType?: string;
  provider?: string;
  nickname?: string;
  likeCount: number;
  inspectedBodyTypeCount: number;
  profileImageUrl?: string;
  birthDate?: string;
  gender?: string;
  height?: number;
  status: string;
  role: string;
  loginType: string;
}
