import ImgBannerBodyType from '@shared/assets/img/img-banner-body-type.png';
import ImgBannerStyle from '@shared/assets/img/img-banner-style.png';
import ImgBannerItem from '@shared/assets/img/img-banner-item.png';
import ImgSubBannerWeather from '@shared/assets/img/img-sub-banner-weather.png';
import ImgSubBannerSituation from '@shared/assets/img/img-sub-banner-situation.png';
import IcBodyTypeSt from '@shared/assets/icon/ic-body-type-st.svg';
import {
  BodyTypeQuestion,
  ImageKeyword,
  RecommendationType,
  StyleKeywordType,
} from '@shared/types';
import IcBodyNeckOne from '@icon/body/ic-body-neck-one.svg?react';
import IcBodyNeckTwo from '@icon/body/ic-body-neck-two.svg?react';
import IcBodyNeckThree from '@icon/body/ic-body-neck-three.svg?react';
import IcBodyNeckFour from '@icon/body/ic-body-neck-four.svg?react';
import IcBodyCollarboneOne from '@icon/body/ic-body-collarbone-one.svg?react';
import IcBodyCollarboneTwo from '@icon/body/ic-body-collarbone-two.svg?react';
import IcBodyCollarboneThree from '@icon/body/ic-body-collarbone-three.svg?react';
import IcBodySkinOne from '@icon/body/ic-body-skin-one.svg?react';
import IcBodySkinTwo from '@icon/body/ic-body-skin-two.svg?react';
import IcBodySkinThree from '@icon/body/ic-body-skin-three.svg?react';
import IcBodyLegManOne from '@icon/body/ic-body-leg-man-one.svg?react';
import IcBodyLegManTwo from '@icon/body/ic-body-leg-man-two.svg?react';
import IcBodyWaistOne from '@icon/body/ic-body-waist-one.svg?react';
import IcBodyWaistTwo from '@icon/body/ic-body-waist-two.svg?react';
import IcBodyGirlShoulderOne from '@icon/body/ic-body-girl-shoulder-one.svg?react';
import IcBodyGirlShoulderTwo from '@icon/body/ic-body-girl-shoulder-two.svg?react';
import IcBodyGirlShoulderThree from '@icon/body/ic-body-girl-shoulder-three.svg?react';
import IcBodyGirlShoulderFour from '@icon/body/ic-body-girl-shoulder-four.svg?react';
import IcBodyHipOne from '@icon/body/ic-body-hip-one.svg?react';
import IcBodyHipTwo from '@icon/body/ic-body-hip-two.svg?react';
import IcBodyHipThree from '@icon/body/ic-body-hip-three.svg?react';
import IcBodyChestOne from '@icon/body/ic-body-chest-one.svg?react';
import IcBodyChestTwo from '@icon/body/ic-body-chest-two.svg?react';
import IcBodyChestThree from '@icon/body/ic-body-chest-three.svg?react';
import IcBodyThighManOne from '@icon/body/ic-body-thigh-man-one.svg?react';
import IcBodyThighManTwo from '@icon/body/ic-body-thigh-man-three.svg?react';
import IcBodyThighManThree from '@icon/body/ic-body-thigh-man-three.svg?react';
import IcBodyFleshOne from '@icon/body/ic-body-flesh-one.svg?react';
import IcBodyFleshTwo from '@icon/body/ic-body-flesh-two.svg?react';
import IcBodyFleshThree from '@icon/body/ic-body-flesh-three.svg?react';
import IcBodyCharacteristicsOne from '@icon/body/ic-body-characteristics-one.svg?react';
import IcBodyCharacteristicsTwo from '@icon/body/ic-body-characteristics-two.svg?react';
import ImgSubBannerDaily from '@shared/assets/img/img-sub-banner-daily.jpg';

export const topBanner = [
  {
    id: 0,
    type: RecommendationType.BODY_TYPE,
    title: '나의 체형 타입 분석하기',
    imageUrl: ImgBannerBodyType,
  },
  {
    id: 1,
    type: RecommendationType.STYLE,
    title: '취향과 개성에 맞춘 스타일',
    imageUrl: ImgBannerStyle,
  },
  {
    id: 2,
    type: RecommendationType.FASHION_ITEM,
    title: '체형과 취향을 반영한 패션',
    imageUrl: ImgBannerItem,
  },
];

