import ImgBannerBodyType from '@shared/assets/img/img-banner-body-type.png';
import ImgBannerStyle from '@shared/assets/img/img-banner-style.png';
import ImgBannerItem from '@shared/assets/img/img-banner-item.png';
import ImgSubBannerWeather from '@shared/assets/img/img-sub-banner-weather.png';
import ImgSubBannerSituation from '@shared/assets/img/img-sub-banner-situation.png';
import { BodyTypeQuestion } from '@shared/types';

export const topBanner = [
  {
    id: 0,
    type: '체형 타입',
    title: '나의 체형 타입 분석하기',
    imageUrl: ImgBannerBodyType,
  },
  {
    id: 1,
    type: '스타일 추천',
    title: '취향과 개성에 맞춘 스타일',
    imageUrl: ImgBannerStyle,
  },
  {
    id: 2,
    type: '패션 추천',
    title: '체형과 취향을 반영한 패션',
    imageUrl: ImgBannerItem,
  },
]

export const subBanner = [
  {
    id: 0,
    title: '오늘 날씨에 맞는 패션 추천',
    imageUrl: ImgSubBannerWeather,
  },
  {
    id: 1,
    title: '특정 상황에 어울리는 패션 추천',
    imageUrl: ImgSubBannerSituation,
  },
  {
    id: 2,
    title: '일상에 꼭 맞는 패션 추천',
  },
]

export const surveyList: BodyTypeQuestion[] = [
  {
    id: 0,
    question: '어떤 목을 가지고 계신가요?',
    answers: [
      { id: 0, answer: '목 두께가 얇고 상대적으로 긴 편이다' },
      { id: 1, answer: '목 두께가 얇고 상대적으로 짧은 편이다' },
      { id: 2, answer: '목 두께가 두껍고 상대적으로 긴 편이다' },
      { id: 3, answer: '목 두께가 두껍고 상대적으로 짧은 편이다' },
    ],
  },
  {
    id: 1,
    question: '어떤 쇄골을 가지고 계신가요?',
    answers: [
      { id: 0, answer: '쇄골이 크게 부각되지 않는다' },
      { id: 1, answer: '쇄골이 가늘고 눈에 잘 띈다' },
      { id: 2, answer: '쇄골이 굵고 단단하며 뼈와 힘줄이 돋보인다' },
    ],
  },
  {
    id: 2,
    question: '피부에 해당하는 답변을 선택해주세요!',
    answers: [
      { id: 0, answer: '탄력이 있고 쫀쫀하다' },
      { id: 1, answer: '푹신푹신하고 부드럽다' },
      { id: 2, answer: '보송보송하고 관절과 힘줄이 부각된다' },
    ],
  },
  {
    id: 3,
    question: '다리 길이는 어떤 편인가요?',
    answers: [
      { id: 0, answer: '다리 길이가 상대적으로 짧은 편이다' },
      { id: 1, answer: '다리 길이가 상대적으로 긴 편이다' },
    ],
  },
  {
    id: 4,
    question: '허리 두께에 해당하는 답변을 선택해주세요!',
    answers: [
      { id: 0, answer: '허리가 잘록한 편이다' },
      { id: 1, answer: '허리의 굴곡이 없는 편이다' },
    ],
  },
  {
    id: 5,
    question: '어떤 어깨를 가지고 계신가요?',
    answers: [
      { id: 0, answer: '어깨의 뼈가 크고 넓은 편이다' },
      { id: 1, answer: '어깨의 뼈가 크고 좁은 편이다.' },
      { id: 2, answer: '어깨의 뼈가 작고 넓은 편이다' },
      { id: 3, answer: '어깨의 뼈가 작고 좁은 편이다.' },
    ],
  },
  {
    id: 6,
    question: '엉덩이의 입체감은 어떤 편인가요?',
    answers: [
      { id: 0, answer: '엉덩이가 입체적이며 탄탄하다' },
      { id: 1, answer: '엉덩이의 입체감이 적고 아래로 쳐져 있는 편이다' },
      { id: 2, answer: '엉덩이의 입체감이 적고 납작한 편이다' },
    ],
  },
  {
    id: 7,
    question: '바스트에 해당하는 답변을 선택해주세요!',
    answers: [
      { id: 0, answer: '볼륨감이 있거나 입체적이다' },
      { id: 1, answer: '윗 바스트가 평면적이고 전체적으로 볼륨감이 없는 편이다' },
      { id: 2, answer: '어깨선 및 쇄골뼈가 부각되어 있다' },
    ],
  },
  {
    id: 8,
    question: '어떤 허벅지를 가지고 계신가요?',
    answers: [
      { id: 0, answer: '탄탄하고 근육이 붙어있다' },
      { id: 1, answer: '말랑말랑하고 허벅지 바깥 부분에 살이 붙는다' },
      { id: 2, answer: '전체적으로 허벅지가 얇은 편이다' },
    ],
  },
  {
    id: 9,
    question: '살이 쪘을 때 어디부터 살이 찌시나요?',
    answers: [
      { id: 0, answer: '팔, 가슴, 배 등 상체 위주로 살이 찐다' },
      { id: 1, answer: '엉덩이, 승마살, 허벅지와 같이 하체 위주로 살이 찐다' },
      { id: 2, answer: '살이 잘 붙지 않고 골격이나 관절이 부각되는 편이다' },
    ],
  },
  {
    id: 10,
    question: '체형적 특징을 알려주세요',
    answers: [
      { id: 0, answer: '마른 편이다' },
      { id: 1, answer: '약간 마른 편이다' },
      { id: 2, answer: '보통 체형이다' },
      { id: 3, answer: '약간 덩치가 있는 편이다' },
      { id: 4, answer: '덩치가 있는 편이다' },
    ],
  },
];
