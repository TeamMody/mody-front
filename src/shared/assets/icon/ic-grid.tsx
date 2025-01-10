import { theme } from '@app/styles';
import { ActiveProps } from '@shared/types';

const IcGrid = ({ $active }: ActiveProps) => {
  const strokeColor = $active ? theme.colors.green500 : 'white';

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g stroke={strokeColor} fill={theme.colors.gray700}>
        <path d="M10 3H3V10H10V3Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M21 3H14V10H21V3Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 14H14V21H21V14Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 14H3V21H10V14Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default IcGrid;