export const subBanner = [
  {
    id: 0,
    title: '오늘 날씨에 맞는\n패션 추천',
    imageUrl: ImgSubBannerWeather,
  },
  {
    id: 1,
    title: '특정 상황에 어울리는\n패션 추천',
    imageUrl: ImgSubBannerSituation,
  },
  {
    id: 2,
    title: '일상에 꼭 맞는\n패션 추천',
    imageUrl: ImgSubBannerDaily,
  },
];

export const surveyList: BodyTypeQuestion[] = [
  {
    id: 0,
    question: '어떤 목을 가지고 계신가요?',
    answers: [
      { id: 0, answer: '목 두께가 얇고 상대적으로\n긴 편이다', imageUrl: IcBodyNeckOne },
      { id: 1, answer: '목 두께가 얇고 상대적으로\n짧은 편이다', imageUrl: IcBodyNeckTwo },
      { id: 2, answer: '목 두께가 두껍고 상대적으로\n긴 편이다', imageUrl: IcBodyNeckThree },
      { id: 3, answer: '목 두께가 두껍고 상대적으로\n짧은 편이다', imageUrl: IcBodyNeckFour },
    ],
  },
  {
    id: 1,
    question: '어떤 쇄골을 가지고 계신가요?',
    answers: [
      { id: 0, answer: '쇄골이 크게 부각되지 않는다', imageUrl: IcBodyCollarboneOne },
      { id: 1, answer: '쇄골이 가늘고 눈에 잘 띈다', imageUrl: IcBodyCollarboneTwo },
      {
        id: 2,
        answer: '쇄골이 굵고 단단하며 뼈와\n힘줄이 돋보인다',
        imageUrl: IcBodyCollarboneThree,
      },
    ],
  },
  {
    id: 2,
    question: '피부에 해당하는 답변을 선택해주세요!',
    answers: [
      { id: 0, answer: '탄력이 있고 쫀쫀하다', imageUrl: IcBodySkinOne },
      { id: 1, answer: '푹신푹신하고 부드럽다', imageUrl: IcBodySkinTwo },
      { id: 2, answer: '보송보송하고 관절과\n힘줄이 부각된다', imageUrl: IcBodySkinThree },
    ],
  },
  {
    id: 3,
    question: '다리 길이는 어떤 편인가요?',
    answers: [
      { id: 0, answer: '다리 길이가 상대적으로\n짧은 편이다', imageUrl: IcBodyLegManOne },
      { id: 1, answer: '다리 길이가 상대적으로\n긴 편이다', imageUrl: IcBodyLegManTwo },
    ],
  },
  {
    id: 4,
    question: '허리 두께에 해당하는 답변을 선택해주세요!',
    answers: [
      { id: 0, answer: '허리가 잘록한\n편이다', imageUrl: IcBodyWaistOne },
      { id: 1, answer: '허리의 굴곡이\n없는 편이다', imageUrl: IcBodyWaistTwo },
    ],
  },
  {
    id: 5,
    question: '어떤 어깨를 가지고 계신가요?',
    answers: [
      { id: 0, answer: '어깨의 뼈가\n크고 넓은 편이다', imageUrl: IcBodyGirlShoulderOne },
      { id: 1, answer: '어깨의 뼈가\n크고 좁은 편이다.', imageUrl: IcBodyGirlShoulderTwo },
      { id: 2, answer: '어깨의 뼈가\n작고넓은 편이다', imageUrl: IcBodyGirlShoulderThree },
      { id: 3, answer: '어깨의 뼈가\n작고 좁은 편이다.', imageUrl: IcBodyGirlShoulderFour },
    ],
  },
  {
    id: 6,
    question: '엉덩이의 입체감은 어떤 편인가요?',
    answers: [
      { id: 0, answer: '엉덩이가\n입체적이며 탄탄하다', imageUrl: IcBodyHipOne },
      { id: 1, answer: '엉덩이의 입체감이 적고\n아래로 쳐져 있는 편이다', imageUrl: IcBodyHipTwo },
      { id: 2, answer: '엉덩이의 입체감이\n적고 납작한 편이다', imageUrl: IcBodyHipThree },
    ],
  },
  {
    id: 7,
    question: '바스트에 해당하는 답변을 선택해주세요!',
    answers: [
      { id: 0, answer: '볼륨감이 있거나\n입체적이다', imageUrl: IcBodyChestOne },
      { id: 1, answer: '윗 바스트가 평면적이고\n볼륨감이 없는 편이다', imageUrl: IcBodyChestTwo },
      { id: 2, answer: '어깨선 및 쇄골뼈가\n부각되어 있다', imageUrl: IcBodyChestThree },
    ],
  },
  {
    id: 8,
    question: '어떤 허벅지를 가지고 계신가요?',
    answers: [
      { id: 0, answer: '탄탄하고\n근육이 붙어있다', imageUrl: IcBodyThighManOne },
      {
        id: 1,
        answer: '말랑말랑하고 허벅지\n바깥 부분에 살이 붙는다',
        imageUrl: IcBodyThighManTwo,
      },
      { id: 2, answer: '전체적으로 허벅지가\n얇은 편이다', imageUrl: IcBodyThighManThree },
    ],
  },
  {
    id: 9,
    question: '살이 쪘을 때 어디부터 살이 찌시나요?',
    answers: [
      { id: 0, answer: '팔, 가슴, 배 등\n상체 위주로 살이 찐다', imageUrl: IcBodyFleshOne },
      {
        id: 1,
        answer: '엉덩이, 승마살, 허벅지와\n같이 하체 위주로 살이 찐다',
        imageUrl: IcBodyFleshTwo,
      },
      {
        id: 2,
        answer: '살이 잘 붙지 않고 골격이나\n관절이 부각되는 편이다',
        imageUrl: IcBodyFleshThree,
      },
    ],
  },
  {
    id: 10,
    question: '체형적 특징을 알려주세요',
    answers: [
      { id: 0, answer: '마른 편이다', imageUrl: IcBodyCharacteristicsOne },
      { id: 1, answer: '약간 마른 편이다', imageUrl: IcBodyCharacteristicsTwo },
      { id: 2, answer: '보통 체형이다', imageUrl: IcBodyCharacteristicsTwo },
      { id: 3, answer: '약간 덩치가 있는 편이다', imageUrl: IcBodyCharacteristicsTwo },
      { id: 4, answer: '덩치가 있는 편이다', imageUrl: IcBodyCharacteristicsTwo },
    ],
  },
];

