import { theme } from '../../config';
import { ActiveProps } from '../../types';

const IcGrid = ({ $active }: ActiveProps) => {
  const strokeColor = $active ? theme.colors.green500 : 'white';

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90" width="25" height="25">
      <g strokeWidth="6" stroke={strokeColor} fill={theme.colors.gray700}>
        <rect x="10" y="10" width="30" height="30" rx="3" ry="3" />
        <rect x="50" y="10" width="30" height="30" rx="3" ry="3" />
        <rect x="10" y="50" width="30" height="30" rx="3" ry="3" />
        <rect x="50" y="50" width="30" height="30" rx="3" ry="3" />
      </g>
    </svg>
  );
};

export default IcGrid;
