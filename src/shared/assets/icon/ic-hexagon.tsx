import { theme } from '@app/styles';
import { ActiveProps } from '@shared/types';

const IcHexagon = ({ $active }: ActiveProps) => {
  const strokeColor = $active ? theme.colors.green500 : 'white';

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="25" height="25">
      <polygon
        stroke={strokeColor}
        strokeWidth="7"
        points="50,10 85,25 85,75 50,90 15,75 15,25"
        fill={theme.colors.gray700}
      />
    </svg>
  );
};

export default IcHexagon;