export const keywords: StyleKeywordType[] = [
  {
    id: 0,
    label: '캐주얼',
  },
  {
    id: 1,
    label: '캠퍼스룩',
  },
  {
    id: 2,
    label: '스트릿',
  },
  {
    id: 3,
    label: '클래식',
  },
  {
    id: 4,
    label: '비즈니스룩',
  },
  {
    id: 5,
    label: '세미포멀',
  },
  {
    id: 6,
    label: '오피스룩',
  },
  {
    id: 7,
    label: '모던/미니멀',
  },
  {
    id: 8,
    label: '빈티지',
  },
  {
    id: 9,
    label: '아메카지',
  },
  {
    id: 10,
    label: '러블리룩',
  },
  {
    id: 11,
    label: '테크웨어',
  },
  {
    id: 12,
    label: 'Y2K',
  },
];

export const styleKeywords: ImageKeyword[] = [
  {
    id: 0,
    label: '지적인',
  },
  {
    id: 1,
    label: '섹시한',
  },
  {
    id: 2,
    label: '귀여운',
  },
  {
    id: 3,
    label: '개성있는',
  },
  {
    id: 4,
    label: '차분한',
  },
  {
    id: 5,
    label: '활기찬',
  },
  {
    id: 6,
    label: '힙한',
  },
  {
    id: 7,
    label: '시크한',
  },
  {
    id: 8,
    label: '남성적인',
  },
  {
    id: 9,
    label: '여성스러운',
  },
  {
    id: 10,
    label: '청순한',
  },
];

export const bodyTypeResult = {
  imageUrl: IcBodyTypeSt,
  bodyType: '스트레이트',
  detail:
    '이름 님의 체형은 스트레이트형에 가깝습니다. 골격이 상대적으로 근육감이 느껴지는 어깨와 탄탄한 허벅지를 가진 반면, 허리의 굴곡은 크지 않고 엉덩이는 입체감이 적습니다. 목이 길고 쇄골이 눈에 띄지 않으며, 다리 길이가 상체에 비해 약간 짧은 편입니다. 이 체형은 상체와 하체의 균형을 고려한 스타일링이 중요하며, 체형적 장점을 돋보이게 하기 위해 적절한 실루엣 선택이 필요합니다.',
  emphasize:
    '어깨와 허벅지의 근육감 있는 라인. 이 부분은 피트감이 있는 상의나 슬림 핏 팬츠를 활용해 강조하면 좋습니다. 상체의 볼륨감이 자연스러운 매력을 더해줄 수 있습니다. ',
  supplementation:
    '허리가 굴곡이 뚜렷하지 않으므로, 시각적으로 허리를 강조할 수 있는 스타일링이 필요합니다. 다리 길이를 더 길어 보이게 연출하는 하이웨스트 디자인을 추천합니다.',
};
